"use client";
import { TConfig, TForm } from "@/types/global";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

const PForm = ({ children, onSubmit, defaultValues, resolver }: TForm) => {
  const formConfig: TConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  const { handleSubmit } = methods;
  const onSubmitHandler = (data: FieldValues) => {
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>{children}</form>
    </FormProvider>
  );
};

export default PForm;
