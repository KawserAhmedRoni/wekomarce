import React from "react";
import Image from "next/image";
import Logo1 from "@/public/assets/category-1.png";
import Link from "next/link";
const Category = () => {
  return (
    <div className="py-5  vw-100">
      <div className="container shop-category">
        <h2 className="text-center fw-semibold lh-lg fs-2 text-capitalize">
          Shop by Catagory
        </h2>

        <div className="row g-4 pt-5">
          <div className="col-12 col-sm-6 col-lg-4 ">
            <div className="category-image">
              <Image
                src={Logo1}
                alt="Dynamic Image"
                width={450}
                height={280}
                className="img-fluid  "
                priority
              />
              <Link className="button text-center" href={"/"}>
                T-Shirts
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 ">
            <div className="category-image">
              <Image
                src={Logo1}
                alt="Dynamic Image"
                width={450}
                height={280}
                className="img-fluid  "
                priority
              />
              <Link className="button text-center" href={"/"}>
                Panjabi
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 ">
            <div className="category-image">
              <Image
                src={Logo1}
                alt="Dynamic Image"
                width={450}
                height={280}
                className="img-fluid  "
                priority
              />
              <Link className="button text-center" href={"/"}>
                Pants
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 ">
            <div className="category-image">
              <Image
                src={Logo1}
                alt="Dynamic Image"
                width={450}
                height={280}
                className="img-fluid  "
                priority
              />
              <Link className="button text-center" href={"/"}>
                Sunnah
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 ">
            <div className="category-image">
              <Image
                src={Logo1}
                alt="Dynamic Image"
                width={450}
                height={280}
                className="img-fluid  "
                priority
              />
              <Link className="button text-center" href={"/"}>
                Accessories
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 ">
            <div className="category-image">
              <Image
                src={Logo1}
                alt="Dynamic Image"
                width={450}
                height={280}
                className="img-fluid  "
                priority
              />
              <Link className="button text-center" href={"/"}>
                Bundle Offers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
