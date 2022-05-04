type ErrorsType = Array<{
    code: string,
    message: string
}>

export const authErrors: ErrorsType = [
    {
        code: "auth/email-already-in-use",
        message:"the email already in use"
    },
    {
        code: "auth/invalid-email",
        message: "the email address is not valid"
    },
    {
        code: "auth/operation-not-allowed",
        message: "email/password accounts are not enabled"
    },
    {
        code: "auth/weak-password",
        message: "the password is not strong enough"
    },
    {
        code: "auth/user-not-found",
        message: "The user was not found"
    },
    {
        code: "auth/user-disabled",
        message: "The user are disabled"
    },
    {
        code: "auth/wrong-password",
        message: "The password are wrong"
    }
    
]