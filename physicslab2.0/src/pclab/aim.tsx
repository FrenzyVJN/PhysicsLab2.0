import "./aim.css";

function Aim(props : any) {
    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
                <button className="flex close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
     ) : "";
}

export default Aim;