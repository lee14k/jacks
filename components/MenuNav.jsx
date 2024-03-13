import Link from "next/link";
const MenuNav = (props) => {
  return (
    <nav>
<button onClick={props.toggleMenu}>Toggle Menu</button>
    </nav>
  );
};
