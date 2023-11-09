import "./aim.css";

function Aim(props : any) {
    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner flex mx-auto rounded-lg">
                {props.children}
                <button className="flex ml-auto close-btn" onClick={() => props.setTrigger(false)}>close</button>
            </div>
        </div>
     ) : "";
}

export default Aim;