function App() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
              <div className="container px-5">
                  <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item"><a className="nav-link" href="#!">Sign Up</a></li>
                          <li className="nav-item"><a className="nav-link" href="#!">Log In</a></li>
                      </ul>
                  </div>
              </div>
          </nav>
        
          <header className="masthead text-center text-white">
              <div className="masthead-content">
                  <div className="container px-5">
                      <h1 className="masthead-heading mb-0">One Page Wonder</h1>
                      <h2 className="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
                      <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Learn More</a>
                  </div>
              </div>
              <div className="bg-circle-1 bg-circle"></div>
              <div className="bg-circle-2 bg-circle"></div>
              <div className="bg-circle-3 bg-circle"></div>
              <div className="bg-circle-4 bg-circle"></div>
          </header>
          
          <section id="scroll">
              <div className="container px-5">
                  <div className="row gx-5 align-items-center">
                      <div className="col-lg-6 order-lg-2">
                          <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/01.jpg" alt="..." /></div>
                      </div>
                      <div className="col-lg-6 order-lg-1">
                          <div className="p-5">
                              <h2 className="display-4">For those about to rock...</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
         
          <section>
              <div className="container px-5">
                  <div className="row gx-5 align-items-center">
                      <div className="col-lg-6">
                          <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/02.jpg" alt="..." /></div>
                      </div>
                      <div className="col-lg-6">
                          <div className="p-5">
                              <h2 className="display-4">We salute you!</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
       
          <section>
              <div className="container px-5">
                  <div className="row gx-5 align-items-center">
                      <div className="col-lg-6 order-lg-2">
                          <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/03.jpg" alt="..." /></div>
                      </div>
                      <div className="col-lg-6 order-lg-1">
                          <div className="p-5">
                              <h2 className="display-4">Let there be rock!</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
         
          <footer className="py-5 bg-black">
              <div className="container px-5"><p className="m-0 text-center text-white small">Copyright &copy; Your Website 2022</p></div>
          </footer>
      
         
      </>
      
    );
  }
  
  export default App;