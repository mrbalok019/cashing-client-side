import React, { useContext, useEffect, useState } from "react";
import {
  FaBook,
  FaCalendar,
  FaCalendarCheck,
  FaChartBar,
  FaGraduationCap,
  FaHome,
  FaList,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { FaHouseChimney, FaMessage, FaPeopleGroup } from "react-icons/fa6";
import { IoFastFood, IoMenu } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import { MdOutlineRateReview } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseModerator from "../Hooks/UseModerator";

const DashboardLayout = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isAdmin] = UseAdmin();
  const [isModerator] = UseModerator();
  
  const helmetContext = {};
const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second loading delay

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const logOutHandler = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          text: "Successfully logout",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          text: error.message,
          icon: "error",
        });
      });
  };

  const photoIcon = (
    <>
      <div className="w-10 rounded-full">
        <lord-icon
          className="w-full h-full"
          src="https://cdn.lordicon.com/kthelypq.json"
          trigger="loop"
          delay="500"
          colors="primary:#000"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      </div>
    </>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-300"></div>
      </div>
    );
  }

  return (
    <div className="drawer lg:drawer-open">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>SG | Dashboard</title>
        </Helmet>
      </HelmetProvider>

      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ml-4">
        {/* outlet content  */}
        <div
          className="w-full h-auto bg-fuchsia-700 navbar-end 
                        flex flex-row gap-4 p-4 "
        >
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <IoMenu />
          </label>

          <p className="hidden md:flex text-lg font-semibold text-white my-auto">
            Hi, {user.displayName.split(" ", 1)}
          </p>
          <div className="btn btn-ghost tooltip tooltip-bottom btn-circle avatar">
            {user.photoURL ? (
              <Link to="/dashboard">
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt="User"
                />
              </Link>
            ) : (
              photoIcon
            )}
          </div>

          <button className="btn btn-accent" onClick={logOutHandler}>
            Log Out
          </button>
        </div>

        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <ul className="menu p-4 w-80 min-h-full bg-fuchsia-300 text-base-content">
          {/* Sidebar content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-circle drawer-button lg:hidden text-xl "
          >
            X
          </label>

          <div className="flex flex-col mx-auto">
            <img
              src="/studygrantlogo.png"
              alt="logo"
              className="sm:w-10 md:w-16 lg:w-20 mx-auto"
            />
            <h1 className="font-bold text-2xl text-center mb-16">
              Study Grant
            </h1>
          </div>

          {isAdmin ? (
            <>
              <li className="text-lg">
                <Link to="/dashboard">
                  <FaUser></FaUser>
                  Admin profile
                </Link>
              </li>
              <li className="text-lg">
                <Link to="/dashboard/addscholarship">
                  <FaGraduationCap />
                  Add Scholarship
                </Link>
              </li>
              <li className="text-lg">
                <Link to="/dashboard/managescholarship">
                  <FaList></FaList>
                  Manage Scholarship
                </Link>
              </li>
              <li className="text-lg">
                <Link to="/dashboard/manageappliedapplication">
                  <RiPagesLine />
                  Manage Applied Application
                </Link>
              </li>
              <li className="text-lg">
                <Link to="/dashboard/managereview">
                  <MdOutlineRateReview />
                  Manage Review
                </Link>
              </li>
              <li className="text-lg">
                <Link to="/dashboard/allusers">
                  <FaPeopleGroup />
                  All Users
                </Link>
              </li>
              <li className="text-lg">
                <Link to="/dashboard/analytics">
                  <FaChartBar />
                  Analytics
                </Link>
              </li>
            </>
          ) : isModerator ? (
            <>
              <li className="text-lg">
                <Link to="/dashboard">
                  <FaUser></FaUser>
                  Admin profile
                </Link>
              </li>
              <li className="text-lg">
                <Link to="/dashboard/addscholarship">
                  <FaGraduationCap />
                  Add Scholarship
                </Link>
              </li>
              <li className="text-lg">
                <Link to="/dashboard/managescholarship">
                  <FaList></FaList>
                  Manage Scholarship
                </Link>
              </li>
              <li className="text-lg">
                <Link to="/dashboard/manageappliedapplication">
                  <RiPagesLine />
                  Manage Applied Application
                </Link>
              </li>
              <li className="text-lg">
                <Link to="/dashboard/managereview">
                  <MdOutlineRateReview />
                  Manage Review
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="text-lg">
                <Link to="/dashboard">
                  <FaHome></FaHome>
                  User Profile
                </Link>
              </li>
              <li className="text-lg">
                <Link to="/dashboard/myapplications">
                  <FaCalendar></FaCalendar>
                  My Application
                </Link>
              </li>
              <li className="text-lg">
                <Link to="/dashboard/myreview">
                  <FaWallet></FaWallet>
                  My Review
                </Link>
              </li>
            </>
          )}

          {/* common menu  */}
          <hr className="w-3/4 border-2" />
          <li className="text-lg">
            <Link to="/">
              <FaHouseChimney></FaHouseChimney>
              Home
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/allscholarships">
              <IoFastFood></IoFastFood>
              All Scholarships
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
