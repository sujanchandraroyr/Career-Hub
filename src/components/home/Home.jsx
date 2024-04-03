import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Catagorylist from "../catagorylist/Catagorylist";
import FeaturedJobs from "../featuredJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub Home</title>
            </Helmet>
            <Banner></Banner>
            <Catagorylist></Catagorylist>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;