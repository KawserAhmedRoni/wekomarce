import React from "react";
import { LuBadgeCheck } from "react-icons/lu";
import { PiFireTruck } from "react-icons/pi";
import { GiCardboardBox } from "react-icons/gi";
import { GrCreditCard } from "react-icons/gr";

const Support = () => {
  return (
    <div className="py-5 vw-100">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between gap-3">
            <div className="col-3 wearesupport d-flex justify-content-center  align-items-center gap-2 mx-auto">
              <LuBadgeCheck className="fs-5 icons" />
              <p className="fs-6 text-capitalize fw-normal mb-0">
                Premium Quality
              </p>
            </div>
            <div className="col-3 wearesupport d-flex justify-content-center  align-items-center gap-2 mx-auto">
              <GiCardboardBox className="fs-5 icons" />
              <p className="fs-6 text-capitalize fw-normal mb-0">Easy Return</p>
            </div>
            <div className="col-3 wearesupport d-flex justify-content-center  align-items-center gap-2 mx-auto">
              <PiFireTruck className="fs-5 icons" />
              <p className="fs-6 text-capitalize fw-normal mb-0">
                National Delivery
              </p>
            </div>
            <div className="col-3 wearesupport d-flex justify-content-center  align-items-center gap-2 mx-auto">
              <GrCreditCard className="fs-5 icons" />
              <p className="fs-6 text-capitalize fw-normal mb-0">
                Safe Payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
