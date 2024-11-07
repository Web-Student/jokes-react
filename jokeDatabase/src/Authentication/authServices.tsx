import { useAuth } from "react-oidc-context";

export const GetCurrentUserEmail = () => {
    const auth = useAuth();
    const email = auth.user?.profile.email
    return email;
}

export const IsAuthorized = (emailToCompare: string) => {
    const userEmail = GetCurrentUserEmail();
    if (userEmail == emailToCompare) {
        return true
    }
    else {
        return false
    }
}