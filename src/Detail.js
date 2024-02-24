import { useParams } from "react-router-dom";
import { users } from "./UserListV2";

export default function Detail() {
  const userName = useParams();
  const user = users.data.find((obj) => {
    return obj.id == userName.id;
  });
  
  return (
    <div className="container">
      <div className="product-card">
        <img src={user.picture} />
        <div className="badge">Fullname: {user.name}</div>
        <div className="badge">Email: {user.email}</div>
        <div className="badge">Birthday: {user.birthday}</div>
        <div className="badge">Gender: {user.gender}</div>
        <div className="badge">Phone No: {user.phone}</div>
        <div className="badge">Join date: {user.registered}</div>
        <div className="product-details">
          <h4>{user.roles}</h4>
          <div className="product-price">Balance: ${user.balance}</div>
          <p>Bio: {user.about}</p>
          <div className="product-bottom-details">Country Code: {user.country_id}</div>
        </div>
      </div>
    </div>
  );
}
