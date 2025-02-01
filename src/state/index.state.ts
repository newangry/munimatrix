export interface HomeInitialState {
    colorScheme: 'light' | 'dark';
    lightMode: 'light' | 'dark';
    page: string,
    openDrawer: boolean,
    hidden_sidebar: boolean,
    hidden_faq: boolean
}

export const initialState: HomeInitialState = {
    colorScheme: 'light',
    lightMode: 'light',
    page: '/dashboard',
    openDrawer: false,
    hidden_sidebar: true,
    hidden_faq: true
};

