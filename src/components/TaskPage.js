import React, {useState} from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"]

const TaskPage = (props) => {
    const [cardForm, showCardForm] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const formToggler = () =>{
        showCardForm(!cardForm)
    }     
    
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const resetForm = () => {
        setTitle("");
        setDescription("");
        showCardForm(false);
    };

    const onCreateTask = (e) => {
        e.preventDefault();
        props.onCreateTask({
            title, description
        })
        resetForm();
    }

    const renderTaskList = () => {
        const { tasks } = props;
        return TASK_STATUSES.map((status,id) => {
            const statusTasks = tasks.filter((task) => task.status === status);
            return(
                <div className="col-md-3 card m-2 p-0" key={id}>
                    <TaskList
                    key={status}
                    status={status}
                    tasks={statusTasks}
                    onStatusChange={props.onStatusChange}
                    onRemoveTask={props.onRemoveTask}></TaskList>
                </div>
            );
        });

       
    };


    return(
        <div className="container my-5">
           <div className="jumbotron py-3">
               <div className="row">
                   <div className="col-md-2">
                       <button className="btn btn-success m-3" onClick={formToggler}> Add Task </button>

                   </div>
                   <div className="col-md-10">
                    <h2 className="display-4 text-center text-uppercase">Task Manager</h2>
                   </div>

               </div>
               {cardForm &&(
               <form onSubmit={onCreateTask}>
                   <div className="form-group">
                       <input type="text" className="form-control" placeholder="Task Title" onChange={onChangeTitle} />
                   </div>
                   <div className="form-group">
                       <textarea type="text" className="form-control" placeholder="Task Description" onChange={onDescriptionChange} />
                   </div>
                   <button type="submit" className="btn btn-primary">Submit</button>
               </form>
                )}
           </div>
           <div className="row d-flex justify-content-center position-relative" style={{background: "#e9ecef"}}>
               {renderTaskList()}   
           </div>
        </div>
    );
};

export default TaskPage;