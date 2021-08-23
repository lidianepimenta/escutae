import axios from "axios";
import { useEffect, useRef, useState } from "react";
import deezerImg from '../../assets/deezer.svg'
import { FaPlay } from 'react-icons/fa'
import { FaPause } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import { convertDuration } from '../../utils/convertDuration';
import { Container, Content } from "./styles";


interface Track {
  album: {
    cover: string;
    title: string;
  }
  artist: {
    name: string;
  }  
  duration: number;
  id: number;
  link: string;
  position: number;
  preview: string;
  title: string;
}


export function Main() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTrackLiked, setIsTrackLiked] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

    const getTracks = () => {
      axios.get('/chart/0/tracks')
      .then((response) => {
        const listOfTracks = response.data.data;
        setTracks(listOfTracks);
      });  
    };

    useEffect(() => getTracks(), []);

     useEffect(() => {
       if (!audioRef.current) {
         return;
       }
       if (isPlaying) {
         audioRef.current.play()
       } else {
         audioRef.current.pause();
       }
     }, [isPlaying])       
    
     function togglePlayPause() {
       setIsPlaying(!isPlaying);
     }

    function setPlayingState(state: boolean) {
      setIsPlaying(state);
    }

    function toggleLikeTrack() {
      setIsTrackLiked(!isTrackLiked);
    }

    
  return (
    <Container>
      <h1>As mais ouvidas na Deezer</h1>
        <Content>
          <table cellSpacing={0}>
            <thead className="tableHeader">
              <tr>
                <th className="headerTitle"></th>
                <th className="headerTitle">rank</th>
                <th className="headerTitle">álbum</th>
                <th className="headerTitle">artista</th>  
                <th className="headerTitle">faixa</th>
                <th className="headerTitle">duração</th>
                <th className="headerTitle"></th>
                <th className="headerTitle"></th>
              </tr>
            </thead>
            <tbody className="tableContent"> 
              {tracks.map((track, index) => (
                <tr key={track.id}>
                  <td>
                  <button onClick={togglePlayPause} title="Prévia">
                    <audio 
                      src={track.preview}
                      ref={audioRef}
                      onPlay={() => setPlayingState(true)}
                      onPause={() => setPlayingState(false)}
                       />
                      { isPlaying ? <FaPause /> : <FaPlay /> }
                  </button>                 
                  </td>
                  <td></td>
                  <td>
                    <img 
                      src={track.album.cover} 
                      alt={track.album.title} 
                      className="cover"
                      title={track.album.title}
                    />
                  </td>
                  <td className="artistName">
                    {track.artist.name}
                  </td>
                  <td className="trackTitle">
                    {track.title}
                  </td>
                  <td className="duration">
                    {convertDuration(Number(track.duration))}
                  </td>
                  <td>
                    <button type="button" onClick={toggleLikeTrack} title="Curtir música">
                      { isTrackLiked ? <FaHeart /> : <FaRegHeart /> }
                    </button>
                  </td>
                  <td>
                    <button type="button">
                      <a href={track.link}>
                        <img 
                          src={deezerImg} 
                          alt="Ouvir música na Deezer" 
                          title="Ouvir música na Deezer"
                        />
                      </a>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> 
        </Content>
    </Container>
  );
}