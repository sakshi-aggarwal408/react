import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
  return (
    <div>
      <div className="slider">
<Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src="/img.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src="/img1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src="/img3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <div className="container-fluid" style={{height:"5%"}}>
      < div className="row"> 
        < div className="col-md-3" style={{backgroundColor:'lightgray'}}>
        
    <div className="card" >
  <img src="girls.png" class="card-img-top" alt="girls"/>
  <div className="card-body">
  <button type="button" class="btn btn-outline-primary">Girls </button>
    <p className="card-text">Price:2000</p>
   Size:<br/> <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">S</button>
  <button type="button" class="btn btn-secondary">M</button>
  <button type="button" class="btn btn-secondary">L</button>
</div><br/>
    <a href="#" className="btn btn-primary">Add to Cart</a>
  </div>
</div>

</div>
< div className="col-md-3" style={{backgroundColor:'lightgray'}}>
        
    <div className="card" >
  <img src="mens.png" class="card-img-top" alt="mens"/>
  <div className="card-body">
  <button type="button" class="btn btn-outline-primary">Mens </button>
    <p className="card-text">Price:2000</p>
   Size:<br/> <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">S</button>
  <button type="button" class="btn btn-secondary">M</button>
  <button type="button" class="btn btn-secondary">L</button>
</div><br/>
    <a href="#" className="btn btn-primary">Add to Cart</a>
  </div>
</div>

</div>

< div className="col-md-3" style={{backgroundColor:'lightgray'}}>
        
    <div className="card" >
  <img src="kid.jpeg" class="card-img-top" alt="girls" style={{height:233}}/>
  <div className="card-body">
  <button type="button" class="btn btn-outline-primary">Kids</button>
    <p className="card-text">Price:2000</p>
   Size:<br/> <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">S</button>
  <button type="button" class="btn btn-secondary">M</button>
  <button type="button" class="btn btn-secondary">L</button>
</div><br/>
    <a href="#" className="btn btn-primary">Add to Cart</a>
  </div>
</div>

</div>
< div className="col-md-3" style={{backgroundColor:'lightgray'}}>
        
    <div className="card" >
  <img src="ethnic.webp" class="card-img-top" alt="ethnic"/>
  <div className="card-body">
  <button type="button" class="btn btn-outline-primary">Ethnic</button>
    <p className="card-text">Price:2000</p>
   Size:<br/> <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">S</button>
  <button type="button" class="btn btn-secondary">M</button>
  <button type="button" class="btn btn-secondary">L</button>
</div><br/>
    <a href="#" className="btn btn-primary">Add to Cart</a>
  </div>
</div>

</div>





</div>
</div>








</div>

    </div>
  )
}
