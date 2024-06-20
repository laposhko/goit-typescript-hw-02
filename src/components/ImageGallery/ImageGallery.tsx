import { Image } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { FC, Dispatch } from "react";
interface Props {
  items: Image[];
  openModal: () => void;
  changeImg: Dispatch<React.SetStateAction<Image | undefined>>;
}
const ImageGallery: FC<Props> = ({ items, openModal, changeImg }) => {
  return (
    <ul className={css.gallery}>
      {items.map(({ id, urls, alt_description }) => (
        <li
          className={css.card}
          key={id}
          onClick={() => {
            changeImg({ id, urls, alt_description });
          }}
        >
          <ImageCard
            url={urls.small}
            onClick={openModal}
            description={alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
