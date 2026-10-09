import { Outlet } from "react-router";
import { NavBar } from "../../components/NavBar/NavBar";
import styles from "./MainLayout.module.css";

const MainLayout = () => {

  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>
        <Outlet />
      </main>
      <NavBar />
    </div>
  )
}


export default MainLayout
