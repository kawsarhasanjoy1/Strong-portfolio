import { TChildren, TForm } from "@/types/global";
import React, { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const PForm = ({ children, onSubmit }: TForm) => {
  const methods = useForm();
  const onSubmitHandler = (data: FieldValues) => {
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmitHandler}>{children}</form>
    </FormProvider>
  );
};

export default PForm;
