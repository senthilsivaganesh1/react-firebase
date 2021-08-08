import firebase from "firebase/app";

export async function signUp(displayName: string, email: string, password: string):Promise<string|undefined> {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email,password);
        await response.user?.updateProfile({displayName});
        return response.user?.uid
    }
    catch(error) {
        console.log(error.message);
        return error.message;
    }
    
}

export async function login(email: string, password: string):Promise<string|undefined> {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(email,password);        
        return response.user?.uid
    }
    catch(error) {
        console.log(error.message);
        return error.message;
    }
    
}
export async function signOut():Promise<boolean> {
    try {
        //const response = await firebase.auth().signOut();
        await firebase.auth().signOut();
        return true;
    }
    catch(error) {
        console.log(error.messge);
        return error.message;
    }
    
}