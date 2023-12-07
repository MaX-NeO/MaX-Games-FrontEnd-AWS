import { useNavigate } from 'react-router-dom';

export default function AdminNav() {
    const navigate = useNavigate();
    const adminlogout = () => {
            localStorage.clear();
            navigate('/Admin/login');
    };
    const routedashbaord = () => {
        navigate('/Admin/dashboard');
    };
    const routegame = () => {
        navigate('/Admin/games');
    };
    const routeaddgame = () => {
        navigate('/Admin/games/add')
    };
    const routeuser = () => {
        navigate('/Admin/users');
    };
    return (
        <>
            <div className='game-sidenav'>
                <div className='game-nav-container'>
                    <button className="button-m-x mb-1 layout-nav" onClick={routedashbaord}>
                        <span>Dashboard</span>
                        <div className="top green"></div>
                        <div className="left green"></div>
                        <div className="bottom green"></div>
                        <div className="right green"></div>
                    </button>
                    <button className="button-m-x mb-1 layout-nav" onClick={routegame}>
                        <span>Games</span>
                        <div className="top green"></div>
                        <div className="left green"></div>
                        <div className="bottom green"></div>
                        <div className="right green"></div>
                    </button>
                    <button className="button-m-x mb-1 layout-nav" onClick={routeaddgame}>
                        <span>Add Game</span>
                        <div className="top green"></div>
                        <div className="left green"></div>
                        <div className="bottom green"></div>
                        <div className="right green"></div>
                    </button>
                    <button className="button-m-x mb-1 layout-nav" onClick={routeuser}>
                        <span>Users</span>
                        <div className="top green"></div>
                        <div className="left green"></div>
                        <div className="bottom green"></div>
                        <div className="right green"></div>
                    </button>
                </div>
                <button className="button-m-x game-nav-logout-button  layout-nav" onClick={adminlogout}>
                    <span>Logout</span>
                    <div className="top red"></div>
                    <div className="left red"></div>
                    <div className="bottom red"></div>
                    <div className="right red"></div>
                </button>
            </div>
        </>
    );
}