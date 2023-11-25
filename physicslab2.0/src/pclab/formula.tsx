import "./aim.css";
import { AiOutlineClose } from "react-icons/ai";
function Aim(props : any) {
    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner text-black bg-white flex mx-auto rounded-lg">
                {props.children}
                <button id="close_btn" className="flex ml-auto h-fit bg-white text-black" onClick={() => props.setTrigger(false)}><AiOutlineClose/></button>
            </div>
        </div>
     ) : "";
}

export default Aim;