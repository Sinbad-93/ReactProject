import { useState } from "react";

export function MenuListItem(props){

    const [isHovered, setIsHovered] = useState(false);

    function backgroundPainting(){
        if(props.isSelected){
            return "lightblue"
        }
        else if(isHovered) {
            return "aqua"
        }
        else {
            return "rgb(242, 237, 237)"
        }
    }
      return <li 
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} 
      style={{backgroundColor : backgroundPainting()}}
      onClick={() => props.pickDifficulty(props.difficulty)}
      >Set to : {props.difficulty}</li>
    ;
}