import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoScreen from "./components/TodoScreen";

export default function App() {
  return (
    <div className="bg-zinc-100">
      <Header  />
      <TodoScreen />
      <Footer />
    </div>
  )
}