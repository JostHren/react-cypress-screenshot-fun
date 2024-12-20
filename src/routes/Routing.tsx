import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import LatestSightings from '@/pages/LatestSightings/LatestSightings';
import Favorites from '@/pages/Favourites/Favourites';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/latest" element={<LatestSightings />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default Routing;
