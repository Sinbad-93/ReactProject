import { MenuListItem } from "../MenuListItem/MenuListItem";
import style from "./style.module.css"
import { useState } from "react";

export function MenuList(props){
    
    const [picked, setPicked] = useState(0);

    function changePicked(id){
        setPicked(id)
    }

    function colorPickedRow(id,str){
        const oldElement = document.getElementById(picked);
        oldElement.style.backgroundColor = "rgb(242, 237, 237)";

        const element = document.getElementById(id);
        element.style.backgroundColor = "lightblue";

        changePicked(id);

        props.dealTheDifficulty(str);

        //alert(str);

    }

    return <div className={`box ${style.flexbox}`}> 
        <MenuListItem colorPickedRow={colorPickedRow}></MenuListItem>
    </div>
    ;
}