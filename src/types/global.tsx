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
  _id: number;
  image: string;
  name: string;
}

export type TPortfolio = {
  _id: string;
  name: string;
  image: string;
  description: string;
  liveLink: string;
  githubLink: string;
};

export type TBlog = {
  _id: string;
  name: string;
  createdAt: string;
  image: string;
  like: number;
  description: string;
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
