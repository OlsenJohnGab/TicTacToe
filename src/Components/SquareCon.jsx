import "./Square.css";

function SquareCon({value, onClick}){
    return(
     <button className="Square bg-green-600" onClick={onClick}>
        {value}
        </button>
    ); 
}

export default SquareCon;