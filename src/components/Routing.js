import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Reservation from './pages/Reservation'
import Login from './pages/Login'
import Order from './pages/Order'
import Confirm from './pages/Confirm'

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservation" element={<Reservation />} />
      <Route path="/conformation" element={<Confirm/>}/>

      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}


