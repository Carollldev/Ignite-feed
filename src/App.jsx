import { Header } from './components/Header';
import {Post} from './components/Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {

  return (
  <div>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post
         author="Caroline Medeiros"
         content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
       />
       <Post
         author="Renato Nascimento"
         content="Um novo post muito legal"
       />
       </main>
     </div>
    </div>
  )
}
