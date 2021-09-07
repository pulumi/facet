import './header.css';
export interface HeaderProps {
    user?: {};
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
export declare const createHeader: ({ user, onLogout, onLogin, onCreateAccount }: HeaderProps) => HTMLElement;
//# sourceMappingURL=Header.d.ts.map