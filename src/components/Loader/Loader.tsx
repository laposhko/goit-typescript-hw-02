import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";
import { FC } from "react";
interface Props {
  isLoading: boolean;
}
const Loader: FC<Props> = ({ isLoading }) => {
  return (
    <div className={css.loader}>
      <Circles
        height="80"
        width="80"
        color="red"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={isLoading}
      />
    </div>
  );
};

export default Loader;
