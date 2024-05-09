import { ReactNode } from "react";

export type TChildren = {
  children: ReactNode;
};

export type TPInput = {
  className?: string;
  type: string;
  name: string;
  label?: string;
  placeHolder: string;
};

export interface TSkill {
  num: number;
  img: string;
  name: string;
}

export type TPortfolio = {
  id: number;
  name: string;
  image: string;
  description: string;
  liveLink: string;
  githubLink: string;
};

export type TBlog = {
  id: string
  name: string
  date: string
  image: string
  like: number
  what: string
  why: string
}