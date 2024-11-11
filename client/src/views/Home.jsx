import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FetchAllTasks from '../components/fetchAllTasks';
import '../css/Home.css';

export default function Home(){

    return(
        <div className='content'>
            <Header />
            <div id="tasks_container">
                <FetchAllTasks />
            </div>
        </div>
    )

}