// pages/index.js
import Head from 'next/head';
import ImageGallery from '../components/ImageGallery';
import ImageViewer from '../components/ImageViewer';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseViewer = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* <Head>
        <title>360-degree Gallery</title>
      </Head> */}
      <ImageGallery onImageClick={handleImageClick} />
      {selectedImage && <ImageViewer imageUrl={selectedImage} onClose={handleCloseViewer} />}
    </div>
  );
};

export default Home;
