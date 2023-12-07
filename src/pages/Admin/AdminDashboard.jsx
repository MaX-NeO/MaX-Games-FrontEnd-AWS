import { useState, useEffect } from 'react'
import AdminNav from './Layout/AdminLeftbar'
import { ViewUsers,Gamesx } from '../../services/api';
const AdminDashboard = () => {

  const [users, setUsers] = useState(0);
  const [games, setGames] = useState(0);
  useEffect(() => {
    loadUsers();
    loadGames();
  }, []);
  const loadUsers = () => {
    ViewUsers().then((res) => {
      setUsers(res.data.length);
    });
  };

  const loadGames = () => {
      Gamesx().then((res) => {
          setGames(res.data.length);
      });
  };
  console.log(users,games)

  return (
    <>
      <div className='game-x-main'>
        <AdminNav />
        <div className='game-actions'>
          <h1 className="game-page-title">Dashboard</h1>
          <div className='game-x-data'>
            <div className='wrapper-x-dashboard'>
              <div className="container-x-dashboard">
                <div className="box-x-dashboard">
                  <span className="title-x-dashboard">{users}</span>
                  <div>
                    <strong>Users</strong>
                  </div>
                </div>
              </div>
              <div className="container-x-dashboard">
                <div className="box-x-dashboard">
                  <span className="title-x-dashboard">{games}</span>
                  <div>
                    <strong>Games</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard;