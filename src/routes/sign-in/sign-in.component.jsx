import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";



const SignIn = () => {

    // sigin with redirect
    // useEffect( () => {
    //     const redirectResult = async () =>{
    //         const res = await getRedirectResult(auth);

    //         if (res){
    //             const userDocRef = await createUserDocumentFromAuth(res.user);
    //         }
    //     }

    //     redirectResult()
    //     .catch(err=>{
    //         console.log('error in redirect sign in: ', err.message);
    //     })
        
    // },[]);


    const logGoogleUSer = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    

   

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