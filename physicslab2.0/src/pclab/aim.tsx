import "./aim.css";
import { AiOutlineClose } from "react-icons/ai";
function Aim(props : any) {
    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner text-black bg-blue-950 bg-opacity-80 flex w-fit mx-auto rounded-lg">
                {props.children}
                <button id="close_btn" className="flex ml-auto w-fit h-fit bg-inherit text-white" onClick={() => props.setTrigger(false)}><AiOutlineClose/></button>
            </div>
        </div>
     ) : "";
}

export default Aim;