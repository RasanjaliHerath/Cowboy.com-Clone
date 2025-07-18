import React, { useState } from 'react';
import './NavBar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Popover, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  const [ebikeAnchorEl, setEbikeAnchorEl] = useState(null);
  const [shoppingAnchorEl, setShoppingAnchorEl] = useState(null);
  const [leasingAnchorEl, setLeasingAnchorEl] = useState(null);
  const [hoveredBike, setHoveredBike] = useState(null); // <-- NEW

  const handleEbikeClick = (e) => {
    e.preventDefault();
    setEbikeAnchorEl(ebikeAnchorEl ? null : e.currentTarget);
  };

  const handleShoppingClick = (e) => {
    e.preventDefault();
    setShoppingAnchorEl(shoppingAnchorEl ? null : e.currentTarget);
  };

  const handleLeasingClick = (e) => {
    e.preventDefault();
    setLeasingAnchorEl(leasingAnchorEl ? null : e.currentTarget);
  };

  const closeEbikePopover = () => setEbikeAnchorEl(null);
  const closeShoppingPopover = () => setShoppingAnchorEl(null);
  const closeLeasingPopover = () => setLeasingAnchorEl(null);

  const ebikeOpen = Boolean(ebikeAnchorEl);
  const shoppingOpen = Boolean(shoppingAnchorEl);
  const leasingOpen = Boolean(leasingAnchorEl);

  const shoppingId = shoppingOpen ? 'shopping-popover' : undefined;
