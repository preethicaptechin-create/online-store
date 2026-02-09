// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./Components/Header";
// // import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import ProductList from "./Pages/Productlist";
// import  Home  from "./Pages/Home";
// import  Login  from "./Pages/Login";
// import "./App.css"

// function App() {
//   return (
//    <BrowserRouter>
//       <div className="app">
//         <Header />

//         <main className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<ProductList />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </BrowserRouter>>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductList from "./Pages/Productlist";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
