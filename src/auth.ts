import firebase from "firebase/app";

export enum Status {
    NotStarted, Loading, Success, Failure
}

export interface IStatusizedMessage {
    message:string|undefined,
    status:Status

}

export async function signUp(displayName: string, email: string, password: string):Promise<IStatusizedMessage> {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email,password);
        await response.user?.updateProfile({displayName});
        return {status: Status.Success, message:response.user?.uid}
    }
    catch(error) {
        console.log(error.message);
        return {status: Status.Failure, message:error.message};
    }
    
}

export async function login(email: string, password: string):Promise<IStatusizedMessage> {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(email,password);        
        return {status: Status.Success, message:response.user?.uid};
    }
    catch(error) {
        console.log(error.message);
        return {status: Status.Failure, message:error.message};
    }
    
}
export async function signOut():Promise<IStatusizedMessage> {
    try {
        //const response = await firebase.auth().signOut();
        await firebase.auth().signOut();
        return {status: Status.Success, message:""};
    }
    catch(error) {
        console.log(error.messge);
        return {status: Status.Failure, message:error.message};
    }
    
}