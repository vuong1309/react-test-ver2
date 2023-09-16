import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllQuotesPage from "./pages/AllQuotesPage";
import RandomQuotesPage from "./pages/RandomQuotesPage";
import AuthorQuotesPage from "./pages/AuthorQuotesPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<AllQuotesPage />} />
        <Route path='/randomquotes' element={<RandomQuotesPage />} />
        <Route path='/authorquotes' element={<AuthorQuotesPage />} />
      </Routes>
    </>
  );
}

export default App;
