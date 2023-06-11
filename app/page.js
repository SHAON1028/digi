// import Image from 'next/image'
import Navbar from './coponent/navbar/Navbar'
import HeroSection from './coponent/home/hero/HeroSection';
import Hiring from './coponent/home/hiring/Hiring';
import Category from './coponent/home/category/Category';
import Solution from './coponent/home/solution/Solution';
import Count from './coponent/home/count/Count';
import Review from './coponent/home/review/Review';
import Company from './coponent/home/company/Company';
import Footer from './coponent/footer/Footer';

export default function Home() {
  return (
    <main className="">
      <div className="bg-[#F5F5F5]">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Hiring></Hiring>
        <Category></Category>
        <Solution></Solution>
        <Count></Count>
        <Review></Review>
        <Company></Company>
        <Footer></Footer>
      </div>
    </main>
  );
}
