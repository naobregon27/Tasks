// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../redux/actions/taskActions';
import Task from './task';
import TaskForm from './taskForm'; // Asegúrate de que la ruta sea correcta
import Modal from './modal'; // Asegúrate de que la ruta sea correcta

const TaskList = () => {
    const [isAdding, setIsAdding] = useState(false);
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    const handleAddTask = () => {
        setIsAdding(true);
    };

    const handleCloseForm = () => {
        setIsAdding(false);
    };

    const pendingTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <div className="task-list p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Lista de Tareas</h1>
                <button onClick={handleAddTask} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Agregar Tarea</button>
            </div>
            <div className="flex space-x-4">
                <div className="w-1/2 p-4 border border-gray-300 rounded-md shadow-md bg-gradient-to-r from-gray-400 to-blue-400 overflow-hidden">
                    <h2 className="text-xl font-bold mb-2">Pendientes</h2>
                    <div className="grid grid-cols-2 gap-4" style={{ height: '400px', overflowY: 'scroll', scrollbarWidth: 'none' }}>
                        {pendingTasks.map(task => (
                            <Task key={task._id} task={task} />
                        ))}
                        {/* Añadir divs vacíos para mantener el tamaño */}
                        {Array(2 - (pendingTasks.length % 2)).fill('').map((_, index) => (
                            <div key={`empty-pending-${index}`} className="task invisible"></div>
                        ))}
                    </div>
                </div>
                <div className="w-1/2 p-4 border border-gray-300 rounded-md shadow-md bg-gradient-to-r from-gray-400 to-blue-400 overflow-hidden">
                    <h2 className="text-xl font-bold mb-2">Completadas</h2>
                    <div className="grid grid-cols-2 gap-4" style={{ height: '400px', overflowY: 'scroll', scrollbarWidth: 'none' }}>
                        {completedTasks.map(task => (
                            <Task key={task._id} task={task} />
                        ))}
                        {/* Añadir divs vacíos para mantener el tamaño */}
                        {Array(2 - (completedTasks.length % 2)).fill('').map((_, index) => (
                            <div key={`empty-completed-${index}`} className="task invisible"></div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Modal para Agregar Tarea */}
            <Modal isOpen={isAdding} onClose={handleCloseForm}>
                <TaskForm onClose={handleCloseForm} />
            </Modal>
        </div>
    );
};

export default TaskList;