const leasingId = leasingOpen ? 'leasing-popover' : undefined;


  const bikes = [
    { name: 'Classic', price: '€2,890', img: 'https://tse1.mm.bing.net/th/id/OIP.LvweefxYHlnnzMe_FTGwaQHaFp?rs=1&pid=ImgDetMain&o=7&rm=3', link: '/classic' },
    { name: 'Cruiser', price: '€2,999', img: 'https://www.thecoolector.com/wp-content/uploads/2021/05/cowboy-scaled.jpg', link: '/cruiser' },
    { name: 'Cruiser ST', price: '€2,999', img: 'https://i.computer-bild.de/imgs/1/3/8/4/3/3/3/1/Cowboy_C4ST_Sand-56d7d143cb29730e.jpg', link: '/cruiser-st' },
    { name: 'Cross', price: '€3,999', img: 'https://tse2.mm.bing.net/th/id/OIP.DnuQxVr_L4_aBBOOvLk8dQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3', link: '/cross' },
    { name: 'Cross ST', price: '€3,999', img: 'https://static1.pocketlintimages.com/wordpress/wp-content/uploads/156785-fitness-trackers-news-cowboy-s-fourth-gen-ebikes-bring-myriad-improvements-and-a-step-through-version-image1-ayatoi7gwx.png', link: '/cross-st' },
  ];




  
  return (
    <>
      <nav className={`navbar ${(ebikeOpen || leasingOpen) ? 'white-bg' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <h1>COWBOY.</h1>
          </div>

          <div className="navbar-links">
            <a href="#" className="navbar-link-ebike" onClick={handleEbikeClick}>
              <span className="navbar-link-text">E-BIKE</span>
              <ExpandMoreIcon className={`expand-icon ${ebikeOpen ? 'rotated' : ''}`} />
            </a>
          <Link to="/accessories" className="navbar-link">
  <span className="navbar-link-text">ACCESSORIES</span>
</Link>


            <a href="#"><span className="navbar-link-text">ADAPTIVE POWER</span></a>
            <Link to="/connect" className="navbar-link">
              <span className="navbar-link-text">CONNECT</span>
            </Link>
            <a href="#" onClick={handleLeasingClick}>
              <span className="navbar-link-text">LEASING</span>
              <ExpandMoreIcon className={`expand-icon ${leasingOpen ? 'rotated' : ''}`} />
            </a>
          </div>

          <div className="navbar-right">
            <Link to="/testride" className="navbar-r-link">BOOK A TEST RIDE</Link>
            <button className="nav-button">ORDER NOW</button>
            <a href="#" className="navbar-icon" onClick={handleShoppingClick}>
              <LocalMallOutlinedIcon className="shopping-bag-icon" />
            </a>
          </div>
        </div>
      </nav>

      {/* E-BIKE Popover */}
        {/* E-BIKE Popover */}
      <Popover
        open={ebikeOpen}
        anchorEl={ebikeAnchorEl}
        onClose={closeEbikePopover}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 64, left: 0 }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{
          style: {
            width: '100vw',
            maxWidth: '100vw',
            backgroundColor: '#f0f0f0',
            boxSizing: 'border-box',
          },
        }}
      >
        <div
          style={{
            padding: '24px',
            display: 'flex',
            justifyContent: 'center',
            gap: '0',
          }}
        >
          {bikes.map((bike) => (
            <a
              key={bike.name}
              href={bike.link}
              style={{ position: 'relative', display: 'block' }}
              onMouseEnter={() => setHoveredBike(bike.name)}
              onMouseLeave={() => setHoveredBike(null)}
            >
              <img
                src={bike.img}
                alt={bike.name}
                style={{
                  height: '200px',
                  width: 'auto',
                  display: 'block',
                }}
              />
              <div
                className="bike-name"
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  padding: '4px',
                  textAlign: 'center',
                  fontSize: '1rem',
                  color: '#000',
                  boxSizing: 'border-box',
                }}
              >
                {/* Bike name with conditional gray color */}
                <div
                  className={`bike-name-text ${hoveredBike && hoveredBike !== bike.name ? 'ash' : ''}`}
                  style={{ fontWeight: 'bold' }}
                >
                  {bike.name}
                </div>
                {/* Price stays same color */}
                <div style={{ color: '#b2b2b2' }}>{bike.price}</div>
              </div>
            </a>
          ))}
        </div>
      </Popover>


      {/* Shopping Popover */}
      <Popover
        id={shoppingId}
        open={shoppingOpen}
        anchorEl={shoppingAnchorEl}
        onClose={closeShoppingPopover}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <div style={{ padding: '12px 16px', minWidth: '250px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="subtitle1" fontWeight="bold">Your cart</Typography>
            <LocalMallOutlinedIcon fontSize="small" />
          </div>
          <Typography variant="body2" sx={{ mt: 1 }}>
            There&apos;s nothing here,&nbsp;
            <a href="#" style={{ textDecoration: 'underline', color: '#000' }}>
              but a test ride is nearby.
            </a>
          </Typography>
          <div style={{ display: 'flex', marginTop: '10px', width: '100%' }}>
            <button style={{
              flex: 1, backgroundColor: '#000', color: '#fff', border: 'none',
              padding: '6px 0', fontWeight: '600', cursor: 'pointer', borderRadius: '0',
            }}>
              Add a Bike
            </button>
            <button style={{
              flex: 1, backgroundColor: '#ccc', color: '#000', border: 'none',
              padding: '6px 0', fontWeight: '600', cursor: 'pointer', borderRadius: '0',
            }}>
              Shop Accessories
            </button>
          </div>
        </div>
      </Popover>

{leasingOpen && (
  <div
    style={{
      position: 'fixed',
      top: '250px',  // Adjust this to match your Popover height + top offset (64 + ~186)
      left: 0,
      width: '100vw',
      height: `calc(100vh - 250px)`, // Rest of viewport
      backdropFilter: 'blur(4px)',
      backgroundColor: 'rgba(0, 0, 0, 0.2)', // Optional dark overlay
      zIndex: 1200, // Below Popover
    }}
  />
)}



      {/* Leasing Popover */}
  <Popover
  id={leasingId}
  open={leasingOpen}
  anchorEl={leasingAnchorEl}
  onClose={closeLeasingPopover}
  anchorReference="anchorPosition"
  anchorPosition={{ top: 64, left: 0 }}
  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
  PaperProps={{
    style: {
      width: '100vw',
      maxWidth: '100vw',
      left: 0,
      backgroundColor: '#fff', // Outer white background
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      boxSizing: 'border-box',
    },
  }}
>
  {/* Wrapper div to create white margin */}
  <div
  style={{
    margin: '16px',
    backgroundColor: '#f0f0f0',
    padding: '24px',
    display: 'flex',
    flexDirection: 'row',  // horizontal layout
    alignItems: 'center',  // align text and images at same vertical level
    gap: '24px',           // space between text and images
    minHeight: '250px',
    boxSizing: 'border-box',
  }}
>
  {/* Left Text Section */}
  <div
    style={{
      minWidth: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Typography variant="h5" fontSize='14px'  gutterBottom>
      Leasing
    </Typography><br></br>
    <Typography variant="h6" fontWeight="500" >
      Affordable monthly plans with
    </Typography>
    <Typography variant="h6" fontWeight="500" gutterBottom>
      maximum flexibility.
    </Typography>
    <Typography variant="body2" color="textSecondary">
      An option for every rider
    </Typography>
  </div>

  {/* Right Image Section */}
  <div
  style={{
    display: 'flex',
    gap: '12px',
  }}
>
  {/* First image - For employees */}
  <Link to="/lease" style={{ position: 'relative', display: 'inline-block' }}>
    <img
      src="https://cdn.shopify.com/s/files/1/1772/1703/files/lease-a-cowboy--nav.jpg?v=1726846270&width=1366"
      alt="Lease a Cowboy"
      style={{
        width: '500px',
        height: '250px',
        objectFit: 'cover',
        objectPosition: 'top',
        borderRadius: '4px',
        display: 'block',
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: '155px',
        left: '20px',
        color: '#fff',
      }}
    >
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>For employees</div>
      <div style={{ fontSize: '14px', color: '#ddd' }}>Check our Partners</div>
    </div>
  </Link>

  {/* Second image - For employers */}
  <Link to="/leaseEmp" style={{ position: 'relative', display: 'inline-block' }}>
    <img
      src="https://cdn.shopify.com/s/files/1/1772/1703/files/business--nav.jpg?v=1726846254&width=1366"
      alt="Leasing Option"
      style={{
        width: '500px',
        height: '250px',
        objectFit: 'cover',
        objectPosition: 'top',
        borderRadius: '4px',
        display: 'block',
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: '155px',
        left: '20px',
        color: '#fff',
      }}
    >
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>For employers</div>
      <div style={{ fontSize: '14px', color: '#ddd' }}>Including self-employed</div>
    </div>
  </Link>
</div>


</div>

</Popover>

      
    </>
  );
};

export default NavBar;
