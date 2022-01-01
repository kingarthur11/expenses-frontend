import Login from './components/LoginRegister/Login';
import Signup from './components/LoginRegister/Signup';
import Navbar from './components/detail/ShowDetail';
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
          <Route
            path="/signup"
            exact
            element={<Signup />}
          />
				</Routes>
			</Router>
		</>
  );
}

export default App;
