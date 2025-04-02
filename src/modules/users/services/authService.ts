import { tokenHandler } from "@/helpers/tokenHelpers";
import { auth } from "@/shared/firebase/auth";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);

    const token = await result.user.getIdToken();
    tokenHandler.set(token, 5);
    scheduleTokenRefresh();
    return result.user;
  } catch (error) {
    console.error("Error during Google sign-in:", error);
    alert("Failed to sign in with Google. Please try again.");
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const user = auth.currentUser;
    if (user) {
      const refreshedToken = await user.getIdToken(true); 
      tokenHandler.set(refreshedToken, 5);
      console.log("Token successfully refreshed");
    } else {
      console.error("No authenticated user found for token refresh.");
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
    alert("Failed to refresh session. Please log in again.");
  }
};

export const scheduleTokenRefresh = () => {
  const refreshInterval = (3600 - 300) * 1000; 
  setInterval(async () => {
    await refreshToken(); 
  }, refreshInterval);
};

export const checkTokenExpiration = () => {
  const tokenExpirationTime = localStorage.getItem("tokenExpirationTime");
  const currentTime = new Date().getTime();

  if (tokenExpirationTime && currentTime > parseInt(tokenExpirationTime, 10)) {
    logoutUser();
    alert("Your session has expired. Please log in again.");
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("tokenExpirationTime");
    localStorage.removeItem("authToken");
    console.log("User successfully logged out");
    window.location.href = "/";
  } catch (error) {
    console.error("Error during logout:", error);
    alert("Failed to log out. Please try again.");
    throw error;
  }
};

export const validateTokenBeforeRequest = async () => {
  if (tokenHandler.isExpired()) {
    await refreshToken();
  }
  return tokenHandler.get();
};
