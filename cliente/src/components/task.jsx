// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTask, updateTask } from '../redux/actions/taskActions';
import TaskForm from './TaskForm';
import Modal from './Modal';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task._id));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleToggleComplete = () => {
        dispatch(updateTask(task._id, { ...task, completed: !task.completed }));
    };

    const handleCloseForm = () => {
        setIsEditing(false);
    };

    return (
        <div className="task p-4 border-4 border-gray-800 rounded-md shadow-lg mb-4 border-animated bg-blue-500 bg-opacity-50">
            <h3 className="text-xl font-bold text-black">{task.title}</h3>
            <p className="text-white">{task.description}</p>
            <p className="text-gray-800">{task.completed ? 'Completada' : 'Pendiente'}</p>
            <p className="text-gray-700">{new Date(task.createdAt).toLocaleDateString()}</p>
            <div className="mt-4 flex flex-wrap justify-between gap-2">
                <button
                    onClick={handleEdit}
                    className="flex-1 sm:flex-none bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover-bounce hover:shadow-lg hover:shadow-blue-500/50"
                >
                    Edit
                </button>
                <button
                    onClick={handleDelete}
                    className="flex-1 sm:flex-none bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 hover-bounce hover:shadow-lg hover:shadow-red-500/50"
                >
                    Delete
                </button>
                <button
                    onClick={handleToggleComplete}
                    className="flex-1 sm:flex-none bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 hover-bounce hover:shadow-lg hover:shadow-green-500/50"
                >
                    {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
                </button>
            </div>

            {/* Modal para Editar Tarea */}
            <Modal isOpen={isEditing} onClose={handleCloseForm}>
                <TaskForm task={task} onClose={handleCloseForm} />
            </Modal>
        </div>
    );
};

Task.propTypes = {
    task: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        createdAt: PropTypes.string.isRequired,
    }).isRequired,
};

export default Task;
