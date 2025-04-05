export const logError = (error: Error, context: string) => {
    console.error(`Logged Error in ${context}:`, error);
};