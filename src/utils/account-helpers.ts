export const isDemoAccount = (loginid?: string): boolean => {
    return !!loginid?.startsWith('VR');
};

export const getAccountType = (loginid?: string): 'demo' | 'real' => {
    return isDemoAccount(loginid) ? 'demo' : 'real';
};
