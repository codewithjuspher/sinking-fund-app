import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import app from './init';

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch((error) => {
    console.error("Error setting session persistence:", error);
});
export { auth };