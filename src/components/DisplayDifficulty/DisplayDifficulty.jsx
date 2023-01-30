import style from "./style.module.css"

export function DisplayDifficulty(props){
    return <div className={`box ${style.darkBorder}
    ${style.flex}
    `}> 
     {props.difficulty != "" ? 
     "Difficulty set to "+ props.difficulty
     : 
     "No difficutly set" }
</div>;
}