import Header from "@/app/ui/common/Header";
import Navbar from "./ui/common/Navbar";
import Furniture from "./ui/home/Furniture/Furniture";
import BestSellerProducts from "./ui/common/BestSellerProducts/BestSellerProducts";
import FeaturedProducts from "./ui/home/FeaturedProducts/FeaturedProducts";
import FeaturedPosts from "./ui/home/FeaturedPosts/FeaturedPosts";
import Reviews from "./ui/home/Reviews/Reviews";
import CallToAction from "./ui/home/CallToAction/CallToAction";
import Footer from "./ui/common/Footer";

export default function Home() {
  return (
    <div className="pb-10">
      <Header />
      <div className="container m-auto">
        <Navbar />
        <Furniture />
        <BestSellerProducts />
        <FeaturedProducts />
        <FeaturedPosts />
        <Reviews />
      </div>
      <CallToAction />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
