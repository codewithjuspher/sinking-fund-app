import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import app from './init';

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
export { auth };