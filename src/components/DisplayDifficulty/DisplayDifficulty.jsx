import style from "./style.module.css"

export function DisplayDifficulty(){
    return <div className={`box ${style.darkBorder}
    ${style.flex}
    `}> 
    No difficulty set
</div>;
}