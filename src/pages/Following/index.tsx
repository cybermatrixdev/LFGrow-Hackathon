import React from "react";
import Slider from "react-slick";
import Image1 from "../../images/Following-Social1.jpeg";
import Image2 from "../../images/Following-Social2.jpeg";
import Image3 from "../../images/Following-Social3.jpeg";

export default function FolowingPage() {
  function PostsSlider() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      className: "w-1/2 bg-base-100 mt-[2%] mb-[20%] ml-[30%] rounded-3xl",
      dotsClass: "bottom-0 slick-dots ",
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="card">
            <figure>
              <img src={Image2} className="w-full" />
            </figure>
            <div className="card-body pt-0">
              <h2 className="card-title">Gal Gadot</h2>
              <p>Gal Gadot is so cool in the chair!</p>
            </div>
          </div>
          <div className="card">
            <figure>
              <img src={Image3} className="w-full" />
            </figure>
            <div className="card-body pt-0">
              <h2 className="card-title">Gal Gadot</h2>
              <p>Gal Gadot is amazing!</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
  
  const handleFollow = (e: any) =>  {
    console.log('Following!');
    console.log(e);
  }

  const handleMint = (e: any) =>  {
    console.log('Minting!');
    console.log(e);
  }

  return (
    <div className="container w-[90%] mx-[5%] mt-[2%] min-h-screen ">
      <div className="flex flex-col">
        <div className="flex-none order-1">
          Social Moments<div className="divider"></div>
        </div>
        <div className="flex-none order-2 basis-1/2 min-w-0 h-0 columns-4">
            <button type="submit" className="btn btn-primary" onClick={handleFollow}>
                Follow
            </button>
            <button type="submit" className="btn btn-primary ml-10" onClick={handleMint}>
                Mint NFT
            </button>
        </div>
        <div className="flex-none order-3 basis-1/2 min-w-0 h-0">
          <PostsSlider />
        </div>
      </div>
    </div>
  )
}
