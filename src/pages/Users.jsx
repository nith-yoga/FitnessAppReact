import { useState, useEffect } from "react";
import '../../public/css/styles.css';

const Users = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://fitnessappassignment.onrender.com/api/users")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }
            return response.json();
        })
        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        })
    }, []);

    return (
        <div className="user-container">
          <h1>Users</h1>
    
          {loading && <p>Loading users...</p>}
          {error && <p>Error: {error}</p>}
    
          {users && (
            <div className="user-grid">
              {users.map((user) => (
                <div key={user._id} className="user-card">
                  <h3>Username: {user.username}</h3>
                  <p>Weight: {user.weight} kg</p>
                  <p>Squat: {user.squat} kg</p>
                  <p>Bench Press: {user.benchPress} kg</p>
                  <p>Deadlift: {user.deadlift} kg</p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    };

export default Users;
