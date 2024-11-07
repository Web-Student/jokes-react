export function deleteCookie(cookieName:string)  {
    document.cookie = `${cookieName}=; expires = Thu, 01 Jan 2000 00:00:00 UTC; path=/;`;
    console.log("deleted cookie");
}