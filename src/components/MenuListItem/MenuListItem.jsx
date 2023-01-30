export function MenuListItem(){
    const levels = ["Low","Medium","Hard","Insane"];

    return <ul> 
       {levels.map((value, index) => {
      return <li key={index}>Set to : {value}</li>
    })}
    </ul>
    ;
}