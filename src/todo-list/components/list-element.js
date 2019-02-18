import React from 'react';
import './list-element.css';
import '../../statics/font-awesome-4.7.0/css/font-awesome.min.css';

function ListElement(props){

    return(
        <div className = "element">
            <input type="checkbox" id="c1" />
            <label className="tdl-check-label" htmlFor="c1">
                <span>
                </span>
                {props.title}
            </label>
            <div className = "tdl-actions">
                <div className="tdl-edit">
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </div>
                <div className="tdl-delete" onClick={() => props.onDelete(props.id, props.title)}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
}

export default ListElement;