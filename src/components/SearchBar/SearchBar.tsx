import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { FC, FormEvent } from "react";

interface Props {
  onSubmit: (searchRequest: string) => void;
}

const SearchBar: FC<Props> = ({ onSubmit }) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    const notify = () =>
      toast("Search field must be filled", {
        duration: 1500,
        style: {
          backgroundColor: "pink",
        },
      });
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem(
      "search"
    ) as HTMLInputElement;
    const searchRequest = input.value;
    if (searchRequest !== "") {
      onSubmit(searchRequest);
    } else {
      notify();
    }
    event.currentTarget.reset();
  }
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="search"
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
