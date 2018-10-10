import React from 'react';

const Map = () => {
  return (
    <div className="map">
      <h1>Free Delivery and Collection Zone</h1>
      <br />
      <br />
      <p>We offer free collection and delivery for all orders collected within the highlighted zone on the map below. If you're staying outside of this area, we still may be able to collect, but there will be an extra fee starting at ₫20,000 per kilometer.</p>
      <br />
      <iframe title="Free Zone" src="https://www.google.com/maps/d/embed?mid=1yg4MelJ71PmlMpAaz-VQt4th1b4DDmkc" width="940" height="580"></iframe>
      <br />
      <br />
    </div>
  )
}

export default Map;