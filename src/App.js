import './App.css';
import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import TaskList from '../src/components/TaskList';
import FormTask from "./components/FormTask";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <FormTask />
                <TaskList />
                <Footer />
            </div>
        );
    }
}

export default App;