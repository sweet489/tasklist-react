import React, { useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    // console.log("One element - " + tasks[0].body)

    fetch("http://127.0.0.1:8000/api/gettask")
        .then(res => res.json())
        .then(
            (result) => {
                setTasks(result);
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
                console.log("Get error: " + error)
            }
        )

    const UpdateTask = (id) => {
        fetch("http://127.0.0.1:8000/api/updatetask/", {method: 'POST', body: { id: id, body: 'тест', updated_at: '2021-11-05 15:06'}},)
            .then(res => res.json())
            .then(
                (result) => {
                    // setTasks( tasks.filter(task => task.id === id) );
                    let i = tasks.filter(task => task.id == id)
                    console.log(tasks[i].body);

                },
                (error) => {
                    console.log("Update error: " + error);
                }
            )

    };

    const DeleteTask = (id) => {
        fetch("http://127.0.0.1:8000/api/deletetask/" + id, {method: 'DELETE'})
            .then(res => res.json())
            .then(
                (result) => {
                    // this.setState({
                    //     isDeleted: true,
                    //     tasks: this.state.tasks.filter(task => task.id !== id)
                    // })
                    setTasks( tasks.filter(task => task.id !== id));
                },
                (error) => {
                    // this.setState({
                    //     isDeleted: false,
                    //     error
                    // })
                }
            )
    }

    return (
        tasks.map((task, index) => {
            return (
                <p key={task.id}>
                    <button>Изменить</button>
                    {task.body} -- {task.created_at}
                    <button onClick={(e) => DeleteTask(task.id, e)}>Удалить</button>
                </p>
            )
        })
    )
}

export default TaskList;