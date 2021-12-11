import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import "./App.css";
import AboutPage from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="container">
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </div>

                <AboutIconLink />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
