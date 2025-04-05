export const handleResponse = (response: any) => {
    if (response.status === 200) return response.data;
    throw new Error(response.statusText);
};