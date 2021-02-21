import PropTypes from 'prop-types'

const Button = ({text, colour, onClick}) => {
    return (
        <button className='btn' style={{backgroundColor: colour}} onClick={onClick}> 
            {text} 
        </button>
    )
}

// set default values if no props are passed
Button.defaultProps = {
    colour: 'steelblue',
    text: 'HELLO'
}

// proptypes let us force them to pass a certain data structure
Button.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button