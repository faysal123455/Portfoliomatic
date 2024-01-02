import { RouterProvider } from "react-router-dom";
import rooter from "./services/rooter";
import { UserProvider } from "./contexts/UserContext";

const App = () => <UserProvider>
    <RouterProvider router={rooter} />
    </UserProvider>

export default App;