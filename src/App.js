import { BrowserRouter } from "react-router-dom";

import Header from "./component/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bookings" element={<Bookings />} />
      </Routes> */}
    </BrowserRouter>
    // <div className="App">
    //   <Header />
    // </div>
  );
}

export default App;
