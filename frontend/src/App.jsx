import { RouterProvider } from "react-router-dom";
import rooter from "./services/rooter";

const App = () => <RouterProvider router={rooter} />;

export default App;