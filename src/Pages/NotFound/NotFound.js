import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg'
const NotFound = () => {
    return (
        <div>
            <img style={{'width':'100%'}} src={notfound} alt="" /> <br />
            <Link to='/'>
             <button className='btn btn-primary'>GO BACK</button>
            </Link>
        </div>
    );
};

export default NotFound;