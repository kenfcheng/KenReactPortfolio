import React from 'react'

const Container = () => {
    return (
    <div className="container">
        <div className="row">
           
            <div className="col-4">
                <div className="card img-responsive" style="width: 18rem;">
                    <img className="card-img-top-wedding" height="auto" width="auto" src="Images/AnthonyWedding2.jpg" alt="Photography">
                    <div className="container bg-info text-white">
                        <h5 className="card-title">Photography</h5>
                        <a href="#" className="card-link">Photography Portfolio</a>
                        <div className="card-body">
                            <p className="card-text">Some examples of photography I've done throughout the years</p>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="col-4">
                <div className="card" style="width: 18rem;">
                 <img className="card-img-top img-responsive" src="Images/findersnap.jpg" alt="Web Design">
                 <h5 className="card-title ml-2">Web Design</h5>   
                 <a href="https://mrbusiness87.github.io/Finder-Project1/index.html" className="card-link ml-2">Sports Finder</a>
                    <div className="card-body">
                        <p className="card-text">A small simple project to help indviduals find professonal sporting events near them.  Features incluse: Materliaize CSS, jquery, API's, ticket buying, and geolocation. </p>
                    </div>
                </div>
            </div>
         
            <div className="col-4">
                <div className="card img-responsive" style="width: 18rem;">
                    <img className="card-img-top" src="Images/program.png" alt="Programmer">
                    <div className="container bg-info text-white">
                        <h5 className="card-title">Programming</h5>
                            <a href="#" className="card-link">Examples</a>
                            <div className="card-body">
                                <p className="card-text">Some examples of my work in programming</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Container
