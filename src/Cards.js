import React from 'react';

function Cards() {
  return (

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
  <img src="kid.jpeg" class="card-img-top" alt="girls"/>
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
  <img src="ethnic.webp." class="card-img-top" alt="ethnic"/>
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







  );
}

export default Cards;