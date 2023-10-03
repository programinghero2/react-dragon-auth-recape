import { Link } from "react-router-dom";
import moment from 'moment';

const NewsCardInfo = ({ item }) => {

    return (
        <div className="card card-compact w-full bg-base-100  p-5 border mb-7">
            {/* author details */}
            <div className="mb-3">
                <div className="flex items-center gap-3">
                    <img className="w-10 rounded-full" src={item.author.img} alt="" />
                    <div>
                        <p>{item?.author?.name}</p>
                        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                    </div>
                </div>
                <div></div>
            </div>
            {/* title */}
            <div>
                <p className="text-lg font-bold mb-5">{item.title}</p>
            </div>
            <div>
                <figure className="mb-6"><img src={item?.image_url} alt="Shoes" /></figure>
                <p>{item?.details.slice(0, 200)}</p>
                <div className="card-actions">
                    <Link className="text-[#FF8C47]">Read More</Link>
                </div>
                {/* rating */}
                <div className="mb-3 flex justify-between mt-5">
                    <div className="flex items-center gap-3">
                        <p>rating icon</p>
                        <p>rating point</p>
                    </div>
                    <div className="flex gap-3">
                        <p>eye icon</p>
                        <p>see people</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCardInfo;