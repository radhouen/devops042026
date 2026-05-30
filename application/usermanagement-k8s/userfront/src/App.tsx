import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 1. Définir la structure d'un Utilisateur
interface User {
  id: number;
  username: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // URL de ton API (adapte le port si ce n'est pas 3000)
  const API_URL = 'http://localhost:3000/api/users';

  // 2. LISTER : Récupérer les utilisateurs au chargement de la page
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 3. AJOUTER : Envoyer les données du formulaire à l'API
  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email || !password) return alert("Remplissez tous les champs");

    try {
      await axios.post(API_URL, { username, email, password });
      // Vider le formulaire
      setUsername('');
      setEmail('');
      setPassword('');
      // Rafraîchir la liste
      fetchUsers();
    } catch (error) {
      console.error("Erreur lors de l'ajout", error);
    }
  };

  // 4. SUPPRIMER : Demander à l'API de supprimer via l'ID
  const handleDeleteUser = async (id: number) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        // Rafraîchir la liste
        fetchUsers();
      } catch (error) {
        console.error("Erreur lors de la suppression", error);
      }
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Gestion des Utilisateurs</h1>

      {/* Formulaire d'ajout */}
      <form onSubmit={handleAddUser} style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h3>Ajouter un utilisateur</h3>
        <div style={{ marginBottom: '10px' }}>
          <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '8px' }} />
        </div>
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Ajouter</button>
      </form>

      {/* Liste des utilisateurs */}
      <h3>Liste des utilisateurs inscrits</h3>
      {users.length === 0 ? (
        <p>Aucun utilisateur trouvé.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((user) => (
            <li key={user.id} style={{ padding: '10px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{user.username}</strong> ({user.email})
              </div>
              <button onClick={() => handleDeleteUser(user.id)} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;