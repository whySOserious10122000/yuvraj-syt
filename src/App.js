/* eslint-disable react/jsx-pascal-case */
import React, { createContext, useState } from "react";
import "./App.css";
import Index from "./Project/index";
import Destination from "./Project/Destination";
import Hotel_Details from "./Project/Hotel_Details";
import Blog from "./Project/Blog";
import Blog1 from "./Project/Blog1";
import { Route, Routes } from "react-router-dom";
import Notification from "./Project/Notification";
import Destination1 from "./Project/Destination1";
import Top_rate_hotel from "./Project/Top_rate_hotel";
import Custom_packega from "./Project/Custom_packega";
import My_pannel from "./Vendor/My_pannel";
import C_packegga from "./Project/C_packegga";
import Compare_packega from "./Project/Compare_packega";
import Side_navbar from "./Vendor/Side_navbar";
import Navbar_side from "./Vendor/Navbar_side";
import LogiPage from "./Vendor/Logi-page";
import Registation_vandor from "./Vendor/Registation_vandor";
import Registation__vandor2 from "./Vendor/Registation__vandor2";
import Registation__vandor3 from "./Vendor/Registation__vandor3";
import Display_custom from "./Vendor/Display_custom";
import Submit_package_form from "./Vendor/Submit_package_form";
import Display_submit from "./Vendor/Display_submit";
import Book_packega_details from "./Vendor/Book_packega_details";
import Booked_packega from "./Vendor/Booked_packega";
import Requirements_details from "./Vendor/Requirements_details";
import Forgot_password from "./Project/Forgot_password";
import Contact from "./Project/Contact";
import Packega_details from "./Project/Packega_details";
import Modal from "./Project/Modal";
import Practic from "./Project/Section_modal";
import Model from "./Project/Model";
import Profile from "./Project/Profile";
import Boocking from "./Project/Boocking";
import Signup from "./Project/Signup";
import RegistrationVendor1 from "./Vendor/Demo";
import Compare_packega_2 from "./Project/Compare_packega";
import Submitted_Package_Details from "./Vendor/Submitted_Package_Details";
import Header2 from "./Vendor/Header2";
import User_tab from "./Vendor/User_tab";
import Home_page from "./Vendor/Home_page";
import AddItineries from "./Vendor/AddItineries";
import My_packega from "./Project/My_packega";
import AddItineriesEdit from "./Vendor/AddItineriesEdit";
import AddHotel from "./Vendor/AddHotel";
import Vandor_Registation from "./Vendor/Vandor_Registation";
import Aboutus from "./Project/Aboutus";
import TermsAndCondition from "./Project/TermsAndCondition";
import Faqs from "./Project/Faqs";
import Cancellation from "./Project/Cancellation";
import Privacy from "./Privacy";
import VendorChangePass from "./Vendor/VendorChangePass";
import VendorForgotPassword from "./Vendor/VendorForgotPassword";
import VerifyOtp from "./Vendor/VerifyOtp";
import NewPassword from "./Vendor/NewPassword";
import Editmyprofile from "./Vendor/Editmyprofile";
import PersonalDetail from "./Vendor/PersonalDetail";
import Editagencydetail from "./Vendor/Editagencydetail";
import EditagencyGst from "./Vendor/EditagencyGst";
import PersonalDetailForm from "./Vendor/PersonalDetailForm";
import AgencyDetailForm from "./Vendor/AgencyDetailForm";
import GstEditForm from "./Vendor/GstEditForm";
import Booked_package_fulDetail from "./Project/Booked_package_fulDetail";

export const dataContext = createContext();
export const bidContext = createContext();
export const categoryName = createContext();
export const day = createContext();
export const ids = createContext();
export const hotelName = createContext();
export const Itineries = createContext();
export const rangeContext = createContext();
export const monthContext = createContext();

