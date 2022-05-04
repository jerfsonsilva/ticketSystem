import FirebaseService from "./FirebaseService"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthModel, AuthSignInModel } from "../models/UserModel";

import { setDoc, doc, Firestore, getFirestore } from "firebase/firestore"
import "firebase/firestore";
import { UserTableName } from "../models/TablesName";
import { authErrors } from "../errors";

const db: Firestore = getFirestore(FirebaseService.getDatabase());

class LoginService{
    async createNewAuth(user: AuthModel){
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                return this.createNewUser(user, userCredential.user.uid)
            }).catch((error) => {
                const errorPerson = authErrors.find((item) => error.code == item.code)
                throw errorPerson || error
            });
    }
    async createNewUser(user: AuthModel, userCredentialId: string){
        return await setDoc(doc(db, UserTableName, userCredentialId), {
            title: user.name
        })
    }
    async signInEmailAndPassword(user: AuthSignInModel){
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, user.email, user.password)
            .catch((error) => {
                const errorPerson = authErrors.find((item) => error.code == item.code)
                throw errorPerson || error
            });
    }
}

export default new LoginService