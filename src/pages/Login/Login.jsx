import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation,useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const {userLogin} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        console.log(email,password)
        userLogin(email,password)
        .then(result => {
            navigate(location?.state ? location.state : "")
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10">
                <h1 className="text-center text-4xl font-semibold">Login your account</h1>
                <form onSubmit={handleLogin} className="w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="mt-5 text-center">Do not Have An Account ?<Link to="/register" className="text-blue-600">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;