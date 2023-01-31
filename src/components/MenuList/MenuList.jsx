import { MenuListItem } from "../MenuListItem/MenuListItem";
import style from "./style.module.css"
import { useState } from "react";

export function MenuList(props){

    const levels = ["Low","Medium","Hard","Insane"];
    
    const [picked, setPicked] = useState("");

    function changePicked(difficulty){
        setPicked(difficulty)
    }

    function pickDifficulty(difficulty){
        changePicked(difficulty);
        props.dealTheDifficulty(difficulty);
    }

    return <div className={`box ${style.flexbox}`}> 
    <ul>
    {levels.map((diff,index) => (
    <MenuListItem 
      difficulty={diff}
      picked = {picked}
      pickDifficulty = {pickDifficulty}
      isSelected={picked === diff}
      key={index}>
        </MenuListItem>
    ))}
    </ul>
    </div>
    ;
}