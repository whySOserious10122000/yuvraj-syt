import { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "react-multi-carousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Data from "./Data";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { useNavigate, NavLink } from "react-router-dom";
import { categoryName } from "../App";
import { BASE_URL } from "../BASE_URL";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  const { categoryData, setCategoryData } = useContext(categoryName);

  const [test, setTest] = useState([]);
  const [test1, setTest1] = useState([]);
  const [test2, setTest2] = useState([]);
  const [destinationData, setDestinationData] = useState([]);
  const [most_lovaed_destionation, setMost_lovaed_destionation] = useState([]);

  const [goToHome, setGoToHome] = useState(false);
  const [goToPage, setGoToPage] = useState(false);

  const navigate = useNavigate();

  const fun = async () => {
    const data2 = Data.slice(0, 5);
    setTest(data2);
    const data3 = Data.slice(5, 10);
    setTest1(data3);
    const data4 = Data.slice(10, 15);
    setTest2(data4);
  };

  const HomeData = async () => {
    const res = await fetch(`${BASE_URL}home`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    
    setDestinationData(data.data[0].DestinationData);
    setMost_lovaed_destionation(data.data[0].most_lovaed_destionation);
  };

  useEffect(() => {
    HomeData();
    fun();
  }, []);

  return (
    <div>
      <div style={{ marginBottom: "25px" }}>
        <h3 className="font">Are you looking for?</h3>
      </div>
      {/* <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={-30}
        slidesPerView={4}
        
      >
        {destinationData.map((ele) => {
          return (
            <>
              <SwiperSlide
                className="px-1 pb-0"
                onClick={() => {
                  navigate(`/destination1/${ele._id}`);
                  setCategoryData(ele.category_name);
                }}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <img
                    src={ele.photo}
                    alt=""
                    className="img-fluid w-75 mobile_image_set"
                    style={{
                      cursor: "pointer",
                    }}
                  />
                  <p className="ms-1 name_c">{ele.category_name}</p>
                </div>
              </SwiperSlide>
            </>
          );
        })}

       
      </Swiper> */}

      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={true}
        swipeable={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {destinationData.map((ele) => {
          return (
            <div>
              <img
                src={ele.photo}
                alt=""
                className="img-fluid mobile_image_set"
                onClick={() => {
                  navigate(`/destination1/${ele._id}`);
                  setCategoryData(ele.category_name);
                }}
              />
              <p className="name_c text-center">{ele.category_name}</p>
            </div>
          );
        })}
      </Carousel>

      <div style={{ margin: "25px 0" }}>
        <h3 className="font pt-sm-5 pt-2">Most Loved Destination!</h3>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={20}
        slidesPerView={4}
        
        breakpoints={{
          250: {
            width: 250,
            slidesPerView: 2,
          },
          400: {
            width: 400,
            slidesPerView: 2,
          },
          576: {
            width: 576,
            slidesPerView: 2,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
          992: {
            width: 992,
            slidesPerView: 3,
          },
          1199: {
            width: 1199,
            slidesPerView: 4,
          },
        }}
      >
        {most_lovaed_destionation.map((ele) => {
          return (
            <>
              <SwiperSlide>
                <p onClick={() => {
                  navigate(`/destination/${ele._id}`);
                  // setCategoryData(ele.category_name);
                }}>
                  <img
                    src={ele.place_to_visits}
                    alt=""
                    className=" text-center img_radius most_love"
                    onClick={() => {
                      setGoToPage(true);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <p className="name_ca">{ele.destination_name}</p>
                </p>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
