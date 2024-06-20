import { FC } from "react";
interface Props {
  url: string;
  description: string;
  onClick: () => void;
}

const ImageCard: FC<Props> = ({ url, description, onClick }) => {
  return (
    <div>
      <img onClick={onClick} src={url} alt={description} />
    </div>
  );
};
export default ImageCard;
