import React from 'react';
// import {this.state.tasks} from './TaskList';

const FormTask = () => {

    // [tasks] = useState(0)

    const CreateTask = () => {

    };

    const HandlerSubmit = (event) => {
        console.log("click")

        event.preventDefault();
    };

    const  HandlerChange = () => {

    };

    return (
        <form action="" onSubmit={HandlerSubmit}>
            {/*<input type="text" value={this.target.value} onChange={HandlerChange}/>*/}
            <input type="submit" value={"Добавить"}/>
        </form>
    );
};

export default FormTask;