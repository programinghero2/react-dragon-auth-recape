import Header from "../../shared/Header/Header";
import {useLoaderData} from "react-router-dom";

const NewsDetails = () => {
    const newsArr = useLoaderData();
    const lsData = JSON.parse(localStorage.getItem("newsId"))
    let newsDetailsArr = []
    if (lsData) {
        for (const item of lsData) {
            const filterLsData = newsArr.find(news => news._id == item._id)
            newsDetailsArr.push(filterLsData)
        }
    }
    console.log(lsData)
    return (
        <div>
            <Header></Header>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default NewsDetails;