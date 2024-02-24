import React, { Component } from "react";
import { users } from "./UserListV2";
import { useState } from "react";
import { Link } from "react-router-dom";

import ReactDOM from "react-dom";
import "./App.css";

export default function User() {
  const [user, setUser] = useState([]);

  return (
    <>
      <div className="container">
        {users.data.map((user) => (
          <div className="column">
            <div className="card">
              <img src={user.picture} />
              <div className="text-detail">
                <h3>{user.name}</h3>
                <p className="role">{user.roles}</p>
                <p>
                  <Link to={`detail/${user.id}`}>
                    <p>
                      <button className="button-detail">Detail</button>
                    </p>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
