import { MenuListItem } from "../MenuListItem/MenuListItem";
import style from "./style.module.css"

export function MenuList(){
    return <div className={`box ${style.flexbox}`}> 
        <MenuListItem></MenuListItem>
    </div>
    ;
}