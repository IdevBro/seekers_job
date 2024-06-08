import { default as Search } from "../assets/icons/search.svg?react";
import { default as Heart } from "../assets/icons/heart.svg?react";
import { default as Brief } from "../assets/icons/brief.svg?react";
import { default as Logo } from "../assets/icons/Logo.svg?react";
import { default as Mdlogo } from "../assets/icons/mdlogo.svg?react";
import { default as Notification } from "../assets/icons/Notification.svg?react";
import { default as Message } from "../assets/icons/Message.svg?react";
import styles from "./styles";
const Icons = {
  search: <Search className={`${styles.icon.standart}`} />,
  heart: <Heart className={`${styles.icon.standart}`} />,
  brief: <Brief className={`${styles.icon.standart}`} />,
  logo: <Logo className={`${styles.icon.logo}`} />,
  mdlogo: <Mdlogo />,
  notification: <Notification className={`${styles.icon.notification}`} />,
  message: <Message className={`${styles.icon.notification}`} />,
};
export default Icons;
