// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createTask, updateTask } from '../redux/actions/taskActions';

const TaskForm = ({ task, onClose }) => {
    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const [completed, setCompleted] = useState(task ? task.completed : false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            dispatch(updateTask(task._id, { title, description, completed }));
            window.alert('Tarea modificada');
        } else {
            dispatch(createTask({ title, description, completed }));
            window.alert('Tarea agregada');
        }
        onClose(); // Llamamos a la función de cierre después de guardar los cambios
    };

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setCompleted(task.completed);
        }
    }, [task]);

    return (
        <div className="task-form p-4 border border-gray-300 rounded-md shadow-md mb-4 border-animated bg-white bg-opacity-50">
            <h2 className="text-2xl font-bold mb-4 text-black">
                {task ? 'Actualizar Tarea' : 'Agregar Tarea'}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2">Completed</label>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                        className="h-4 w-4 text-blue-600"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 hover-bounce hover:shadow-lg hover:shadow-gray-500/50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover-bounce hover:shadow-lg hover:shadow-blue-500/50"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

TaskForm.propTypes = {
    task: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        completed: PropTypes.bool,
    }),
    onClose: PropTypes.func.isRequired,
};

export default TaskForm;
