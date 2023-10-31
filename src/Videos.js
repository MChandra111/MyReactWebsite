import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
    const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const API_KEY = 'AIzaSyDuUQfYfJveVcR4kUoNCW_i6L3T922tKKE';
      const CHANNEL_ID = 'UCZMi_3RkLX0EcUdSbLsFuZg';
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=12`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'auto',
        height: '80vh',
        paddingLeft: '12px',
      }}
      className='container-with-scrollbar'
    >
      {videos.map((video, index) => (
        <div key={video.id.videoId} style={{ width: '23%', padding: '10px', marginBottom: index > 7 ? '50px' : '0', maxHeight: '300px', overflow: 'hidden', display: 'flex', flexDirection: 'column',}}>
          <iframe
            title={video.snippet.title}
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            allowFullScreen
            style={{ marginBottom: '10px' }}
          ></iframe>
          <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', color: 'white', overflow: 'hidden', whiteSpace: 'nowrap',}}>{video.snippet.title}</p>
        </div>
      ))}
    </div>
  );
};

export default YourComponent;