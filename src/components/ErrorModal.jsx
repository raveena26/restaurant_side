import "./ErrorModal.css"
const ErrorModal=(props)=>{
    return (
        <div className="modal">
            <h4 className="modal-title">{props.title}</h4> <br />
            <div className="modal-body">
                {props.message}
            </div>
            <div className="modal-footer">
                <button className="button" onClick={()=>{props.onClose()}}>
                    Close
                </button>

            </div>

        </div>
        
    )


}

export  default ErrorModal