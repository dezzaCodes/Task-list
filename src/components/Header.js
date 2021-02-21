import PropTypes from 'prop-types'
import Button from './Button'

// props can either be passed props or {name of prop passed}
const Header = ({name, onAdd, showAdd}) => {
    // event handling 
    const onClick = (e) => {
        console.log(e)
    }

    return (
        <header>
            {/* curly braces allow us to run javascript */}
            <h1> hi {name}</h1>
            <Button text={showAdd ? 'Close' : 'Add'} colour={showAdd ? 'red' : 'green'} onClick={onAdd} />
            <Button text='2' colour='red' onClick={onClick} />
            <Button text='3' colour='blue' onClick={onClick} />
            <Button text='4' colour='yellow' onClick={onClick} />
            <Button onClick={onClick}/>
        </header>
    )
}

// proptypes let us force them to pass a certain data structure
Header.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Header