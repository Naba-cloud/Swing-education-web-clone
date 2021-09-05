import Navbar from "./Navbar";
import Header from "./Header";
import MiddleSection from "./MiddleSection";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MiddleSection />
      <Footer />
    </div>
  );
}
