export function MenuListItem(props){
    const levels = ["Low","Medium","Hard","Insane"];

    function pickDifficulty(e){
        //alert('ok');
        //console.log(e.id);
        //alert(e.id);
        const index = e.id;
        const difficulty = levels[index];
        props.colorPickedRow(index,difficulty);
    }

    return <ul> 
       {levels.map((value, index) => {
      return <li id={index} onClick={e => pickDifficulty(e.target)}
      key={index}>Set to : {value}</li>
    })}
    </ul>
    ;
}