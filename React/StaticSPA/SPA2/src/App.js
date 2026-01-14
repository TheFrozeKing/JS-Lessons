import Footer from "./components/Footer";
import Header from "./components/Header";
import Label from "./components/Label";
import ColorPicker from "./components/ColorPicker";
import Input from "./components/Input";
import Result from "./components/Result";

function App() {
  return (
    <div>
      <Header title="RGB-палитра" />
      <ColorPicker>
        
      </ColorPicker>
      <Footer title="&copy; 2026 Разработчик: Ваше ФИО" />
    </div>
  );
}

export default App;
