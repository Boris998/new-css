import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const GridSubgrid = (props: Props) => {
  const router = useRouter();

  const handleClidk = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="main-grid-to-rule-them-all">
      <div className="hero">
        <h1 className="main__title hero__title">
          Subgrid is what grid was meant to be 2 columns over the other grid
        </h1>
        <img
          className="hero__img"
          src="https://wallpapers.com/images/high/rick-and-morty-looking-across-worlds-zkja7zin1kr2wfjg.webp"
          alt=""
        />
        <div className="hero__body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <Link className="btn" href="#" onClick={handleClidk}>
            Escape Hatch
          </Link>
          <a className="btn" onClick={handleClidk}>
            More info
          </a>
        </div>
      </div>

      <div className="even-columns odd sales-points three-columns p-3">
        <div className="sales-points__sales-point">
          <h2 className="sales-points__title">Easier</h2>
          <p className="sales-point__body">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="sales-points__sales-point">
          <h2 className="sales-points__title">Faster</h2>
          <p className="sales-point__body">
            Delectus perferendis doloribus mollitia quibusdam facere eius!
          </p>
        </div>
        <div className="sales-points__sales-point">
          <h2 className="sales-points__title">Consistent</h2>
          <p className="sales-point__body">
            Nostrum possimus, porro ipsam iure soluta est!
          </p>
        </div>
      </div>

      <div className="even-columns more-stuff two-columns p-3">
        <div className="sales-points__sales-point">
          <h2 className="sales-points__title">Faster</h2>
          <p className="sales-point__body">
            Delectus perferendis doloribus mollitia quibusdam facere eius!
          </p>
        </div>
        <div className="sales-points__sales-point">
          <h2 className="sales-points__title">Consistent</h2>
          <p className="sales-point__body">
            Nostrum possimus, porro ipsam iure soluta est!
          </p>
        </div>
      </div>

      <div className="even-columns cta odd even-columns p-3">
        <div>
          <h2>Sign up for our newsletter!</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            consequuntur repellat facilis provident dolorum laborum blanditiis
            veritatis, ipsa sequi cumque soluta quod fugiat dolorem quam.
          </p>
          <label>
            Your email: <input type="text" placeholder="sam@example.com" />
          </label>
        </div>
      </div>

      <div className="even-columns full-split">
        <img
          src="https://wallpapers.com/images/high/rick-and-morty-looking-across-worlds-zkja7zin1kr2wfjg.webp"
          alt=""
        />
        <p className="v-center p-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          quisquam distinctio laudantium velit similique a ducimus, quae sint,
          adipisci quidem eaque voluptate illum aut. Dolorum inventore illum
          molestiae atque possimus?
        </p>
      </div>
    </div>
  );
};

export default GridSubgrid;
