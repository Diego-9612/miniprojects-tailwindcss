import EmailSubscribe  from "./email-subscribe/email-subscribe";
import TarjetasPrecios from "./Tarjetas-Precios/tarjetas-precios";
import ProductModal from "./product-modal/productModal";
import ImageGallery from "./image-gallery/ImageGallery";
import LoginModal from "./login-modal/loginModal";

function App() {
  return (
    <>
      <EmailSubscribe/>
      <TarjetasPrecios/>
      <ProductModal/>
      <ImageGallery/>
      <LoginModal/>
    </>
  );
}

export default App;
