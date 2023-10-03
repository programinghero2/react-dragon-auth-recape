import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import qzone1 from "../../assets/qZone1.png"
import qzone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4'>
                <h1 className="text-2xl font-bold mb-3">Login Width</h1>
                <Link>
                    <button className="btn mb-2 btn-outline w-full text-base normal-case hover:bg-inherit hover:text-black cursor-pointer">
                        <FcGoogle></FcGoogle>
                        Login With Google
                    </button>
                </Link>
                <Link>
                    <button className="btn btn-outline w-full text-base normal-case hover:bg-inherit hover:text-black cursor-pointer">
                        <AiFillGithub></AiFillGithub>
                        Login With Github
                    </button>
                </Link>
            </div>
            <div className='p-4'>
                <h1 className="text-2xl font-bold mb-3">Find Us On</h1>
                <Link className='flex items-center gap-3 border border-gray-600 rounded-t-lg p-5'>
                    <FaFacebookF></FaFacebookF>
                    <span className='text-[#706F6F] text-base'>Facebook</span>
                </Link>
                <Link className='flex items-center gap-3 border-x border-gray-600 p-5'>
                    <FaTwitter></FaTwitter>
                    <span className='text-[#706F6F] text-base'>Twitter</span>
                </Link>
                <Link className='flex items-center gap-3 border border-gray-600 p-5 rounded-b-lg'>
                    <FaInstagram></FaInstagram>
                    <span className='text-[#706F6F] text-base'>Twitter</span>
                </Link>
            </div>
            {/* Q Zone */}
            <div className='p-4'>
                <h1 className="text-2xl font-bold mb-3">Q-Zone</h1>
                <div>
                    <img src={qzone1} alt="" />
                </div>
                <div>
                    <img src={qzone2} alt="" />
                </div>
                <div>
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;