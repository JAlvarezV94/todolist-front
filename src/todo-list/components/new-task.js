import React from 'react';
import './new-task.css';

function NewTask(props){
    return(
        <form onSubmit={props.onSubmit}>
            <label for="task-name"/>Name:
            <input type="text" id="task-name" name="taskName" className="tdl-form-element"/>
            <br/>
            <label for="task-priority"/>Priority:
            <select id="task-priority" name="taskPriority" className="tdl-form-element">
                <option value={0}>Baja</option>
                <option value={1}>Media</option>
                <option value={2}>Alta</option>
            </select>
            <br/>
            <label for="end-date"/>End date:
            <input type="date" id="end-date" name="endDate" className="tdl-form-element"/>
            <div className="tdl-buttons-form">
                <button onClick = {props.onBack}>
                    <span><i class="fa fa-arrow-left" aria-hidden="true"></i> go back</span>
                </button>
                <input type="submit" value="add task!"/>
            </div>
        </form>
    );
}

export default NewTask;