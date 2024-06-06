import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import RequestPage from "./pages/RequestPage.jsx";
import FormPage from "./pages/FormPage.jsx";
import CometPost from "./pages/CometPost.jsx";


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<RequestPage/>}/>
            <Route path='about' element={<FormPage/>}/>
            <Route path='/:postId' element={<CometPost/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
