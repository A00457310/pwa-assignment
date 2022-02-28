import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTask = ({onAdd}) => {
    const [name, setName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const Addtask = (e) => {
        e.preventDefault();

        if(!name){
            alert('Please add task');
            return;
        }

        onAdd({ name, dueDate, assignedTo});
        setName('');
        setDueDate('');
        setAssignedTo('');
    };

    return (
        <form className='add-form' onSubmit={Addtask}>
            <div className='form-control'>
                <label>Task Name</label>
                <input type='text' placeholder='add task name' value={name} onChange={(e) => {
                    setName(e.target.value);
                }}/>
            </div>
            <div className='form-control'>
                <label>Due Date</label>
                <DatePicker selected={dueDate} onChange={(date) => {
                            setDueDate(date);
                        }
                    } 
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
            </div>
            <div className='form-control'>
                <label>Assigned To</label>
                <input type='text' placeholder='Add assigned to' value={assignedTo} onChange={(e) => {
                    setAssignedTo(e.target.value);
                }}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
