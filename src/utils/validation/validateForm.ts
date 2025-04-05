export const validateForm = (values: Record<string, any>, validations: Record<string, any>) => {
    const errors: Record<string, string> = {};
    for (const field in validations) {
        if (!validations[field](values[field])) {
            errors[field] = `${field} is invalid`;
        }
    }
    return errors;
};