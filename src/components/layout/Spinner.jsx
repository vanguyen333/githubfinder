import SpinnerGif from './assets/spinner.gif';

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        className="w-180 text-center mx-auto"
        src={SpinnerGif}
        alt="loading"
      />
    </div>
  );
};

export default Spinner;
