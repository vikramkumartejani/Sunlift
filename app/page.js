import Hero from "./components/Hero";
import AboutSunLifterClub from "./components/home/AboutSunLifterClub";
import FrequentlyAskedQuestions from "./components/home/FrequentlyAskedQuestions";
import GetAppNow from "./components/home/GetAppNow";
import ViewAvailableRoutine from "./components/home/ViewAvailableRoutine";

export default function Home() {
  return (
    <div>     
      <Hero/>
      <AboutSunLifterClub/>
      <ViewAvailableRoutine/>
      <GetAppNow/>
      <FrequentlyAskedQuestions/>
    </div>
  );
}
