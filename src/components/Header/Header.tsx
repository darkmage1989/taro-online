 import styles from './Header.module.css'
const Header = () => {
    return ( <header className={styles.header}>
        <img className={styles.logo} src="/fonts/logo.jpg" alt="Logo" />
    </header> );
}
 
export default Header;