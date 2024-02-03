import Header from "@/app/ui/common/Header";
import Navbar from "./ui/home/Navbar";
import Furniture from "./ui/home/Furniture/Furniture";
import BestSellerProducts from "./ui/common/BestSellerProducts/BestSellerProducts";

export default function Home() {
  return (
    <div className="pb-10">
      <Header />
      <Navbar />
      <Furniture />
      <BestSellerProducts />
      {/* @TODO finish the remaining static sections */}
    </div>
  );
}
