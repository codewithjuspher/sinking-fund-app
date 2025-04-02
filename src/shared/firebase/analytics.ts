import { getAnalytics } from 'firebase/analytics';
import app from './init';

const analytics = getAnalytics(app);
export default analytics;