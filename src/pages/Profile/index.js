import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/Auth";

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div className={styles.content}>
      Welcome {auth.user}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
