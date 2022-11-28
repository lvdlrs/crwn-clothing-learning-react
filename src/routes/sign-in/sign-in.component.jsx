import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUSer = async () => {
        const res = await signInWithGooglePopup();
        console.log(res);
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