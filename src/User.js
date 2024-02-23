import React, { Component } from "react";
import { data } from "./UserList";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState([]);

  return (
    <>
      <div className="container">
        {data.map((user) => (
          <div className="column">
            <div className="card">
              <img src={user.picture} />
              <h3>{user.name}</h3>
              <p className="title">{user.country_id}</p>
              <p>
                <Link to={"detail/${user.id}"}>
                  <p>
                    <button>Detail</button>
                  </p>
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
