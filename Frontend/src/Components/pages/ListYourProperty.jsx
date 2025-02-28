import { useState } from "react";
import ListYourPropertyInfo from "../ListYourPropertyInfo";
import ListYourPropertySignup from "../ListYourPropertySignup";
import DummyDataButton from "../DummyDataButton";

export default function ListYourProperty(){

    const[isSignedIn, setIsSignedIn] = useState(false)

    const handleSignIn = () => {
        setIsSignedIn(true)
    }
    return(
        <>
            {isSignedIn ? <ListYourPropertyInfo /> : <ListYourPropertySignup handleSignIn={handleSignIn}/>}
        </>
    )
}