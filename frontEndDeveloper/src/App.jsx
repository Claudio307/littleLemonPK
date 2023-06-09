import AppRoutes from "./routes";
import { ThemeProvider } from "react-jss";
import theme from "./styles/theme";
import "@/styles/styles.css";
import global from "@/styles/global";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <main className={global().container}>
                    <Header>
                        <Nav />
                    </Header>
                    <AppRoutes />
                    <Footer />
                </main>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
