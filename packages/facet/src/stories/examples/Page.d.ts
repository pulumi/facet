import './page.css';
export interface PageProps {
    user?: {};
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
export declare const createPage: ({ user, onLogout, onLogin, onCreateAccount }: PageProps) => HTMLElement;
//# sourceMappingURL=Page.d.ts.map