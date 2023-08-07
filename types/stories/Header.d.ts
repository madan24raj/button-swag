import React from 'react';
import './header.css';
type User = {
    name: string;
};
interface HeaderProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
    run?: number;
}
export declare const Header: ({ user, onLogin, onLogout }: HeaderProps) => React.JSX.Element;
export {};
