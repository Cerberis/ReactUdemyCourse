import { FoundResults } from "./FoundResults";
import { Logo } from "./Logo";
import { Search } from "./Search";

export function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo></Logo>
      {children}
    </nav>
  );
}
