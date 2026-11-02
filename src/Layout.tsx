import { NavLink, Outlet } from 'react-router';

const Layout = () => {
    return (
        <>
            <header className="shadow-md">
                <div className="px-10 py-5 w-4/5 mx-auto my-0">
                    <div className="flex items-center gap-x-5">
                        <NavLink
                            to="/button"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-gray-600'
                            }
                        >
                            Buttons
                        </NavLink>
                        <NavLink
                            to="/spinner"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-gray-600'
                            }
                        >
                            Spinners
                        </NavLink>
                        <NavLink
                            to="/collapse"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-gray-600'
                            }
                        >
                            Collapse
                        </NavLink>
                        {/*<NavLink*/}
                        {/*    to="/dropdown"*/}
                        {/*    className={({ isActive }) =>*/}
                        {/*        isActive*/}
                        {/*            ? 'text-blue-600 font-bold border-b-2 border-blue-600'*/}
                        {/*            : 'text-gray-600'*/}
                        {/*    }*/}
                        {/*>*/}
                        {/*    Dropdowns*/}
                        {/*</NavLink>*/}
                    </div>
                </div>
            </header>

            <div className="my-20 px-10 py-5 w-4/5 mx-auto">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
