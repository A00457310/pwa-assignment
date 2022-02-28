import PropTypes from 'prop-types'

const Button = ({colour, text, onClick}) => {
    return <button onClick={onClick} style={{backgroundColor: colour}} className='btn'>{text}</button>
}

Button.defaultProps = {
    colour: 'steelblue',
    text: 'Hello'
}

Button.prototypes = {
    text: PropTypes.string,
    colour: PropTypes.string,
    onClick: PropTypes.func
}

export default Button