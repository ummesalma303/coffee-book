import PropTypes from 'prop-types';

const Heading = ({title,subTitle}) => {
    return (
        <div className='text-center space-y-3 font-light'>
            <h2 className='text-4xl '>{title}</h2>
            <p>{subTitle}</p>
        </div>
    );
};

Heading.propTypes = {
    
};

export default Heading;