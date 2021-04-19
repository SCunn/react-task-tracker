
import PropTypes from 'prop-types'
<<<<<<< HEAD
import Button from './Button'
=======
>>>>>>> fe323e2a1cee94923aa786f1d16a094d0c660ad8


const Header = ({ title }) => {
    return (
<<<<<<< HEAD
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello'/>
            <Button color='red' text='Hello 1'/>
            <Button color='orange' text='Hello 2'/>
=======
        <header>
            <h1>{title}</h1>
>>>>>>> fe323e2a1cee94923aa786f1d16a094d0c660ad8
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'white', 
//     backgroundColor: 'blue'
// }

export default Header
