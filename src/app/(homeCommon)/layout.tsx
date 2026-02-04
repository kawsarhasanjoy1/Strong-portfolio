import Container from "@/component/Containert/Container";
import Footer from "@/component/Shared/Footer";
import Header from "@/component/Shared/Header";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="pt-16 md:pt-0 px-4 md:px-0  py-10">
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  );
};

export default layout;
