import React from 'react';

function NewTask(props){
    return(
        <form>
            <label for="task-name"/>Name:
            <input type="text" id="task-name"/>
            <br/>
            <label for="task-priority"/>Priority:
            <select id="task-priority">
                <option>Baja</option>
                <option>Media</option>
                <option>Alta</option>
            </select>
            <br/>
            <label for="end-date"/>End date:
            <input type="date" id="end-date"/>
        </form>
    );
}

export default NewTask;