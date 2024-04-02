import Banner from "../banner/Banner";
import Catagorylist from "../catagorylist/Catagorylist";
import FeaturedJobs from "../featuredJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagorylist></Catagorylist>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;