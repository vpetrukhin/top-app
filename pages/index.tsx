import axios from "axios";
import { GetStaticProps } from "next";
import React, { useState } from "react";
import { Button, Htag, Input, P, Rating, Tag, TextArea } from "../components";
import { MenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../layout/Layout";
import {API} from "../helpers/api";

function Home({ menu, firstCategory }: HomeProps) {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h2">Hello world!</Htag>
      <Button appearence="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearence="ghost" arrow="right">
        Кнопка
      </Button>

      <P size="medium">
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </P>

      <Tag>ghost</Tag>
      <Tag size="medium" color="red">
        Red
      </Tag>
      <Tag size="medium" color="grey">
        grey
      </Tag>
      <Tag size="small" color="green">
        green
      </Tag>
      <Tag size="medium" color="primary">
        primary
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="тест" />
      <TextArea placeholder="Текст отзыва" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    API.topPage.find,
    {
      firstCategory: 0,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
