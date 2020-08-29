import { EDIT_TASK }from "../actions/types";
import { CREATE_TASK }from "../actions/types";

import { REMOVE_TASK }from "../actions/types";
const initialState = [
    // {
    //     id: 1,
    //     title: "State 1",
    //     description: "Lets Do Something",
    //     status: "Completed"
    // },
    // {
    //     id: 2,
    //     title: "State 2",
    //     description: "Lets Do Something again",
    //     status: "In Progress"
    // },
    // {
    //     id: 3,
    //     title: "State 3",
    //     description: "Lets Do Something again AND",
    //     status: "Unstarted"
    // },
];
const tasks = (state= {tasks:initialState}, action)=>{
const { payload } = action;
switch(action.type){
    case EDIT_TASK: {
        return{
            tasks: state.tasks.map((task)=>{
                if (task.id === payload.id){
                    return Object.assign({},task,payload.params);
                }
                return task;
            }),
        };  
    }
    case CREATE_TASK: {
        return{
            tasks: state.tasks.concat(action.payload),
        };
    }

    case REMOVE_TASK: {
        return{
            tasks: state.tasks.filter(task => task.id !== action.id),
        };
    }
    default:
        return state;
}

    
};

export default tasks;