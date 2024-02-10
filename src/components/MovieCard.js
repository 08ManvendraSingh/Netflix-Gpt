import {IMG_CDN_URL} from '../utils/constants';

const MovieCard = ({posterpath}) => {

  if(!posterpath)return;
  return (
    <div className='w-36 md:w-48 pr-4'>
        <img src={IMG_CDN_URL+posterpath} alt="" />
    </div>
  )
}

export default MovieCard;