import { useState, useEffect } from "react";

export default function FetchData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => new Promise((r) => setTimeout(() => r(data), 1000)))
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h2>Daftar User</h2>
      <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>
    </div>
  );
}