import { useContext } from "react";
import { createContext, useState } from "react";
import Icon from "./Icon";
import "./styles.css";

const FlyoutContext = createContext();

export default function Flyout({ children }) {
  const [on, toggle] = useState(false);
  return (
    <div className={`flyout`}>
      <FlyoutContext.Provider value={{ on, toggle }}>
        {children}
      </FlyoutContext.Provider>
    </div>
  );
}

function Toggle() {
  const { on, toggle } = useContext(FlyoutContext);
  console.log("toggle", toggle);
  return (
    <div className="flyout-btn" onClick={() => toggle(!on)}>
      <Icon />
    </div>
  );
}

function List({ children }) {
  const { on } = useContext(FlyoutContext);
  return on && <ul className="flyout-list">{children}</ul>;
}

function Item({ children }) {
  return <li className="flyout-item">{children}</li>;
}

Flyout.Toggle = Toggle;
Flyout.List = List;
Flyout.Item = Item;
