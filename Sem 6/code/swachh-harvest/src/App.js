import "./App.css";
import { Footer, Header } from "./components";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
    return (
        <>
            <Header/>
            <AppRoutes/>
            <Footer/>
        </>
    );
}

export default App;
