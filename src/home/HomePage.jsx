//importations
import React, { useState } from "react"; 
import Homes from "../components/homes/Homes.jsx"; 
import Trending from "../components/trending/Trending.jsx"; 
import Upcomming from "../components/upcoming/Upcomming.jsx"; 
import { latest, recommended, upcome } from "/dummyData.js"; 
// Defines  HomePage functional component 
export const HomePage = () => {
  // Define state variables using useState hook to manage the state of 'items', 'item', and 'rec'
  const [items, setItems] = useState(upcome); 
  const [item, setItem] = useState(latest); 
  const [rec, setRec] = useState(recommended);
  
  // Return JSX elements representing the layout of the HomePage component
  return (
    <>
      <Homes /> {/* Render the Homes component */}
      <Upcomming items={items} title='Upcoming Movies' /> 
      <Upcomming items={item} title='Latest Movies' /> 
      <Trending />
      <Upcomming items={rec} title='Recommended Movies' />
    </>
  );
};

export default HomePage;