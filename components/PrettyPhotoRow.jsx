const PrettyPhotoRow = ({ images, headline }) => {
  return (
    <div className="grid grid-cols-3 relative">
      {images.map((image, index) => (
        <div key={index} className="col-md-3 prettyphotorow">
          <img src={image} alt={`prettyphoto ${index}`} className="img-fluid" />
        </div>
      ))}
      <div className="gradient-overlay"></div> {/* Gradient overlay */}
      <div className="overlay-headline text-8xl">{headline}</div>
    </div>
  );
};

export default PrettyPhotoRow;
