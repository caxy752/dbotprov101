/**
 * Interface for backend error response
 */
export interface BackendError {
    code: string;
    message?: string;
    details?: Record<string, any>;
}

/**
 * Interface for API error response
 */
export interface ApiErrorResponse {
    error?: BackendError;
    msg_type?: string;
}

/**
 * Handles backend errors and returns error messages
 * @param error - The error object from backend
 * @returns Error message
 */
export const handleBackendError = (error: BackendError): string => {
    if (!error?.code) {
        return 'An error occurred';
    }
    return error.message || error.code;
};

/**
 * Handles API response errors
 * @param response - The API response object
 * @returns Error message or null if no error
 */
export const handleApiError = (response: ApiErrorResponse): string | null => {
    if (!response?.error) {
        return null;
    }
    return handleBackendError(response.error);
};

/**
 * Creates a standardized error object for display
 * @param error - The backend error
 * @returns Standardized error object
 */
export const createErrorObject = (error: BackendError) => ({
    code: error.code,
    message: handleBackendError(error),
    details: error.details,
});

/**
 * Type guard to check if an object is a backend error
 * @param obj - Object to check
 * @returns Boolean indicating if object is a backend error
 */
export const isBackendError = (obj: any): obj is BackendError => {
    return obj && typeof obj === 'object' && typeof obj.code === 'string';
};

/**
 * Type guard to check if an object is an API error response
 * @param obj - Object to check
 * @returns Boolean indicating if object is an API error response
 */
export const isApiErrorResponse = (obj: any): obj is ApiErrorResponse => {
    return obj && typeof obj === 'object' && obj.error && isBackendError(obj.error);
};