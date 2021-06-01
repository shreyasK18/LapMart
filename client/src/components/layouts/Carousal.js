import React from 'react'


const Carousal = props => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={process.env.PUBLIC_URL + 'img/olena-sergienko-NeVzNhylAnU-unsplash.jpg'} className="d-block w-100" alt="image1"/>
                    <div className="carousel-caption ">
                        <h5>Exclusive Laptops</h5>
                        <p>Laptop with exclusive features</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={process.env.PUBLIC_URL + 'img/parker-johnson-HK27KAql34A-unsplash.jpg'} className="d-block w-100" alt="image2"/>
                    <div className="carousel-caption ">
                        <h5>Best Price</h5>
                        <p>Will provide Laptop and its Accessories at affordable price</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={process.env.PUBLIC_URL + 'img/carousal_image_3.jpg'} className="d-block w-100" alt="image3"/>
                    <div className="carousel-caption ">
                        <h5>Accessories</h5>
                        <p>We also sell chargers and batteries of the laptop</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
      </div>
    )
}



export default Carousal
