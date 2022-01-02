import Login from './components/LoginRegister/Login';
import Signup from './components/LoginRegister/Signup';
import ShowDetails from './components/detail/ShowDetail';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import RequestForm from './components/RequestForm/request';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
				<Routes >
          <Route
            path="/"
            exact
            element={<ShowDetails />}
          />
          <Route
						path="/expense-form"
						exact
						element={<RequestForm />}
					/>
          <Route
						path={`/expense-form/edit/:id`}
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
