import React, { useState } from 'react';
import {
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Typography,
} from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Task = {
    name: string;
    description: string;
    date: Date | null;
    priority: 'High' | 'Medium' | 'Low';
};

function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskName, setTaskName] = useState<string>('');
    const [taskDate, setTaskDate] = useState<Date | null>(null);
    const [taskPriority, setTaskPriority] = useState<'High' | 'Medium' | 'Low'>('Low');

    const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value);
    };

    const handleTaskDateChange = (date: Date | null) => {
        setTaskDate(date);
    };

    const handleAddTask = () => {
        if (taskName.trim() !== '' && taskDate !== null) {
            const newTask: Task = {
                name: taskName,
                description: '',
                date: taskDate,
                priority: taskPriority,
            };

            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);

            setTaskName('');
            setTaskDate(null);
            setTaskPriority('Low');
        }
    };

    const handleDeleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="goal-div">
            <h1 className="goal-title">Goal Planner</h1>
            <div>
                <TextField className="task-name-field" label="Task name" value={taskName} onChange={handleTaskNameChange} />
                <DatePicker className="date-picker"
                    selected={taskDate}
                    onChange={handleTaskDateChange}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select a date"
                />
                <FormControl className="form-control">
                    <InputLabel>Priority</InputLabel>
                    <Select className="priority-select"
                        value={taskPriority}
                        onChange={(e) => setTaskPriority(e.target.value as 'High' | 'Medium' | 'Low')}
                    >
                        <MenuItem value="High">High</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Low">Low</MenuItem>
                    </Select>
                </FormControl>
                <Button className="goal-button" variant="contained" color="primary" onClick={handleAddTask}>
                    Add Goal
                </Button>
            </div>
            <List>
                {tasks.map((task, index) => (
                    <ListItem className="list-item" key={index}>
                        <ListItemText>
                            <Typography variant="h6" style={{
                                color:
                                    task.date !== null && task.date < new Date()
                                        ? 'green'
                                        : task.priority === 'High'
                                        ? 'red'
                                        : task.priority === 'Medium'
                                        ? 'purple'
                                        : task.priority === 'Low'
                                        ? 'green'
                                        : 'initial',
                            }}>
                                {task.name}
                            </Typography>
                            <Typography color="textSecondary">Priority: {task.priority}</Typography>
                            <Typography color="textSecondary">Due Date: {task.date?.toLocaleDateString() || ''}</Typography>
                            <Typography>{task.description}</Typography>
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => handleDeleteTask(index)}
                            >
                                X
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default TaskList;


