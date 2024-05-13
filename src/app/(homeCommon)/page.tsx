import About from "@/component/ui/Home/About/About";
import Banner from "@/component/ui/Home/Banner/Banner";
import Portfolio from "@/component/ui/Portfolio/Portfolio";
import portfolio from "../../../public/portfolio.json";
import Contact from "@/component/ui/Contact/Contact";
import Blog from "@/component/ui/Blog/Blog";

const page = () => {
  return (
    <div className=" space-y-32">
      <Banner />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
};

export default page;
