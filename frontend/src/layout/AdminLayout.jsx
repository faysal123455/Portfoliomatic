import { Outlet } from "react-router-dom";
import AdminNav from "../components/nav/AdminNav/AdminNav";
const RootLayout = () => {
    return (
        <>

            <AdminNav />
            <Outlet />
        </>
    );
};

export default RootLayout;