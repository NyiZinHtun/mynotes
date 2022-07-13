import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.js";
import NotesPage from "./pages/NotesPage.js";
import NotePage from "./pages/NotePage.js";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route component={NotesPage} path="/" exact />
          <Route component={NotePage} path="/note/:id" />
        </div>
      </div>
    </Router>
  );
}

export default App;
