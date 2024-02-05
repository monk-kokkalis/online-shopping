import Header from "@/app/ui/common/Header";
import Navbar from "./ui/common/Navbar";
import Furniture from "./ui/home/Furniture/Furniture";
import BestSellerProducts from "./ui/common/BestSellerProducts/BestSellerProducts";
import FeaturedProducts from "./ui/home/FeaturedProducts/FeaturedProducts";

export default function Home() {
  return (
    <div className="pb-10">
      <Header />
      <div className="container m-auto">
        <Navbar />
        <Furniture />
        <BestSellerProducts />
        <FeaturedProducts />
      </div>
      {/* @TODO finish the remaining static sections */}
    </div>
  );
}
