import {FaGoogle} from 'react-icons/fa'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login(){

    async function signInGoogle(){
        try{
            const res = await signInWithPopup(getAuth(), new GoogleAuthProvider())
        }catch(err){
            console.log(err)
        }
    }

    return <div className="flex h-full items-center justify-center">
        <div className="flex flex-col gap-3 justify-center items-center">

            <h1 className="text-3xl uppercase">Simple Finance</h1>
            <span className='text-md mb-2 font-extralight'>Created by Jon</span>

            <button className="flex gap-2 items-center bg-primary px-3 py-2 rounded-md text-sm" onClick={() => signInGoogle()}>
                <FaGoogle />
                Sign In With Google
            </button>
        </div>

    </div>
}