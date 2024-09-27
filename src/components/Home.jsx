
const Home = () => {
  return (
    <>
    <div className="container-fluid">
        <div className='row'>
          <div className="col col-text">
            <div className='horizon-padding col-text-box'>
              <div>
                <div>
                  <p className='welcome-text'>Welcome to Businezz X</p>
                </div>
                <div>
                  <h1>Join us in growing<br />your <span>business</span>.</h1>
                </div>
              </div>
              <div>
                <hr />
                <div><p className='elevate-text'>Elevate your business with Businezz X, a <br />professional Webflow template.</p></div>
                <div className='contact-button-box'>
                  <a href="#" className='contact-button'>Contact us</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-form">
            <div className='form-box'>
              <div>
                <div><p className='book'>Book your free consultation</p></div>
              </div>
              <div className='form-text'><h2>Get a free consultation</h2></div>
              <form className='form-consultation'>
                <div className='row'>
                  <div className="mb-3 col">
                    <input type="text" className="form-control" id="" placeholder='Name' />
                  </div>
                  <div className="mb-3 col">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='contact@email.com' />
                  </div>
                </div>
                <div className="mb-3">
                  <textarea className="form-control" aria-label="With textarea" placeholder='Please type your message here...'></textarea>                </div>
                <button type="submit" className="btn btn-primary btn-contact">Get in Touch</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
)
}

export default Home