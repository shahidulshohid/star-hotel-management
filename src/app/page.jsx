import Banner from "@/components/Banner";
import Image from "next/image";
import welcomeImg from "@/assets/welcome.jpg";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { Button } from "@/components/ui/button";
import feature1 from "@/assets/feature1.jpg";
import feature2 from "@/assets/feature2.jpg";
import feature3 from "@/assets/feature3.jpg";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* welcome section  */}
      <div className="mt-24">
        <div className="lg:flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8">
          <div className="w-full lg:w-1/2 text-center space-y-2 mb-5 lg:mb-0">
            <div className="flex items-center justify-center gap-1">
              <GoArrowLeft className="mt-1 text-gray-400" />
              <p className="text-lg text-gray-400">WELCOME TO STAR</p>
              <GoArrowRight className="mt-1 text-gray-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
              Finest Luxury Hotels & Resort
            </h2>
            <p className="text-gray-400">
              Star Hotels and Resorts is a distinctive collection of hotels
              chosen for their rich heritage, enviable central locations and
              personalized guest experience. Each is unique in the story it
              tells, a story revealed through its history, architecture and
              character. This is the star legacy: inimitable hotels in coveted
              locations, run by talented people dedicated to the art of
              hospitality.
            </p>
            <Button variant="destructive" className="text-lg">
              Details
            </Button>
          </div>
          <div className="w-full lg:w-1/2 mx-auto">
            <Image className="object-cover" src={welcomeImg} alt="" />
          </div>
        </div>
      </div>
      {/* feature section  */}
      <div className="my-24">
        <div className="flex items-center justify-center gap-1">
          <GoArrowLeft className="mt-1 text-gray-400" />
          <p className="text-lg text-gray-400">ENJOY LUXURY PRIVILEGES</p>
          <GoArrowRight className="mt-1 text-gray-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mt-2">
          Featured Specials
        </h2>
        <div className="lg:flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="overflow-hidden">
              <Image
                className="object-cover hover:scale-125 transition duration-300"
                src={feature1}
                alt=""
              />
            </div>
            <div className="overflow-hidden">
              <Image
                className="object-cover hover:scale-125 transition duration-300"
                src={feature3}
                alt=""
              />
            </div>
            <div className="overflow-hidden">
              <Image
                className="object-cover hover:scale-125 transition duration-300"
                src={feature2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* room and suites  */}
      <div className="mb-24">
        <div className="flex items-center justify-center gap-1">
          <GoArrowLeft className="mt-1 text-gray-400" />
          <p className="text-lg text-gray-400">DISCOVER</p>
          <GoArrowRight className="mt-1 text-gray-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mt-2">
          Rooms & Suites
        </h2>
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              className="flex justify-left items-end hover:scale-105 transition duration-300"
              style={{
                backgroundImage: "url('/room1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "280px",
                width: "100%",
              }}
            >
              <div className="flex justify-between items-center">
                <Button variant="destructive" className="text-lg m-6">
                  Details
                </Button>
                <Link href={`/rooms`}>
                  <Button variant="destructive" className="text-lg m-6">
                    See More
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className="flex justify-left items-end hover:scale-105 transition duration-300"
              style={{
                backgroundImage: "url('/room2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "280px",
                width: "100%",
              }}
            >
              <div className="flex justify-between items-center">
                <Button variant="destructive" className="text-lg m-6">
                  Details
                </Button>
                <Link href={`/rooms`}>
                  <Button variant="destructive" className="text-lg m-6">
                    See More
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className="flex justify-left items-end hover:scale-105 transition duration-300"
              style={{
                backgroundImage: "url('/room3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "280px",
                width: "100%",
              }}
            >
              <div className="flex justify-between items-center">
                <Button variant="destructive" className="text-lg m-6">
                  Details
                </Button>
                <Link href={`/rooms`}>
                  <Button variant="destructive" className="text-lg m-6">
                    See More
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className="flex justify-left items-end hover:scale-105 transition duration-300"
              style={{
                backgroundImage: "url('/room4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "280px",
                width: "100%",
              }}
            >
              <div className="flex justify-between items-center">
                <Button variant="destructive" className="text-lg m-6">
                  Details
                </Button>
                <Link href={`/rooms`}>
                  <Button variant="destructive" className="text-lg m-6">
                    See More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
