import React, { useEffect } from "react";
import Header from "./Header";
import { Container, Row } from "react-bootstrap";
import "./css/Blog.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../BASE_URL";
import Footer from "./Footer";

function Blog(props) {
  const [blogLits, setBlogLists] = useState([]);
  const navigate = useNavigate();

  const BlogList = async () => {
    const res = await fetch(`${BASE_URL}blogger/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setBlogLists(data.data);
  };

  useEffect(() => {
    BlogList();
  }, []);

  return (
    <>
      <Header />

      {/* section-1 */}

      <section className="container">
        <div className="section-1">
          <img src="/blog1.png" className="w-100" />
          <div className="inp text-center py-4">
            <input
              type="search"
              placeholder="Search popular places, what to do, where to go..."
            />
          </div>
        </div>
      </section>

      {/* section-2 */}

      <section>
        <Container>
          <div className="text-center Blog_Header">
            <h1>Here’s some travel blogs to explore more</h1>
            <p className="mb-0">FROM OUR ENTHUSIASTIC TRAVELLERS</p>
          </div>
          <div className="py-3">
            <div className="inner_img ">
              <Row className="d-flex justify-content-center">
                {blogLits &&
                  blogLits.map((ele) => {
                    return (
                      <>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-8">
                          <div
                            onClick={() => navigate(`/blog1/${ele._id}`)}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="box_ralative">
                              <img
                                src={ele.blog_title_photo}
                                className="img-fluid  w-100 py-2"
                              />
                              <div className="box_absolute d-flex align-items-center">
                                <div className="text-white ms-2">
                                  <h5 className="mb-0">
                                    {ele.blogger_syt.map((e) => {
                                      return (
                                        <>
                                          <img
                                            src={e.blog_owner_photo}
                                            alt=""
                                            style={{
                                              height: "50px",
                                              width: "50px",
                                              borderRadius: "50%",
                                            }}
                                          />
                                        </>
                                      );
                                    })}
                                  </h5>
                                  <p className="mb-0">{ele.blog_category}</p>
                                </div>

                                <div className="text-white ms-2">
                                  <h5 className="mb-0">
                                    {ele.blogger_syt.map((e) => {
                                      return <>{e.blog_owner_name}</>;
                                    })}
                                  </h5>
                                  <p className="mb-0">{ele.blog_category}</p>
                                </div>
                              </div>
                            </div>
                            <p className="innerp">{ele.blog_title}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </Row>
            </div>

            <div className="inner_img">
              <Row></Row>
            </div>

            <div className="inner_img">
              <Row></Row>
            </div>
          </div>
          <div className="text-center mt-3 mb-5">
            <a href="#" className="load_btn">
              Load More
            </a>
          </div>
        </Container>
      </section>
      <hr />
      <Footer/>
    </>
  );
}

export default Blog;
