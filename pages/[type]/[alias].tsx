import axios from "axios";
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { ParsedUrlQuery } from "querystring";
import React, { useState } from "react";
import {
  TopLevelCategory,
  TopPageModel,
} from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { MenuItem } from "../../interfaces/menu.interface";
import { withLayout } from "../../layout/Layout";
import { FirstLevelMenu } from "../../helpers/helpers";
import { TopPageComponent } from "../../page-components";

function TopPage({ firstCategory, page, products }: TopPageProps) {
  return (
    <TopPageComponent
      page={page}
      firstCategory={firstCategory}
      products={products}
    />
  );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of FirstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
      {
        firstCategory: m.id,
      }
    );
    paths = paths.concat(
      menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`))
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = FirstLevelMenu.find((m) => m.route == params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
      {
        firstCategory: firstCategoryItem.id,
      }
    );
    if (menu.length == 0) {
      return {
        notFound: true,
      };
    }
    const { data: page } = await axios.get<TopPageModel>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias
    );
    const { data: products } = await axios.post<ProductModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
      {
        category: page.category,
        limit: 10,
      }
    );

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
