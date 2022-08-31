import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';
import './global.css';

const mockTasks = [
  {
    id: uuidv4(),
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: false,
    deadline: new Date(),
    createdAt: new Date(),
    userId: uuidv4(),
  },
  {
    id: uuidv4(),
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: false,
    deadline: new Date(),
    createdAt: new Date(),
    userId: uuidv4(),
  },
  {
    id: uuidv4(),
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: false,
    deadline: new Date(),
    createdAt: new Date(),
    userId: uuidv4(),
  },
  {
    id: uuidv4(),
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: true,
    deadline: new Date(),
    createdAt: new Date(),
    userId: uuidv4(),
  },
  {
    id: uuidv4(),
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: true,
    deadline: new Date(),
    createdAt: new Date(),
    userId: uuidv4(),
  },
];

interface ITask {
  id: string;
  title: string;
  done: boolean;
  deadline: Date;
  createdAt: Date;
  userId: string;
}

function App() {
  const [tasks, setTasks] = useState([...mockTasks]);

  function createNewTask(newTask: ITask) {
    setTasks([...tasks, newTask]);
  }

  function checkTask(id: String) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = true;
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function uncheckTask(id: String) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = false;
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function deleteTask(id: String) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <>
      <Header />
      <NewTask onCreateNewTask={(newTask) => createNewTask(newTask)} />
      <Tasks
        tasks={tasks}
        onCheckTask={(id) => checkTask(id)}
        onUncheckTask={(id) => uncheckTask(id)}
        onDeleteTask={(id) => deleteTask(id)}
      />
    </>
  );
}

export { App };
