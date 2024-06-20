import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";
import { useEffect, useState, FC } from "react";
import { Response, Image } from "../../types";
import { fetchImages } from "../../images-api";
import css from "./App.module.css";

const App: FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [request, setRequest] = useState<string>("");
  const [modalImg, setModalImg] = useState<Image>();
  const [showBtn, setShowBtn] = useState<boolean | 0>(false);
  useEffect(() => {
    if (!request) {
      return;
    }
    const fetch = async () => {
      try {
        setError(false);
        setLoader(true);
        setShowBtn(false);
        const response: Response = await fetchImages(request, page);
        const totalPages: number = response.data.total_pages;
        setImages((prevData) => [...prevData, ...response.data.results]);
        setShowBtn(totalPages && totalPages !== page && page < 200);
      } catch (err) {
        setError(true);
        setShowBtn(false);
      } finally {
        setLoader(false);
      }
    };

    fetch();
  }, [request, page]);
  function handleSubmit(searchRequest: string): void {
    setImages([]);
    setPage(1);
    setRequest(searchRequest);
  }
  function loadMore(): void {
    setPage(page + 1);
  }

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }
  return (
    <div className={css.app}>
      <ImageModal onClose={closeModal} state={modalIsOpen} img={modalImg} />
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery
          openModal={openModal}
          items={images}
          changeImg={setModalImg}
        />
      )}
      <Toaster />
      {loader && <Loader isLoading={loader} />}
      {error && <ErrorMessage />}
      {showBtn && <LoadMoreBtn onClick={loadMore} />}
    </div>
  );
};

export default App;
