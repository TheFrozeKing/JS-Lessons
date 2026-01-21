import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Footer from "./components/Footer"
import styles from "./style.css";

export default function App() {
  return (
    <div className="app">
      <Header title="Calculator"></Header>
      <Calculator></Calculator>
      <Footer title = "&copy; 2026"></Footer>
    </div>
  );
}
