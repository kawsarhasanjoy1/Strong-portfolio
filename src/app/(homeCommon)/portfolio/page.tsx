import PortfolioCart from "@/component/ui/Home/PortfolioCart/PortfolioCart";
import products from "../../../../public/portfolio.json";

const page = () => {
  return (
    <div>
      <p className=" text-3xl font-bold text-center text-white my-10">
        Portfolio
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <PortfolioCart products={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default page;
