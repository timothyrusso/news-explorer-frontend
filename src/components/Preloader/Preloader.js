import './Preloader.css';

const Preloader = () => {
  return (
    <div className='preloader'>
      <i class="circle-preloader"></i>
      <p className='preloader__text'>Searching for news...</p>
    </div>
  );
}

export default Preloader;
