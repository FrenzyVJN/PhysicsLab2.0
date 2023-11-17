import "./aim.css";
import { AiOutlineClose } from "react-icons/ai";
function Aim(props : any) {
    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner text-black bg-white flex mx-auto rounded-lg">
                {props.children}
                <button className="flex ml-auto text-black" onClick={() => props.setTrigger(false)}><AiOutlineClose/></button>
            </div>
        </div>
     ) : "";
}

export default Aim;