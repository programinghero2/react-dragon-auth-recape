import { useEffect, useState } from "react";
import NewsCardInfo from "../../../shared/newsCardInfo/NewsCardInfo";

const News = () => {
    const [news, setNews] = useState([])
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
        fetch("news.json")
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div>
            {
                isShow ? news.map(item => <NewsCardInfo key={item.id} item={item}></NewsCardInfo>) :
                    news.slice(0, 2).map((item,index) => <NewsCardInfo key={index} item={item}></NewsCardInfo>)
            }
            <div className="text-center mb-10">
                <button className="btn btn-ghost" onClick={() => setIsShow(!isShow)}>Show more</button>
            </div>
        </div>
    );
};

export default News;