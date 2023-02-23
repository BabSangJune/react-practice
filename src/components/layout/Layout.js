import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
                <Link to="/">Home</Link>&nbsp;&nbsp;
                <Link to="/portal">Portal Test</Link>&nbsp;&nbsp;
                <Link to="/reducer">Reducer Test</Link>&nbsp;&nbsp;
                <Link to="/memoization">Memoization Test</Link>&nbsp;&nbsp;
                <Link to="/remain">Remain Test</Link>&nbsp;&nbsp;
                <Link to="/lifeCycleClass">LifeCycleClass Test</Link>&nbsp;&nbsp;
                <Link to="/lifeCycleFunc">LifeCycleFunc Test</Link>&nbsp;&nbsp;
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
