import styles from './Root.module.scss'
import { Header } from '../../components/header/header'
import { Link, Outlet } from 'react-router-dom'

export function Root() {
  return (
    <>
      <Header />
      <Link to="/">
        <div className={styles.logo}>
          <img src="/src/assets/imgs/logo.png" />
        </div>
      </Link>
      <Outlet />
    </>
  )
}
