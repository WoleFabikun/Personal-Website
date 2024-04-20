import Navigation from '@/components/Navigation';
import Header from '@/components/Header';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col">
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;