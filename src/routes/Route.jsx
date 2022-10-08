import { Routes, Route, Navigate } from 'react-router-dom';

import ProtectedLayout from '../components/Layouts/ProtectedLayout';
import Landing  from "../components/pages/Landing";
import Test  from "../components/pages/Test";

import { useTest } from "../context/TestContext";
 
const Router = () => {

    return(
        <Routes>
           <Route path="/" element={<Landing name='Landing'/>} />
           <Route path="/test" element={<ProtectedLayout />} >
                <Route index element={<Test />} />
           </Route>
        </Routes>
    )
}
export default Router;