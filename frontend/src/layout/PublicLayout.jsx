import { Outlet } from "react-router-dom";
import PublicNav from "../components/nav/PublicNav/PublicNav";
const RootLayout = () => {
    return (
        <>
            <PublicNav />
            <Outlet />
        </>
    );
};

export default RootLayout;