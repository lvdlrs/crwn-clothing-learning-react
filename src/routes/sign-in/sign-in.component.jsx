import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUSer = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUSer}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SignIn;