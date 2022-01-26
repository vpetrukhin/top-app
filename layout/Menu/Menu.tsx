import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Menu.module.css";
import cn from "classnames";
import { AppContext } from "../../context/menu.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import { FirstLevelMenu } from "../../helpers/helpers";

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory == secondCategory) {
            m.isOpened = !m.isOpened;
          }

          return m;
        })
      );
  };

  const buildFirstLevelMenu = (): JSX.Element => (
    <>
      {FirstLevelMenu.map((m) => (
        <div key={m.route}>
          <Link href={`/${m.route}`}>
            <a>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id == firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
          </Link>
          {m.id == firstCategory && buildSecondLevelMenu(m)}
        </div>
      ))}
    </>
  );

  const buildSecondLevelMenu = (menuItem: FirstLevelMenuItem): JSX.Element => (
    <div className={styles.secondLevelWrapper}>
      {menu.map((m) => {
        if (m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])) {
          m.isOpened = true;
        }
        return (
          <div key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevelMenu(m.pages, menuItem.route)}
            </div>
          </div>
        );
      })}
    </div>
  );

  const buildThirdLevelMenu = (
    pages: PageItem[],
    route: string
  ): JSX.Element => {
    return (
      <>
        {pages.map((p) => (
          <Link href={`/${route}/${p.alias}`} key={p.category}>
            <a
              className={cn(styles.thirdLevel, {
                [styles.thirdLevelActive]:
                  `/${route}/${p.alias}` == router.asPath,
              })}
            >
              {p.category}
            </a>
          </Link>
        ))}
      </>
    );
  };

  return <nav className={styles.menu}>{buildFirstLevelMenu()}</nav>;
};
