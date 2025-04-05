export const logError = (error: Error, context: string = "Unknown") => {
    console.error(`[${new Date().toISOString()}] Error in ${context}:`, error.message);
};