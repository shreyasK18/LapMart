import React from 'react'


const Carousal = props => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={process.env.PUBLIC_URL + 'img/olena-sergienko-NeVzNhylAnU-unsplash.jpg'} class="d-block w-100" alt="image1"/>
                <div class="carousel-caption ">
                <h5>Exclusive Laptops</h5>
                <p>Laptop with exclusive features</p>
                </div>
            </div>
            <div class="carousel-item">
            <img src={process.env.PUBLIC_URL + 'img/parker-johnson-HK27KAql34A-unsplash.jpg'} class="d-block w-100" alt="image2"/>
                <div class="carousel-caption ">
                <h5>Best Price</h5>
                <p>Will provide Laptop and its Accessories at affordable price</p>
                </div>
            </div>
            <div class="carousel-item">
            <img src={process.env.PUBLIC_URL + 'img/carousal_image_3.jpg'} class="d-block w-100" alt="image3"/>
                <div class="carousel-caption ">
                <h5>Accessories</h5>
                <p>We also sell chargers and batteries of the laptop</p>
                </div>
            </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
      </div>
    )
}



export default Carousal
