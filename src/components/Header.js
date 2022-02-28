import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from "react-router-dom";

const Header = ({ title , updateShowSetTask, showAddTask}) => {
    const location = useLocation()
    const onClick = () => {
        console.log('click');
        updateShowSetTask();
    };

    return (
        <header className='header'>
            <h1>
                {title}
            </h1>
            {location.pathname==='/' && <Button colour={!showAddTask ? 'green': 'red'} text={!showAddTask ? 'Add': 'Close'} onClick={onClick}/>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header
