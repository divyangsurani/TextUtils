import React from 'react'

export default function Contactus(props) {
  let myStyle = {
    color: props.mode ==='dark'?'white':'#042743',
}
  return (
    <div className='container mb-8'>
     <h1 className="my-3" style={myStyle}>Contact Us</h1>
     <div className='container'>
      <form method="post"  action='https://formspree.io/f/mpzvdlda'>
            <div class="form-group">
              <label class="control-label" style={myStyle}>Full Name <span>*</span></label>
              <input type="text" name="fullname" class="form-control white_bg" id="fullname" placeholder="Full Name" required/>
            </div>
            <br />
            <div class="form-group">
              <label class="control-label"style={myStyle}>Email Address <span>*</span></label>
              <input type="email" name="email" class="form-control white_bg" id="emailaddress" placeholder="Email Address" required/>
            </div>
             <br />
            <div class="form-group">
              <label class="control-label" style={myStyle}>Phone Number <span>*</span></label>
              <input type="text" name="contactno" class="form-control white_bg" id="phonenumber" placeholder="Phone Number" required maxlength="10" pattern="[0-9]+"/>
            </div>
            <br />
            <div class="form-group">
              <label class="control-label" style={myStyle}>Message <span>*</span></label>
              <textarea class="form-control white_bg" name="message" rows="4" placeholder="Message" required></textarea>
            </div>
            <br />
            <div class="form-group">
              <button class="btn-primary" style={{borderRadius:'10px'}} type="submit" name="send" href="/" >Send Message </button>
            </div>
          </form>
          </div>

    </div>
  )
}
