import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustBy/TrustedBy";
import "./Home.scss";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import VideoFeature from "../../components/videoFeature/VideoFeature";
import MarketPlace from "../../components/marketPlace/MarketPlace";

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <VideoFeature />
      <MarketPlace />
    </div>
  );
};

export default Home;
