import "./App.css";
import { MenuList } from "./components/MenuList/MenuList";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { useState } from "react";

export function App(){

    const [difficulty,setDifficulty] = useState("")

    function dealTheDifficulty(str){
        setDifficulty(str);
    }

    return <>
    <div className="main">
    <h1> Choose your React course difficulty</h1>
    <div className="boxLayout">
    <MenuList dealTheDifficulty={dealTheDifficulty} ></MenuList>
    <DisplayDifficulty difficulty={difficulty} ></DisplayDifficulty>
    </div>
    </div>
    </>;
}