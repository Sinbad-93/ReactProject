import "./App.css";
import { MenuList } from "./components/MenuList/MenuList";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";

export function App(){
    return <>
    <div className="main">
    <h1> Choose your React course difficulty</h1>
    <div className="boxLayout">
    <MenuList ></MenuList>
    <DisplayDifficulty></DisplayDifficulty>
    </div>
    </div>
    </>;
}