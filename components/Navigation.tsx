import Link from "next/link";
import React from "react";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <>
      <nav>
        <ul className="navContainer">
          <Link href="/containerQueriesAndLayers">Container Query && Cascade Layers</Link>
          <Link href="/subgrid">
            Grid && Subgrid with nesting and the new CSS pseudo-classes
            </Link>
          <Link href="/nesting">view transition</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
