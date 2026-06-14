export const handleError = (error: unknown, context?: string) => {
    console.error(`Error${context ? ` in ${context}` : ''}:`, error);
};
