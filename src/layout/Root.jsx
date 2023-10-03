import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='font-poppins w-11/12 mx-auto mt-10'>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;