export interface HomeInitialState {
    colorScheme: 'light' | 'dark';
    lightMode: 'light' | 'dark';
    page: string,
    openDrawer: boolean
}

export const initialState: HomeInitialState = {
    colorScheme: 'light',
    lightMode: 'light',
    page: '/dashboard',
    openDrawer: false
};

