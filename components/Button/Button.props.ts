import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearence: 'primary' | 'ghost',
  children: ReactNode,
  arrow?: 'right' | 'down' | 'none',
}