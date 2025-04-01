
import { Header } from "./components/Header";
import {Post} from "./Post"

import './global.css';

export function App() {

  return (
  <div>
    <Header />
    
    <Post   
     author="Caroline Medeiros"
     content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non minus maxime cupiditate deleniti ratione magnam numquam nam aperiam eligendi exercitationem repellat minima accusantium, fugit eos tempora quaerat tempore autem!"
  />
  <Post
    author="Renato Gabriel"
    content="Um novo post muito legal"
  />
  </div> 
  )
}
