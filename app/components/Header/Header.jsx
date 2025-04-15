import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="header-offer py-2 text-center vw-100">
        <p>
          <span>Free shipping</span> all over Bangladesh on orders over 1000Tk!
          Coupon: <span>FRSHIPPING</span>
        </p>
      </div>
      <div className="vw-100">
        <div className="container py-2 d-flex justify-content-between">
          <form className="col-6">
            <div className="header-search">
              <input type="search" placeholder="Search for products" />
              <div className="d-flex header-buttons align-items-center gap-1">
                <IoSearch className="icons" />
                <button>Search </button>
              </div>
            </div>
          </form>
          <div className="col-6 d-flex justify-content-between align-items-center">
            <div className="header-logo">
              <Image
                src={Logo}
                alt="Dynamic Image"
                width={800}
                height={600}
                className="header-img"
                priority
              />
            </div>
            <div className="d-flex header justify-content-between align-items-center gap-5">
              <div className="d-flex justify-content-between align-items-center gap-2">
                <div className="header-card">
                  <FaCartShopping className="icons" />
                  <div className="quantity">1</div>
                </div>
                <div className="card-balance">
                  <BsCurrencyDollar className="balance" />
                  <span>0.00</span>
                </div>
              </div>
              <Link
                href={"/"}
                className="d-flex account justify-content-between align-items-center gap-2"
              >
                <FaUser className="d-block" />
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="vw-100">
        <nav className="py-2">
          <ul className="d-flex text-capitalize nav-links list-unstyled fw-normal fs-6 justify-content-center align-items-center gap-5">
            <li>
              <Link href={"#"}>home</Link>
            </li>
            <li>
              <Link href={"#"}>t-Shirts</Link>
            </li>
            <li>
              <Link href={"#"}>panjabi</Link>
            </li>
            <li>
              <Link href={"#"}>pants</Link>
            </li>
            <li>
              <Link href={"#"}>sunnah essentials</Link>
            </li>
            <li>
              <Link href={"#"}>accesories </Link>
            </li>
            <li>
              <Link href={"#"}>bundle offer </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
