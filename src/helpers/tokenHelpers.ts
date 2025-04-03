export const tokenHandler = {
    set(token: string, expirationInMinutes: number = 5) {
        const expiration = new Date().getTime() + expirationInMinutes * 60000;
        localStorage.setItem("authToken", token);
        localStorage.setItem("tokenExpirationTime", expiration.toString());
    },
    get() {
        return localStorage.getItem("authToken");
    },
    isExpired() {
        const expirationTime = localStorage.getItem("tokenExpirationTime");
        const currentTime = new Date().getTime();
        return !expirationTime || currentTime > parseInt(expirationTime, 10);
    },
    clear() {
        localStorage.removeItem("authToken");
        localStorage.removeItem("tokenExpirationTime");
    },
};