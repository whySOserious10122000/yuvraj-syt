import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import "./css/Hotal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../BASE_URL";

function Hotel_Details(props) {


  const { id } = useParams();

  const [hotelDetail, setHotelDetail] = useState([]);

  const hotelList = async () => {
    const token = localStorage.getItem("userToken");
    const res = await fetch(`${BASE_URL}hotel_syt/details?_id=${id}`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setHotelDetail(data?.data?.[0]);
    console.log(data.data);
  };

  useEffect(() => {
    hotelList();
  }, []);

  const overRef = useRef(null);
  const rooms = useRef(null);
  const facilities = useRef(null);
  const location = useRef(null);
  const policies = useRef(null);


  const scrollTo = (section) => {
    let targetRef;

    switch (section) {
      case 'overview':
        targetRef = overRef;
        break;
      case 'rooms':
        targetRef = rooms;
        break;
      case 'facilities':
        targetRef = facilities;
        break;
      case 'location':
        targetRef = location;
        break;
      case 'policies':
        targetRef = policies;
        break;
      default:
        targetRef = null;
    }

    if (targetRef) {
      window.scroll({
        top: targetRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const [img, setLargeImage] = useState("")
  console.log(img);

  const showLargeImage = (src) => {
    setLargeImage(src);
  };

  console.log(img);


  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />

      {/*  <!----------------------------------------------- image section ---------------------------------------------> */}

      <section class="pt-5">
        <div class="container-customes">
          <div class="row text-center">
            <div className="col-8">
              <div className="row h-100">
                <div class="col-5 h-100">
                  <div class="header-images sea-image h-100">
                    <img src="/Rectangle 421.png" alt="" class="h-100" />
                  </div>
                </div>
                <div class="col-7 h-100">
                  <div class="row gy-1 h-50">
                    <div class="col-6 h-100">
                      <div className="h-100">
                        <img src="/Rectangle 429.png" alt="" class="h-100" />
                      </div>
                    </div>
                    <div class="col-6 h-100">
                      <div className="h-100">
                        <img src="/Rectangle 425.png" alt="" class="h-100" />
                      </div>
                    </div>
                    <div class="col-6 h-100">
                      <div className="h-100">
                        <img src="/Rectangle 427.png" alt="" class="h-100" />
                      </div>
                    </div>
                    <div class="col-6 h-100">
                      <div className="h-100">
                        <img src="/Rectangle 428.png" alt="" class="h-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div class="availibility">
                <h4>Check Availability</h4>
                <input type="text" name="" id="" class="mb-3" />
                <div className="d-flex align-items-center mb-3">
                  <label for="text" class="" style={{ width: "55%" }}>
                    Check-In date :
                  </label>
                  <input type="date" name="" id="" class="px-2" />
                </div>
                <div className="d-flex align-items-center mb-3">
                  <label for="text" class="" style={{ width: "55%" }}>
                    Check-Out date :
                  </label>
                  <input type="date" name="" id="" class="px-2" />
                </div>
                <div class="row text-center mb-4">
                  <div class="col-4">
                    <label for="select">Adult</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>0</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-4">
                    <label for="select">Children</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>0</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-4">
                    <label for="select">infants</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>0</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div class="available-search mb-2">
                  <a href="#">Search</a>
                </div>
              </div>
              {/* <div class="very-good mt-4">
                <div>
                  <h3>4.7 Very good</h3>
                  <p>513 reviews</p>
                </div>
                <div class="gautam">
                  <p class="mb-4">
                    "Clean and natural environment around the property.Clean and
                    natural environment around the property. "Clean and natural
                    environment around the property."
                  </p>
                  <div>
                    <img
                      src="assets/Ellipse 153.png"
                      alt=""
                      class="img-fluid"
                    />
                    <span class="ms-2">Gautam Shah</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className={`my-4 ${isSticky ? 'sticky' : ''}`}>
        <div class="container-customes stick-link-bar">
          <div class={`row  rounded px-4 pb-1 pt-2 text-center gx-2 ${isSticky ? 'hshshs' : ''}`}>
            <div class="col-6 Overview">
              <div class="d-flex justify-content-between align-items-center">
                <a onClick={() => scrollTo('overview')} style={{ cursor: "pointer" }}>Overview</a>
                <a onClick={() => scrollTo('rooms')} style={{ cursor: "pointer" }} class="d-lg-block d-md-none d-none">
                  Rooms{" "}
                </a>
                <a onClick={() => scrollTo('facilities')} style={{ cursor: "pointer" }} class="d-lg-block d-md-none d-none">
                  Facilities
                </a>
                <a onClick={() => scrollTo('location')} style={{ cursor: "pointer" }} class="d-lg-block d-md-none d-none">
                  Location
                </a>
                <a onClick={() => scrollTo('policies')} style={{ cursor: "pointer" }} class="d-lg-block d-md-none d-none">
                  Policies
                </a>
              </div>
            </div>
            <div class="col-6 rupees text-end">
              <span>from</span>
              <h4 class="d-inline ms-1">
                <i class="fa-solid fa-indian-rupee-sign"></i> 5699
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* <!---------------------------------------- center ---------------------------------------------> */}

      <section ref={overRef}>
        <div class="container-customes" >
          <div class="row gx-3" >
            <div class="col-xl-12 col-lg-8 col-md-12 col-sm-12">
              <div class="rose-valley" >
                <div>
                  <div>
                    <div class="d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-column flex-column">
                      <div class="me-4">
                        <h4 class="m-0 text-start">{hotelDetail.hotel_name}</h4>
                      </div>
                      <div class="d-flex">
                        <div>
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "yellow" }}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "yellow" }}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "yellow" }}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "yellow" }}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#DDDDD" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="mt-2 pb-3 border-bot">
                    {hotelDetail.hotel_address},{hotelDetail.city},{hotelDetail.state}
                  </p>
                </div>
                <div class="rose-paragraph">
                  <p>{hotelDetail.hotel_description}</p>
                </div>
              </div>

              <div class="highlights my-4">
                <div class="me-4 mb-4">
                  <h4 class="m-0">Highlights</h4>
                </div>
                <div class="row text-center">
                  <div className="col-2">
                    <img src="/desk.png" alt="" class="img-fluid" />
                    <p>Front desk (24hrs)</p>
                  </div>
                  <div className="col-2">
                    <img src="/Dining.png" alt="" class="img-fluid" />
                    <p>Quality food & seating</p>
                  </div>
                  <div className="col-2">
                    <img src="/transfer.png" alt="" class="img-fluid" />
                    <p>Airport transportation</p>
                  </div>
                  <div className="col-2">
                    <img src="/view.png" alt="" class="img-fluid" />
                    <p>Excellent view</p>
                  </div>
                  <div className="col-2" ref={rooms}>
                    <img src="/Beach.png" alt="" class="img-fluid" />
                    <p>Nearby beach</p>
                  </div>
                </div>
              </div>

              <div class="delux-room" >
                <div class="row">
                  <div className="col-3">
                    <div className="d-flex flex-column images-after">
                      <div>
                        <img
                          src="/Rectangle 450.png"
                          alt=""
                          className="rounded hotel-rooms-main-image hotel-rooms-image-1"
                        />
                      </div>
                      <div class="d-flex mt-1" style={{ gap: "5px", width: "300px" }}>
                        <img
                          src="/Rectangle 450.png"
                          alt=""
                          className="rounded h-50 hotel-rooms-sb-images hotel-rooms-image-1"
                        />
                        <img
                          src="/Rectangle 450.png"
                          alt=""
                          className="rounded h-50 hotel-rooms-sb-images hotel-rooms-image-1"
                          onMouseDown={() => showLargeImage("hyyyy")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="facilities">
                      <ul class="mb-1">
                        <li>
                          <h5>Deluxe Room</h5>
                        </li>
                        <li>Free Wi-Fi</li>
                        <li>Bathroom</li>
                        <li>24-hour Housekeeping</li>
                        <li>Air Conditioning</li>
                        <li>Mineral Water</li>
                      </ul>
                      <h2 class=" mb-xl-3 mb-lg-3 mb-md-2 mb-sm-1 mb-1">
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                        5699 <span>pernight</span>
                      </h2>
                      <div class="book-now">
                        <a href="#">Book Now</a>
                        <a href="#">View Detail</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-3"></div>
                  <div className="col-4"></div>
                </div>
              </div>
              <div class="amenities my-4" ref={facilities}>
                <h5 class="ps-2">Amenities and facilities</h5>
                <div class="row px-4">
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <h6 class="mb-1">Languages spoken</h6>
                    <ul class="mb-1">
                      <li>English</li>
                      <li>Hindi</li>
                      <li>Russian</li>
                    </ul>
                    <h6 class="mb-1">Outdoor</h6>
                    <ul class="mb-1">
                      <li>Bicycles</li>
                    </ul>
                    <h6 class="mb-1">Accessibility</h6>
                    <ul class="mb-1">
                      <li>Wheelchair accessible</li>
                    </ul>
                    <h6 class="mb-1">Internet access</h6>
                    <ul class="mb-1">
                      <li>Free Wi-Fi In All Rooms!</li>
                      <li>Internet</li>
                      <li>Internet Services</li>
                      <li>Wi-Fi i public areas</li>
                    </ul>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 antiviral">
                    <h6>Cleanliness and safety</h6>
                    <ul class="mb-1">
                      <li class="mb-1">Anti-viral cleaning products</li>
                      <li class="mb-1">Body thermometer</li>
                      <li class="mb-1">Cashless payment service</li>
                      <li class="mb-1">Daily disinfection in all rooms</li>
                      <li class="mb-1">Daily disinfection in common areas</li>
                      <li class="mb-1">Doctor/nurse on call</li>
                      <li class="mb-1">Face coverings on staff</li>
                      <li class="mb-1">First aid kit</li>
                      <li class="mb-1">Free face masks</li>
                    </ul>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <h6>For the kids</h6>
                    <ul>
                      <li class="mb-1">Babysitting service</li>
                      <li class="mb-1">Family room</li>
                      <li class="mb-1">Kids club</li>
                      <li class="mb-1">Kids meal</li>
                      <li class="mb-1">Playground</li>
                      <li class="mb-1">Swimming pool [kids]</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!---------------------------------------- map -------------------------------------------> */}

      <section class="py-4" ref={location}>
        <div class="container-customes">
          <div class="row">
            <div class="col-12">
              <h4>Location</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d53847.619112712244!2d72.64224071165977!3d23.09424437056074!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1682573990219!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ borderRadius: "10px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* <!------------------------------- footer ----------------------------------------> */}

      <section class="my-4" ref={policies}>
        <div class="container-customes">
          <div class="row foot-center">
            <div class="col footer">
              <div class="foot">
                <div class="footer-head">
                  <h5 class="mb-5">Property policies</h5>
                  <h6 class="mb-3">Children and extra beds</h6>
                  <p>
                    Extra beds are dependent on the room you choose. Please
                    check the individual room capacity for more details.
                  </p>
                </div>
                <div class="row gx-3">
                  <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 pt-3">
                    <div class="box">
                      <div class="mb-3">
                        <h5 class="pb-2">Infant 0-2 year</h5>
                      </div>
                      <div>
                        <h6 class="mb-3">
                          Stay for free if using existing bedding.
                        </h6>
                        <p>Baby cot/crib available upon request</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 pt-3">
                    <div class="box">
                      <div class="mb-3">
                        <h5 class="pb-2">Children 3-11 year</h5>
                      </div>
                      <div class="pb-3">
                        <h6 class="mb-3">Must use an extra bed</h6>
                        <p>Baby cot/crib available upon request</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 pt-3">
                    <div class="box">
                      <div class="mb-3">
                        <h5 class="pb-2">Adults 12 & above</h5>
                      </div>
                      <div class="pb-5">
                        <p>Baby cot/crib available upon request</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="others mt-3">
                  <h5>Others</h5>
                  <ul>
                    <li>
                      The property does not permit food and beverages from
                      outside.
                    </li>
                    <li>
                      When booking more than 5 rooms, different policies and
                      additional supplements may apply.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hotel_Details;
