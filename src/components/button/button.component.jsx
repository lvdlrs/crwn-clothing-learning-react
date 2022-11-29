import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, ...buttonOptions }) =>{
    return(
        <button 
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} 
        type="submit"
        {...buttonOptions}
        >
            { children }
        </button>
    )
}

export default Button;