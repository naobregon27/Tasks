// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTask } from '../redux/actions/taskActions';
import TaskForm from './taskForm';
import Modal from './modal';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task._id));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCloseForm = () => {
        setIsEditing(false);
    };

    return (
        <div className="task p-4 border border-gray-300 rounded-md shadow-md mb-4">
            <h3 className="text-xl font-bold text-gray-800">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <p className="text-gray-500">{task.completed ? 'Completada' : 'Pendiente'}</p>
            <p className="text-gray-400">{new Date(task.createdAt).toLocaleDateString()}</p>
            <div className="mt-4">
                <button onClick={handleEdit} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Edit</button>
                <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
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
