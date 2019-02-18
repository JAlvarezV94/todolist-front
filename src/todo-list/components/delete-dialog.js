import React from 'react';
import './delete-dialog.css';

function DeleteDialog (props){

    const style = {
        display: props.display,
    }

    return(      
        <div className="modal" style = {style}>
            <div className="modal-dialog">
            <span>Do you really want to delete <strong>{props.name}</strong> ?</span><br/>
            <div>
                <button className="cancel-button">Cancel</button>
                <button className="delete-button">
                    <span><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</span>
                </button>
            </div>
            </div>
        </div>
    );
}

export default DeleteDialog;