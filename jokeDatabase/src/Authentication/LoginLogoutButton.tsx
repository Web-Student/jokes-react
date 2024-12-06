import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { deleteCookie } from "./cookieFunctions";

export const LoginLogoutButton = () => {
    const auth = useAuth();
    useEffect(() => {
        console.log(`our new user is ${auth?.user} `);
        if (auth.user) {
            const date = new Date((auth.user.expires_at ?? 0) * 1000)
            document.cookie = `auth_token=${auth.user?.id_token}; expires=${date.toUTCString()};`;
            if (!document.cookie) {
                console.log("cookie is not null")
            }
        }
    }, [auth.user])

    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Error... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
        <div>
            {/* Hello {auth.user?.profile.sub}{" "} */}
            <button className="btn btn-primary" onClick={() => {
                void auth.removeUser()
                deleteCookie("auth_token")
            }}>Log out</button>
        </div>
        );
    }

    return <button data-testid="LoginButton" onClick={() => void auth.signinRedirect()}>Log in</button>;
}
export default LoginLogoutButton