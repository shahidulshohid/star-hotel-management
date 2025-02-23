import Banner from "@/components/Banner";
import Image from 'next/image'
import welcomeImg from '@/assets/banner/welcome.jpg'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* welcome section  */}
      <div className="mb-12 mt-24">
        <div className="lg:flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8">
          <div className="w-full lg:w-1/2 text-center space-y-2">
            <div className="flex items-center justify-center gap-1">
            <GoArrowLeft className="mt-1 text-gray-400"/>
            <p className="text-lg text-gray-400">Welcome to Star</p>
            <GoArrowRight className="mt-1 text-gray-400"/>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-600">Finest Luxury Hotels & Resort</h2>
            <p className="text-gray-400">
              Star Hotels and Resorts is a distinctive collection of hotels
              chosen for their rich heritage, enviable central locations and
              personalized guest experience. Each is unique in the story it
              tells, a story revealed through its history, architecture and
              character. This is the star legacy: inimitable hotels in
              coveted locations, run by talented people dedicated to the art of
              hospitality.
            </p>
            <Button variant="destructive" className="text-lg">See More</Button>
          </div>
          <div className="w-full lg:w-1/2 mx-auto">
            <Image className="object-cover" src={welcomeImg} alt=""/>
          </div>
        </div>
      </div>
      {/* feature section  */}
      <div className="my-12">
        <div className="lg:flex justify-between items-center max-w-full mx-auto px-4 md:px-8"></div>
      </div>
    </div>
  );
};

export default Home;
