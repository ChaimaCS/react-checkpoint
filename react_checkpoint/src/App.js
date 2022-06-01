import './App.css';

function App() {
  return (
<div>
{/* navbar*/}
    <div className="App">
      <header className="App-header">
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">GeoServices</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Quarry exploitation</a></li>
            <li><a class="dropdown-item" href="#">Geomatics</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Geotechnics</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Our community</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Key words..." aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </header>
    </div>



<section className='bod'>
{/* About*/}

<section class="p-4">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md">
          <h1> About </h1>
          </div>
          <div class="col-md p-2">
            <h2>Learn The Fundamentals</h2>
            <p class="lead">
            We are a consulting company established in Tunisia, specialized in multidisciplinary engineering.
    <br></br>
    We put at your service qualified professionals in the various disciplines of Earth Sciences and in the field 
    of mines and quarries, with an important consideration of environmental problems.
            </p>
          </div>
        </div>
      </div>
    </section>

{/* Services*/}

<section class="p-1">
      <div class="container">
        <div className='services'> <h1>Our services</h1></div>
        <div class="row text-center g-4">
          <div class="col-md">
            <div class="card bg-secondary text-light">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <i class="bi bi-laptop"></i>
                </div>
                <h3 class="card-title mb-3">Quarry exploitation</h3>
                <p class="card-text">
                We offer services in the field of mining and quarrying with innovative and promising technical and economic approaches
                </p><br></br><br></br><br></br>
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-secondary text-light">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <i class="bi bi-person-square"></i>
                </div>
                <h3 class="card-title mb-3">Geomatics</h3>
                <p class="card-text">
                We offer a potential of competences, services and a wide range of data-processing tools in Geographic Information Systems (GIS): ArcGis, Global-Mapper, QGIS, GvSIG, Envi...
                </p><br></br><br></br>
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-secondary text-light">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <i class="bi bi-people"></i>
                </div>
                <h3 class="card-title mb-3">Geotechnics</h3>
                <p class="card-text">
                We are your partner for the execution of analyses preliminary to your mineral exploration projects, and which consists of a set of operations necessary for the acquisition of knowledge serving to evaluate qualitatively and quantitatively a mineral deposit. We also intervene in road and construction projects.
                </p>
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
{/* fields*/}
<div id="carouselExampleControls" class="carousel slide bg-secondary" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <h3 class="serv ">Mines and quarries</h3>
                <p class="serv-text">
                We intervene in the field of mining and particularly open-pit quarries, whether for the search of new exploitation sites,
                <br></br> the extension of already existent sites and/or the restoration of abandoned sites.
                </p>
    </div>
    <div class="carousel-item">
    <h3 class="serv">Environment</h3>
                <p class="serv-text">
                Sustainable development has always been our primary concern. <br></br> That's why we follow and establish studies based on a concrete environmental policy and strategy.
                </p>
    </div>
    <div class="carousel-item">
    <h3 class="serv ">Security</h3>
                <p class="serv-text">
                Hazard studies serve to evaluate all potential accidental risks, their impact on people and property, and the damage to the environment. <br></br> For each hazardous phenomenon identified, prevention and protection measures will be defined.
                </p>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{/* formulaire*/}
<div > <h3 class='text-center'>Contact us for further details or services</h3>
    <form className='form-signin'>
    <div class="mb-3">
    <label for="Your full name" class="form-label">Full Name</label>
    <input type="Full Name" class="form-control" id="Your full name"/>
  </div>
  <div class="mb-3">
    <label for="Company name" class="form-label">Company name</label>
    <input type="Company name" class="form-control" id="exampleInputEmail1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Enter your work e-mail</div>
  </div>
  <div class="mb-3">
    <label for="Subject" class="form-label">Subject</label>
    <input type="Subject" class="form-control" id="subject"/>
  </div>
  <div class="mb-3">
    <label for="Message" class="form-label">Your message</label>
    <input type="message" class="form-control" id="message"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">I agree to use my data</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    </section>

{/* cookies*/}
<div class="cookie-consent">

          <span>This site uses cookies to enhance user experience. see<a href="#" class="ml-1 text-decoration-none">Privacy policy</a> </span>
          <div class="mt-2 d-flex align-items-center justify-content-center g-2">
            <button class="allow-button mr-1">accept</button>
            <button class="allow-button">cancel</button>
          </div> 
        </div>

    </div>
    
  );
}



export default App;




