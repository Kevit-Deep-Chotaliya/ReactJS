import { Post } from "./components/Post.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'

const App = () => {

  return (
    <div>
      <section className="main-section">
        <ToastContainer position="top-right" autoClose={3000} toastStyle={{ fontSize: "18px", fontWeight: "500", padding: "10px"}}/>
        <Post />
      </section>
    </div>
  )
}

export default App