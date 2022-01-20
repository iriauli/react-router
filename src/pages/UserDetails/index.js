import styles from "./UserDetails.module.css";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const { userId } = useParams();

  return (
    <div className={styles.content}>
      <h1>Details about user {userId}</h1>
    </div>
  );
};
