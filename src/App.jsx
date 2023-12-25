import styles from './App.module.css'
import Header from './components/header/header.jsx'
import StartPage from './StartPage.jsx'


function App() {

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blogs</title>
      </head>
      <body className={styles.body}>
        <Header />
        <StartPage />
      </body>
    </html >
  )
}

export default App