function App() {
  const [info, setInfo] = useState("");
  const [bidData, setBidData] = useState("");
  const [categoryData, setCategoryData] = useState("");
  const [dayNumber, setDayNumber] = useState("");
  const [hotel, setHotel] = useState("");
  const [id, setId] = useState("");
  const [rangeData, setRangeData] = useState("");
  const [monthData, setMonthData] = useState("");

  return (
    <>
      {/*------------- user side  -------------------------------*/}

      {/* <Index/> */}
      {/* <Signup/> */}
      {/* <Destination/> */}
      {/* <Hotel_Details/> */}
      {/* <Blog/> */}
      {/* <Blog1/> */}
      {/* <Notification/> */}
      {/* <Destination1 /> */}
      {/* <Top_rate_hotel/> */}
      {/* <Custom_packega/> */}
      {/* <My_packega/> */}
      {/* <C_packegga/> */}
      {/* <Compare_packega /> */}
      {/* <Compare_packega_2 /> */}
      {/* <Contact/> */}
      {/* <Aboutus/> */}
      {/* <TermsAndCondition/> */}
      {/* <Faqs/> */}
      {/* <Cancellation/> */}
      {/* <Privacy/> */}

      {/*---------------- vendor side  --------------------------*/}

      {/* <Header2/> */}
      {/* <Side_navbar/> */}
      {/* <My_pannel/> */}
      {/* <Navbar_side/>                                      remove */}
      {/* <LogiPage/> */}
      {/* <Registation_vandor/>  */}
      {/* <Registation__vandor2/> */}
      {/* <Registation__vandor3/> */}
      {/* <Display_custom/> */}
      {/* <Submit_package_form/> */}
      {/* <User_tab/> */}
      {/* <Display_submit/>                 remove*/}
      {/* <Submitted_Package_Details/> */}
      {/* <Book_packega_details/> */}
      {/* <Booked_packega/> */}
      {/* <Requirements_details/> */}
      {/* <Forgot_password/> */}
      {/* <Packega_details/> */}
      {/* <Modal/> */}
      {/* <Practic/> */}
      {/* <Model/>                          remove*/}
      {/* <Profile/> */}
      {/* <Boocking/>                       remove*/}
      {/* <Booked_package_fulDetail/> */}

      <dataContext.Provider value={{ info, setInfo }}>
        <bidContext.Provider value={{ bidData, setBidData }}>
          <categoryName.Provider value={{ categoryData, setCategoryData }}>
            <day.Provider value={{ dayNumber, setDayNumber }}>
              <hotelName.Provider value={{ hotel, setHotel }}>
                <ids.Provider value={{ id, setId }}>
                  <rangeContext.Provider value={{ rangeData, setRangeData }}>
                    <monthContext.Provider value={{ monthData, setMonthData }}>
                      <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/user/registration" element={<Signup />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog1/:id" element={<Blog1 />} />
                        <Route
                          path="/destination1/:id"
                          element={<Destination1 />}
                        />
                        <Route
                          path="/destination/:id"
                          element={<Destination />}
                        />
                        <Route
                          path="/packega_details/:id"
                          element={<Packega_details />}
                        />
                        <Route
                          path="/custom_requirement"
                          element={<C_packegga />}
                        />
                        <Route
                          path="/compare_packega"
                          element={<Compare_packega_2 />}
                        />
                        <Route
                          path="/custome_package/:id"
                          element={<Custom_packega />}
                        />
                        <Route
                          path="/top_rate_hotel"
                          element={<Top_rate_hotel />}
                        />
                        <Route
                          path="/hotel_details/:id"
                          element={<Hotel_Details />}
                        />
                        <Route path="/my_packega" element={<My_packega />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/my-boocking/:id" element={<Boocking />} />
                        <Route path="/booking-full-detail/:id" element={<Booked_package_fulDetail />} />
                        <Route path="/contactus" element={<Contact />} />
                        <Route path="/aboutus" element={<Aboutus />} />
                        <Route
                          path="/payment-policy"
                          element={<TermsAndCondition />}
                        />
                        <Route path="/faqs" element={<Faqs />} />
                        <Route
                          path="/cancellation-policy"
                          element={<Cancellation />}
                        />
                        <Route path="/privacy-policy" element={<Privacy />} />
                        <Route
                          path="/vendor/registration"
                          element={<Registation_vandor />}
                        />
                        <Route
                          path="/vandor/registration"
                          element={<Vandor_Registation />}
                        />
                        <Route
                          path="/vendor/registration2"
                          element={<Registation__vandor2 />}
                        />
                        <Route
                          path="/vendor/changepassword"
                          element={<VendorChangePass/>}
                        />
                        <Route
                          path="/vendor/forgotpassword"
                          element={<VendorForgotPassword/>}
                        />
                        <Route
                          path="/vendor/registration3"
                          element={<Registation__vandor3 />}
                        />
                        <Route
                          path="/vendor/otp"
                          element={<VerifyOtp/>}
                        />
                        <Route
                          path="/vendor/newpassword"
                          element={<NewPassword/>}
                        />
                        <Route
                          path="/display/custom"
                          element={<Display_custom />}
                        />
                        <Route path="/vendor/login" element={<LogiPage />} />
                        <Route
                          path="/vendor/home-page"
                          element={<Home_page />}
                        />
                        <Route
                          path="/display/custom/details/:id"
                          element={<Requirements_details />}
                        />
                        <Route
                          path="/vendor/Submit_package_form/:id"
                          element={<Submit_package_form />}
                        />
                        <Route
                          path="/vendor/Submit-form"
                          element={<Submitted_Package_Details />}
                        />
                        <Route
                          path="/vendor/Booked-packega"
                          element={<Booked_packega />}
                        />
                        <Route
                          path="/vendor/Book-packega/details/:id"
                          element={<Book_packega_details />}
                        />
                        <Route
                          path="/vendor/add-itineries/:id/:BidId"
                          element={<AddItineries />}
                        />
                        <Route
                          path="/vendor/add-itineriesEdit/:id/:BidId"
                          element={<AddItineriesEdit />}
                        />
                        <Route
                          path="/vendor/add-hotel"
                          element={<AddHotel />}
                        />
                        <Route
                          path="/vendor/myprofile"
                          element={<Editmyprofile/>}
                        />
                        <Route
                          path="/vendor/personaldetails"
                          element={<PersonalDetail/>}
                        />
                        <Route
                          path="/vendor/editagencydetail"
                          element={<Editagencydetail/>}
                        />
                        <Route
                          path="/vendor/EditagencyGst"
                          element={<EditagencyGst/>}
                        />
                        <Route
                          path="/vendor/EditPersonalDetail"
                          element={<PersonalDetailForm/>}
                        />
                        <Route
                          path="/vendor/AgencyEdit"
                          element={<AgencyDetailForm/>}
                        />
                        <Route
                          path="/vendor/GstEditForm"
                          element={<GstEditForm/>}
                        />
                      </Routes>
                    </monthContext.Provider>
                  </rangeContext.Provider>
                </ids.Provider>
              </hotelName.Provider>
            </day.Provider>
          </categoryName.Provider>
        </bidContext.Provider>
      </dataContext.Provider>
    </>
  );
}

export default App;
