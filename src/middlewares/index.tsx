import { Navigate } from "react-router-dom"
import { getVarContext } from "../contexts/auth"

export function PrivateUserMiddleware(nextElement: React.ReactElement) {
    const { signed } = getVarContext()
    if (!signed) {
        return <Navigate to="/" replace />
    }
    return nextElement
}
export function PublicUserMiddleware(nextElement: React.ReactElement) {
    const { signed } = getVarContext()
    if (signed) {
        return <Navigate to="/dashboard" replace />
    }
    return nextElement
}