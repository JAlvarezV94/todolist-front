import React from 'react';
import './list-element.css';
import '../../statics/font-awesome-4.7.0/css/font-awesome.min.css';

function ListElement(props){

    return(
        <div className = "element">
            <input type="checkbox" id="c1" />
            <label className="tdl-check-label" for="c1">
                <span>
                </span>
                {props.title}
            </label>
            <div className = "tdl-actions">
                <div className="tdl-edit">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </div>
                <div className="tdl-delete">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
}

export default ListElement;