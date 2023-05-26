import { Route, HashRouter, Routes } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import QuestionPage from "./pages/QuestionPage"
import Main from "./components/Main";
import Header from "./components/Header";



function App() {
  return (
    <div className="App">
      <HashRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/quizPage" element={<QuizPage />} />
          <Route path="/quizPage/:type" element={<QuestionPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
