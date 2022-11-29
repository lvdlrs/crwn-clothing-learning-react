
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.styles.scss';

const Authentication = () => {

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
  

    return(
        <div className="authentication-container">           
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;