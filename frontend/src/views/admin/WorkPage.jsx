import React, { useState, useEffect, useContext } from "react";

import "./WorkPage.css";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import "../admin/WorkPage.css";

const apiURL = import.meta.env.VITE_API_URL;

const AdminDashboard = () => {
    const [data, setData] = useState([{}]);
    console.log(data);
    const [isAddUserModalVisible, setIsAddUserModalVisible] = useState(false);
    const [isUpdateUserModalVisible, setIsUpdateUserModalVisible] =
        useState(false);
    const [newUser, setNewUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        fetchData();
    }, []);

    const openUpdateUserModal = () => {
        setIsUpdateUserModalVisible(true);
    };

    const closeUpdateUserModal = () => {
        setIsUpdateUserModalVisible(false);
    };
    const openAddUserModal = () => {
        setIsAddUserModalVisible(true);
    };

    const closeAddUserModal = () => {
        setIsAddUserModalVisible(false);
    };

    const trashUser = (userId) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur?")) {
            fetch(`${apiURL}/users/${userId}`, {
                method: "DELETE",
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Erreur lors de la suppression de l'utilisateur");
                    }
                    return response.json();
                })
                .then(() => {
                    fetchData();
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const addUser = () => {
        fetch(`${apiURL}/users/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => response.json())
            .then(() => {
                fetchData();
                closeAddUserModal();
            })
            .catch((error) => {
                console.error("Erreur lors de l'ajout de l'utilisateur:", error);
            });
    };

    const updateUser = () => {
        axios
            .put(`${apiURL}/users/${data.id}`, newUser)
            .then((res) => {
                console.log(res);
                // Vérifiez si la mise à jour a réussi (statut 200 OK)
                if (res.status === 200) {
                    // Mettez à jour le contexte avec les nouvelles informations de l'utilisateur
                    setData((prevData) =>
                        prevData.map((user) =>
                            user.id === data.id
                                ? {
                                    ...user,
                                    firstname: newUser.firstname,
                                    lastname: newUser.lastname,
                                }
                                : user
                        )
                    );
                    closeUpdateUserModal();

                    // Naviguez vers la page souhaitée
                } else {
                    // Gérez d'autres statuts de réponse si nécessaire
                    console.log("La mise à jour a échoué avec le statut :", res.status);
                }
            })
            .catch((err) => console.log(err));
    };

    const fetchData = () => {
        fetch(`${apiURL}/users`)
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des données");
                }

                return response.json();
            })
            .then((data) => {
                console.log("Données reçues :", data);
                setData(data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="management_contain">
            <div className="dashbo">
                <div className="nav-containers">
                    <ul id="icons">
                        <li>
                            <a href="/logout">
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="clik"></div>
            <h5>Liste des Users</h5>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Password Hash</th>
                        <th>modifier/supprimé</th>
                        <th>Role_id</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                                <button onClick={() => trashUser(user.id)}>
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </button>
                            </td>
                            <td>
                                <button onClick={openUpdateUserModal}>
                                    Update <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="6">
                            <button onClick={openAddUserModal}>
                                Ajouter <i className="fa-solid fa-plus"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {isAddUserModalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                addUser();
                            }}
                        >
                            <label htmlFor="nom">first:</label>
                            <input
                                type="text"
                                id="firstname"
                                value={newUser.firstname}
                                onChange={(e) =>
                                    setNewUser({ ...newUser, firstname: e.target.value })
                                }
                                required
                            />

                            <label htmlFor="nom">lastname:</label>
                            <input
                                type="text"
                                id="lastname"
                                value={newUser.lastname}
                                onChange={(e) =>
                                    setNewUser({ ...newUser, lastname: e.target.value })
                                }
                                required
                            />

                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={newUser.email}
                                onChange={(e) =>
                                    setNewUser({ ...newUser, email: e.target.value })
                                }
                                required
                            />
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={newUser.password}
                                onChange={(e) =>
                                    setNewUser({ ...newUser, password: e.target.value })
                                }
                                required
                            />
                            <button type="submit">Ajouter utilisateur</button>
                        </form>
                        <i onClick={closeAddUserModal} className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            )}
            {isUpdateUserModalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                updateUser();
                            }}
                        >
                            <label htmlFor="nom">first:</label>
                            <input
                                type="text"
                                id="firstname"
                                value={newUser.firstname}
                                onChange={(e) =>
                                    setNewUser({ ...newUser, firstname: e.target.value })
                                }
                                required
                            />

                            <label htmlFor="nom">lastname:</label>
                            <input
                                type="text"
                                id="lastname"
                                value={newUser.lastname}
                                onChange={(e) =>
                                    setNewUser({ ...newUser, lastname: e.target.value })
                                }
                                required
                            />

                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={newUser.email}
                                onChange={(e) =>
                                    setNewUser({ ...newUser, email: e.target.value })
                                }
                                required
                            />
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={newUser.password}
                                onChange={(e) =>
                                    setNewUser({ ...newUser, password: e.target.value })
                                }
                                required
                            />
                            <button type="submit">Modifier l'utilisateur</button>
                        </form>
                        <i onClick={closeUpdateUserModal} className="fa-solid fa-xmark">
                            fermer
                        </i>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminDashboard;
