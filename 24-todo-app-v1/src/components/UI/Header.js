import { RiAlarmFill } from "react-icons/ri"
import { RiArchive2Fill } from "react-icons/ri"
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.headerContainer}>
      <RiAlarmFill className={styles.icon}/>
      <h1>Список дел</h1>
      <RiArchive2Fill className={styles.icon}/>
    </div>
  )
}

export default Header
