import { toast } from "react-toastify";

export const handleError = (error: Error, context: string = "Application") => {
    console.error(`Error in ${context}:`, error.message);
    toast.error(`An error occurred in ${context}. Please try again.`);
};