import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="logo-media">
        <Link to="/">
          {/* <img
            alt="logo"
            className="footer-logo img-fluid my-5"
            src="./logo/newlogo.svg"
          /> */}
          <img
            alt="logo"
            className="footer-logo img-fluid my-5"
            src="./logo/newnewlogo-footer.svg"
          />
        </Link>
        <div className="media-links">
          <a
            href="https://www.instagram.com/gomango.studio/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-instagram fa-2x"></i>
          </a>

          <a
            href="https://vimeo.com/user129958158"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-vimeo fa-2x"> </i>
          </a>

          <a href="mailto: gomango.studio@gmail.com">
            <i class="fal fa-envelope-open fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="footer-nav">
        <Link to="/weddings">
          <h2> Weddings</h2>
        </Link>
        <Link to="/promo">
          <h2> Promo</h2>
        </Link>
        <Link to="/music">
          <h2> Music</h2>
        </Link>
        <Link to="/fashion">
          <h2> Fashion</h2>
        </Link>
      </div>
    </div>
  );
}

export default Footer;

// import React from "react";

// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <div className="footer mt-5">
//       <div>
//         <div className="row justify-content-start mt-5">
//           <div className="col col-sm-4 my-5">
//             <Link to="/">
//               <img
//                 className="footer-logo img-fluid my-5"
//                 src="./logo/newlogo.svg"
//               />
//             </Link>
//             <a
//               href="https://www.instagram.com/gomango.studio/"
//               target="_blank"
//               rel="noreferrer"
//               className="mx-3"
//             >
//               <i class="fab fa-instagram fa-2x"></i>
//             </a>

//             <a
//               href="https://vimeo.com/user129958158"
//               target="_blank"
//               rel="noreferrer"
//               className="mx-3"
//             >
//               <i class="fab fa-vimeo fa-2x"> </i>
//             </a>

//             <a href="mailto: gomango.studio@gmail.com">
//               <i class="fal fa-envelope-open fa-2x"></i>
//             </a>

//             <p>&copy;2023 GoManGo Studio</p>
//           </div>
//           <div className="col col-sm-4 my-5">
//             <p> Services</p>
//             <p> Weddings</p>
//             <p> Promo</p>
//             <p> Music</p>
//             <p> Fashion</p>
//           </div>
//           <div className="col col-sm-4 my-5">
//             <p> Contact US</p>
//             <p> Email</p>
//             <p>
//               <strong>Email: </strong>
//               gomango.studio@gmail.com
//             </p>
//             <p> Phone</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
