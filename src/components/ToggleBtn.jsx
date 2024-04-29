import { useContext } from "react";
import ThemeContext from "../context/themeContext";

function ToggleBtn() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (theme == "dark") {
      setTheme("light");
      document.body.classList.remove("dark");
    } else {
      setTheme("dark");
      document.body.classList.add("dark");
    }
  };

  return (
    <div className="flex items-center justify-end p-2 w-full">
      <label
        htmlFor="toggleB"
        className="flex items-center cursor-pointer"
        onClick={handleClick}
      >
        <div className="ml-3 text-gray-700 dark:text-white font-medium">
          Light&nbsp;&nbsp;&nbsp;
        </div>
        <div className="relative">
          <input type="checkbox" id="toggleB" className="sr-only" />

          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>

          <div
            className={`dot absolute left-1 top-1  w-6 h-6 rounded-full transition ${
              theme == "dark" ? "translate-x-full bg-white" : "bg-slate-950"
            }`}
          ></div>
        </div>

        <div className="ml-3 text-gray-700 dark:text-white font-medium">Dark</div>
      </label>
    </div>
  );
}

export default ToggleBtn;
