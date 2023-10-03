import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import LeftSideNav from "../../shared/leftSideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";
import News from "./News/News";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="mb-8">
                <BreakingNews></BreakingNews>
            </div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
                <div className="col-span-1 border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <News></News>
                </div>
                <div className="col-span-1 border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;