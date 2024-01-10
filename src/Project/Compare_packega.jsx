import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import { Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faCircle,
  faCircleCheck,
  faCircleRadiation,
  faCircleXmark,
  faIndianRupeeSign,
  faLayerGroup,
  faStar,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { ids } from "../App";
import { bidContext } from "../App";
import { hotelName } from "../App";
import { BASE_URL } from "../BASE_URL";
import Footer from "./Footer";

function Compare_packega(props) {
  const { id, setId } = useContext(ids);

  const id1 = id[0];
  const id2 = id[1];
  const { bidData, setBidData } = useContext(bidContext);
  const [bidDetails, setBidDetails] = useState([]);
  const [bidDetails1, setBidDetails1] = useState([]);
  const { hotel, setHotel } = useContext(hotelName);

  const DetailsBid = async () => {
    const res = await fetch(`${BASE_URL}bidpackage/biddetails?_id=${id1}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setBidDetails(data.data[0]);
  };
  const DetailsBid1 = async () => {
    const res = await fetch(`${BASE_URL}bidpackage/biddetails?_id=${id2}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setBidDetails1(data.data[0]);
  };

  useEffect(() => {
    DetailsBid();
    DetailsBid1();
  }, []);

  return (
    <>
      <Header />

      <section className="py-3">
        <div className="container-fluid px-xl-5 px-lg-4 px-md-3 px-sm-2 ">
          <div bordered>
            <div className="text-center compare_packages_header py-2">
              <h3 className="cmnp mb-2">Compare Packages</h3>
              <p style={{ color: "#B8B8B8" }}>
                Compare packages and find your perfect match!
              </p>
            </div>
            <div>
              <table width={"100%"}>
                <thead>
                  <tr>
                    <th></th>
                    <th>{hotel[0]}</th>
                    <th>{hotel[1]}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="size-500">
                      <FontAwesomeIcon icon={faCircleRadiation} /> Duration
                    </td>
                    <td>
                      {bidDetails.start_date1} to {bidDetails.end_date1}
                    </td>
                    <td>
                      {bidDetails1.start_date1} to {bidDetails1.end_date1}
                    </td>
                    {/* <td>22/08/2023 to 26/08/2023</td> */}
                  </tr>
                  <tr>
                    <td className="size-500">
                      <FontAwesomeIcon icon={faTag} /> Price
                    </td>
                    <td style={{ color: "#00B707" }}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                      {bidDetails.price_per_person}{" "}
                      <span style={{ color: "#B8B8B8" }}>| per person</span>
                    </td>
                    <td style={{ color: "#00B707" }}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                      {bidDetails1.price_per_person}{" "}
                      <span style={{ color: "#B8B8B8" }}>| per person</span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" style={{ background: "#09646D" }}>
                      <p className="w-100 text-white cmnp ps-2 py-2">
                        <FontAwesomeIcon icon={faLayerGroup} /> Overview
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="size-500">Total Reviews</td>
                    <td>
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon
                        icon={faStar}
                        className=""
                        style={{ color: "#B8B8B8" }}
                      />{" "}
                      | 11,000(Statick)
                      <span style={{ color: "#B8B8B8" }}>(Reviews)</span>
                    </td>
                    <td>
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon
                        icon={faStar}
                        className=""
                        style={{ color: "#B8B8B8" }}
                      />{" "}
                      | 11,000(Statick)
                      <span style={{ color: "#B8B8B8" }}>(Reviews)</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="size-500">Meals</td>
                    <td>
                      {bidDetails.meal_required}
                      {/* Include */}
                    </td>
                    <td>
                      {bidDetails1?.meal_required}
                      {/* Include */}
                    </td>
                  </tr>
                  <tr>
                    <td className="size-500">Sightseeing</td>
                    <td>{bidDetails.sightseeing}</td>
                    <td>{bidDetails1.sightseeing}</td>
                  </tr>
                  <tr>
                    <td className="size-500">Travel By</td>
                    <td>{bidDetails.travel_by}</td>
                    <td>{bidDetails1.travel_by}</td>
                  </tr>
                  <tr>
                    <td className="size-500">Categories</td>
                    <td>Historical, Adventure (statick)</td>
                    <td>Historical, Adventure (statick)</td>
                  </tr>
                  <tr>
                    <td className="size-500">Other Requirements </td>
                    <td>No other (statick)</td>
                    <td>No other (statick)</td>
                  </tr>
                  <tr>
                    <td colspan="3" style={{ background: "#09646D" }}>
                      <p className="w-100 text-white cmnp ps-2 py-2">
                        <FontAwesomeIcon icon={faBrush} /> Services
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="size-500">
                      <FontAwesomeIcon icon={faCircleCheck} /> Included
                    </td>
                    <td>
                      <ul style={{ color: "#00B707" }}>
                        {bidDetails.include_services && bidDetails.include_services.map((ele) => {
                          return (
                            <>
                              <li>{ele.include_services_value}</li>
                            </>
                          );
                        })}
                      </ul>
                    </td>
                    <td>
                      <ul style={{ color: "#00B707" }}>
                        {bidDetails1.include_services && bidDetails1.include_services.map((ele) => {
                          return (
                            <>
                              <li>{ele.include_services_value}</li>
                            </>
                          );
                        })}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="size-500">
                      <FontAwesomeIcon icon={faCircleXmark} /> Excluded
                    </td>
                    <td>
                      <ul style={{ color: "#E50000" }}>
                        {bidDetails.exclude_services && bidDetails.exclude_services.map((ele) => {
                          return (
                            <>
                              <li>{ele.exclude_services_value}</li>
                            </>
                          );
                        })}
                      </ul>
                    </td>
                    <td>
                      <ul style={{ color: "#E50000" }}>
                        {bidDetails1.exclude_services && bidDetails1.exclude_services.map((ele) => {
                          return (
                            <>
                              <li>{ele.exclude_services_value}</li>
                            </>
                          );
                        })}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" style={{ background: "#09646D" }}>
                      <p className="w-100 text-white cmnp ps-2 py-2">
                        <img src="/vector1.png" className="img-fluid" />{" "}
                        Itinerary
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="size-500">Day 1</td>
                    <td>
                      <li>
                        Bom Jesus Basilica:
                        <br />
                        Bom Jesus Basilica is a revered Roman Catholic Church and is one of the prime pilgrimage places to visit in Goa. A UNESCO World Heritage Site, it attracts both pilgrims and tourists from all over the world. One of the oldest churches built during the Portuguese era, it has marvelous architecture.
                      </li>
                    </td>
                    <td>
                      <li>
                        Reis Magos Fort
                        <br />
                        Reis Magos Fort is a renovated 16th-century Portuguese Fort in Panjim. One of the oldest forts in Goa, it has served as a defense fortress, a jail, and a hospital. Today, it promotes the state’s rich cultural heritage. It organizes exhibitions, fairs, festivals, and educational events.
                      </li>
                    </td>
                  </tr>
                  <tr>
                    <td className="size-500">Day 2</td>
                    <td>
                      <li>
                        Aguada Fort :<br />
                        Overlooking the Arabian sea, Aguada Fort is a well-maintained 16th-century Portuguese fort that stands on Sinquerim Beach. It is an ASI-protected monument of national importance and among the best heritage places to visit in Goa. Together with a lighthouse, it depicts Portuguese heritage and architecture. You can also get panoramic views of the surroundings from atop.
                      </li>
                    </td>
                    <td>
                      <li>
                        Cabo de Rama Fort :<br />
                        Mostly in ruins now, Cabo de Rama Fort is a medieval hillfort. It lies sandwiched between the gorgeous Agonda and Cavelossim beaches. Believed to be linked to Lord Rama, it was formerly called Cape Rama. You can witness the eclectic blend of Hindu and Portuguese architecture.
                      </li>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <Footer/>
    </>
  );
}

export default Compare_packega;
