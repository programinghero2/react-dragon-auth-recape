import { useEffect, useState } from "react";
import News from "../../pages/Home/News/News";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [newsCategorys,setNewsCategorys] = useState([])
    useEffect(() => {
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setNewsCategorys(data))
    },[])
    return (
        <div>
            <h1 className="text-[#403F3F] text-lg mb-3">All Caterogy</h1>
            {
                newsCategorys.map(newsCategory => 
                <Link className="block" key={newsCategory.id}>
                    <button className="btn w-full btn-ghost bg-[#E7E7E7] mb-2">{newsCategory.name}</button>
                </Link> )
            }
        </div>
    );
};

export default LeftSideNav;