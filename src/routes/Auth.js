import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import React from "react";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "css/Auth.css";

const Auth = () => {
    const onSocialClick = async (event) => {
        const {target:{name}} = event;
        let provider;
        if(name === "google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }else if(name === "github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider);
    }
    return(
        <div class="auth-wrap">
            <AuthForm />
            <div>
                <button onClick={onSocialClick} name="google">Continue with Google <FontAwesomeIcon icon={faGoogle} /></button>
                <button onClick={onSocialClick} name="github"> Continue with Github <FontAwesomeIcon icon={faGithub} /></button>
            </div>
        </div>
    )
}
export default Auth;