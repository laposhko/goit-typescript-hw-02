import { FC } from "react";
interface Props {
  onClick: () => void;
}
const LoadMoreBtn: FC<Props> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
