export interface INavigationItem {
    id: number,
    label: string,
    path: string,
}

export const NavigationData: INavigationItem[] = [
    {
        id: 1,
        label: 'users',
        path: '/users',
    },
    {
        id: 2,
        label: 'manage',
        path: '/manage',
    },
]