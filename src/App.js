import Login from './components/LoginRegister/Login';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import RequestForm from './components/RequestForm/request';

function App() {
  return (
    <>
      <Router>
				<Routes >
          <Route
            path="/"
            exact
            element={<Navbar />}
          />
          <Route
						path="/expense-form"
						exact
						element={<RequestForm />}
					/>
          <Route
            path="/login"
            exact
            element={<Login />}
          />
          {/* <Route
            path="/signup"
            exact
            element={<Login />}
          /> */}
				</Routes>
			</Router>
		</>
  );
}

export default App;
