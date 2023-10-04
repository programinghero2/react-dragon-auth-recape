import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='font-poppins w-11/12 mx-auto mt-5'>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;