import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import Body from "../Compenents/Body";
import ContatoScreen from "../screens/ContatoScreen";
import SobreScreen from "../screens/SobreScreen";
import ExercicioScreen from "../screens/ExercicioScreen";
import CardScreen from "../screens/CardScreen";



function RootRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Body />} path="/">
                    <Route element={<HomeScreen />} path="/" />
                    <Route element={<ContatoScreen />} path="/Contato" />
                    <Route element={<SobreScreen />} path="/Sobre" />
                    <Route element={<ExercicioScreen/>} path="/Exercicio" />
                    <Route element={<CardScreen/>} path="/Card" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RootRouter;
