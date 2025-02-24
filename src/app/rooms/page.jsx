
import { Button } from "@/components/ui/button";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
const Rooms = () => {
  return (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
            <Button variant="destructive" className="text-lg m-6">
              Details
            </Button>
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
            <Button variant="destructive" className="text-lg m-6">
              Details
            </Button>
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
            <Button variant="destructive" className="text-lg m-6">
              Details
            </Button>
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
            <Button variant="destructive" className="text-lg m-6">
              Details
            </Button>
          </div>
          <div
            className="flex justify-left items-end hover:scale-105 transition duration-300"
            style={{
              backgroundImage: "url('/room5.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "280px",
              width: "100%",
            }}
          >
            <Button variant="destructive" className="text-lg m-6">
              Details
            </Button>
          </div>
          <div
            className="flex justify-left items-end hover:scale-105 transition duration-300"
            style={{
              backgroundImage: "url('/room6.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "280px",
              width: "100%",
            }}
          >
            <Button variant="destructive" className="text-lg m-6">
              Details
            </Button>
          </div>
          <div
            className="flex justify-left items-end hover:scale-105 transition duration-300"
            style={{
              backgroundImage: "url('/room7.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "280px",
              width: "100%",
            }}
          >
            <Button variant="destructive" className="text-lg m-6">
              Details
            </Button>
          </div>
          <div
            className="flex justify-left items-end hover:scale-105 transition duration-300"
            style={{
              backgroundImage: "url('/room8.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "280px",
              width: "100%",
            }}
          >
            <Button variant="destructive" className="text-lg m-6">
              Details
            </Button>
          </div>
          <div
            className="flex justify-left items-end hover:scale-105 transition duration-300"
            style={{
              backgroundImage: "url('/room9.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "280px",
              width: "100%",
            }}
          >
            <Button variant="destructive" className="text-lg m-6">
              Details
            </Button>
          </div>
          <div
            className="flex justify-left items-end hover:scale-105 transition duration-300"
            style={{
              backgroundImage: "url('/room10.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "280px",
              width: "100%",
            }}
          >
            <Button variant="destructive" className="text-lg m-6">
              Details
            </Button>
          </div>
          <div
            className="flex justify-left items-end hover:scale-105 transition duration-300"
            style={{
              backgroundImage: "url('/room11.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "280px",
              width: "100%",
            }}
          >
            <Button variant="destructive" className="text-lg m-6">
              Details
            </Button>
          </div>
          <div
            className="flex justify-left items-end hover:scale-105 transition duration-300"
            style={{
              backgroundImage: "url('/room12.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "280px",
              width: "100%",
            }}
          >
            <Button variant="destructive" className="text-lg m-6">
              Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
