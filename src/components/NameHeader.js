import PropTypes from 'prop-types'

const NameHeader = ({ name }) => {

    return (
        <header className='header'>
            <h2>
                {name}
            </h2>
        </header>
    )
}

NameHeader.defaultProps = {
    title: 'Student Name'
};

NameHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default NameHeader
