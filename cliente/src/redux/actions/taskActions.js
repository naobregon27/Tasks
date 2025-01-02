import axios from 'axios';

export const GET_TASKS = 'GET_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';



export const getTasks = () => async dispatch => {
    const response = await axios.get('https://tasks-6boo.onrender.com/api/tasks');
    dispatch({ type: GET_TASKS, payload: response.data });
};

export const createTask = task => async dispatch => {
    const response = await axios.post('https://tasks-6boo.onrender.com/api/tasks', task);
    dispatch({ type: CREATE_TASK, payload: response.data });
};

export const updateTask = (id, updates) => async dispatch => {
    const response = await axios.put(`https://tasks-6boo.onrender.com/api/tasks/${id}`, updates);
    dispatch({ type: UPDATE_TASK, payload: response.data });
};

export const deleteTask = id => async dispatch => {
    await axios.delete(`https://tasks-6boo.onrender.com/api/tasks/${id}`);
    dispatch({ type: DELETE_TASK, payload: id });
};
