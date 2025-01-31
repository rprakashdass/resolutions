import { useEffect, useState } from "react";
import Contacts from "../../components/Footer";
import Tasks from "./Tasks";
import Navbar from "../../components/Navbar";

const SectionCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
    {children}
  </div>
);

const TodaysProgress = ({ currentTime }: { currentTime: string }) => (
  <SectionCard>
    <h1 className="text-2xl font-bold mb-3 text-center">Your Today's Progress!</h1>
    <p className="text-gray-700 text-center">
      Hey! {currentTime} left, you can still complete the challenge and update
      your progress!
    </p>
  </SectionCard>
);

const TodaysMotivation = () => (
  <SectionCard>
    <h1 className="text-2xl font-bold mb-3 text-center">Today's Motivation</h1>
    <p className="text-gray-700 text-center">
      Everything you've ever wanted is sitting on the other side of fear.
    </p>
  </SectionCard>
);

const Home = () => {
  const token = localStorage.getItem("token");
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      {token && (
        <>
          <div className="pt-20"></div> {/* Space for Navbar */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 px-8 py-10">
            <TodaysMotivation />
            <TodaysProgress currentTime={currentTime} />
          </div>
          <Tasks />
          <Contacts />
        </>
      )}
    </>
  );
};

export default Home;
