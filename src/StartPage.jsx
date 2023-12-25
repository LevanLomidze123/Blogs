import CategoriesFilter from './CategoriesFilter.jsx';
import styles from './StartPage.module.css'

export default function StartPage() {
    return (
        <main>
            <div className={styles.beginning}>
                <h1 className={styles.h1}>ბლოგი</h1>
                <img className={styles.spacePicture} src="src\Blog-1024x355 1.png" alt="Blog Picture" />
            </div>

            <nav className={styles.filter}>
                <CategoriesFilter />
            </nav>
        </main>
    );
}