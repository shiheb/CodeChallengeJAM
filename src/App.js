import React, { useState, useEffect} from 'react';
//import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Tracks from './components/Tracks';
import Pagination from './components/Pagination';

import './App.css';

const App = () => {

	const [tracks, setTracks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [tracksPerPage] = useState(3);

useEffect( () => {

const fetchTracks = async () => {
		setLoading(true);
		const res = await axios.get('trending.json');
		setTracks(res.data);
		setLoading(false);
	}

	fetchTracks();

}, []);

// Get the current tracks 

const indexOfLastTrack = currentPage * tracksPerPage;
const indexOfFirstTrack = indexOfLastTrack - tracksPerPage;
const currentTracks = tracks.slice(indexOfFirstTrack,indexOfLastTrack) ;

//change the page 
const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
			    <div className='container mt-5'>
			      <h1 className="text-primary mb-3"> JAM Platform</h1>
			     
					<Tracks 
					tracks={currentTracks} 
					loading={loading} 
										/>
					
					<Pagination 
					tracksPerPage={tracksPerPage} 
					totalTracks={tracks.length} 
					paginate={paginate}
					/>
					
			    </div>
  		);
 
};

export default App;
