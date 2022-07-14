import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import close from "./close.svg";
import menu from "./menu.svg";
import up from "./up.svg";

export const icons = {
  up, close, menu
}

export type IconsType = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearence: 'primary' | 'white',
  icon: IconsType;
}