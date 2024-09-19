import Link from "next/link";
import Footer from "./components/Footer";
import Steps from "./components/Steps";
import PhoneMockup from "./components/PhoneMockup";

export default function Home() {
  return (
    <>
      <div className="hero h-[65vh] px-8 max-w-[1700px] mx-auto">
        <div className="hero-content text-center ">
          <div className="max-w-md lg:max-w-lg">
            <h1 className="text-5xl font-bold lg:text-6xl">
              Your <span className="header-gradient">Personalized</span> Path to
              Fitness Success 🏋🏽
            </h1>
            <p className="py-6 lg:text-lg">
              Generate custom workout plans tailored to your goals and level. No
              guesswork, just results.
            </p>
            <Link href={"/info"}>
              <button className="btn btn-primary text-lg">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[50vh] flex px-8 items-center justify-center space-x-8 max-w-[1500px] mx-auto my-10">
        <div className="card bg-base-300 xs:w-[80%] lg:w-[60%] h-[50%] flex flex-col items-center justify-center p-5">
          <h2 className="card-title font-extrabold text-2xl text-center">
            What's better than a free workout plan?
          </h2>
          <p className="text-center mt-2">A FREE AI generated workout plan!</p>
        </div>
      </div>
      <div className="h-[50vh] px-8 flex xs:flex-col lg:flex-row max-w-[1500px] mx-auto my-10">
        <div className="flex flex-col justify-center items-center flex-1">
          <h2 className="text-xl text-center font-bold">
            🏋️ Personalized Workout Plans
          </h2>
          <p className="text-center">
            Unlock custom routines tailored just for you!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center flex-1">
          <h2 className="text-xl text-center font-bold">
            💪 AI-Powered Fitness Boost
          </h2>
          <p className="text-center">
            Smarter workouts, better results. Let AI optimize!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center flex-1">
          <h2 className="text-xl text-center font-bold">
            🔄 Fresh Workouts Every Time
          </h2>
          <p className="text-center">
            New plans on demand—no more boring routines!
          </p>
        </div>
      </div>
      <div className="h-[80vh] flex px-8items-center justify-center space-x-8 max-w-[1000px] mx-auto lg:flex-row xs:flex-col my-10">
        <div className="flex-1 flex items-center justify-center flex-col space-y-8">
          <Steps />
          <button className="btn btn-primary">Get Started!</button>
        </div>
        <div
          className="flex-1 xs:h-[50%] lg:h-fit flex items-center justify-center"
          style={{ margin: "0" }}
        >
          <PhoneMockup />
        </div>
      </div>
    </>
  );
}
