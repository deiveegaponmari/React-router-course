import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Webdev from "./webdevelopment/Webdev";
import Data_cloud from "./Database/Data_cloud";
import Program_lang from "./programming/Program_lang";


export default function Home() {
    return (
        <div className="app-container">
            <Navbar/>
            <Routes>
                <Route Component={Webdev} path="/"></Route>
                <Route Component={Data_cloud} path="/mernstack"></Route>
                <Route Component={Program_lang} path="/mobile"></Route>
            </Routes>
        </div>
    )
}