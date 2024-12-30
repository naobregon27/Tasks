import 'react';
import TaskList from './components/taskList';
import "./App.css"

function App() {
    return (
        <div className="App">
            <h1>Lista de Tareas</h1>
            <TaskList />
        </div>
    );
}

export default App;
