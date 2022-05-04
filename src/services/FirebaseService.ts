import { FirebaseApp, initializeApp } from "firebase/app";
import Env from "../Env";

abstract class IDabaseConnection {
    abstract getDatabase(): any
}  
class FirebaseService implements IDabaseConnection {
    public getDatabase(): FirebaseApp {
        return initializeApp(Env.firebase)
    }
}

export default new FirebaseService()