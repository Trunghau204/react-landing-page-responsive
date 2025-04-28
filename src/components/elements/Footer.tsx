import { Container } from "../shared/Container";
import logo from "../../assets/icon.svg";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
  return (
    <footer className="bg-box-bg pt-20 pb-8 rounded-t-3xl shadow-inner mt-24">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-box-border pb-6">
          <div className="flex items-center gap-3">
            <img src={logo} className="w-8 h-8" alt="EdgeAI Logo" />
            <span className="text-xl font-semibold text-heading-1">EdgeAI</span>
          </div>

          <ul className="flex flex-wrap gap-4 text-heading-2">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-3 text-sm text-heading-3">
          <p>Empowering AI at the Edge – Fast, Smart & Efficient.</p>
          <div className="flex items-center gap-2">
            <p>
              &copy; {new Date().getFullYear()} EdgeAI. All rights reserved.
            </p>
            <span className="hidden md:inline">|</span>
            <p className="italic">by Tran Trung Hau</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
