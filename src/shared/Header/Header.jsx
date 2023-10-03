import logo from "../../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className="text-center">
            <div>
                <div className="flex justify-center">
                    <img src={logo} alt="" />
                </div>
                <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
                {
                    moment().format("dddd, MMMM D, YYYY")
                }
            </div>
        </div>
    );
};

export default Header;