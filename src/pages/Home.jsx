import BannerSlider from "../components/BannerSlider";
import Cta from "../components/Cta";
import Featured from "../components/Featured";
import Statistics from "../components/Statistics";
import WhyChoose from "../components/WhyChoose";

const Home = () => {
    return (
        <>
            <BannerSlider></BannerSlider>
            <Featured></Featured>
            <WhyChoose></WhyChoose>
            <Statistics></Statistics>
            <Cta></Cta>
        </>
    );
};

export default Home;