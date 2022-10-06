import { Routes, Route } from 'react-router-dom';
import Landing  from "../components/pages/Landing";
import Test  from "../components/pages/Test";

 
const Router = () => {
    return(
        <Routes>
           <Route path="/" element={<Landing name='Landing'/>} />
           <Route path="/test" element={<Test/>} />
        </Routes>
    )
}
export default Router;