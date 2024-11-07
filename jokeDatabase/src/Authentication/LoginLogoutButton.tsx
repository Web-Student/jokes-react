import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

export const LoginLogoutButton = () => {
    const auth = useAuth();
    function deleteCookie(cookieName:string)  {
        document.cookie = `${cookieName}=; expires = Thu, 01 Jan 2000 00:00:00 UTC; path=/;`;
        console.log("deleted cookie");
    }
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
        return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
        <div>
            Hello {auth.user?.profile.sub}{" "}
            <button onClick={() => {
                void auth.removeUser()
                deleteCookie("auth_token")
            }}>Log out</button>
        </div>
        );
    }

    return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
}
export default LoginLogoutButton