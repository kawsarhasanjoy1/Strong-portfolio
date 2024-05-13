import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

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
  _id: number;
  name: string;
  image: string;
  description: string;
  liveLink: string;
  githubLink: string;
};

export type TBlog = {
  id: string;
  name: string;
  date: string;
  image: string;
  like: number;
  what: string;
  why: string;
};

export type TConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

export type TForm = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  defaultValues?: Record<string, any>;
} & TConfig;

export interface TUser {
  username: string;
  email: string;
  password: string;
  role: "user" | "admin";
}
