import Card from "./components/Card";
import ToggleBtn from "./components/ToggleBtn";
import ThemeContextProvider from "./context/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <div className="min-h-screen min-w-full bg-slate-200 dark:bg-slate-900">
        <ToggleBtn />
        <Card />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
