import { GenresObj, Genre } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeGenre, updateListOfFilms } from '../../store/actions';

type ListOfGenresProps = {
  currentGenre: Genre
}

function ListOfGenres({currentGenre}: ListOfGenresProps) {
  const dispatch = useAppDispatch();
  const namesOfGenres = Object.keys(GenresObj);
  const genres = Object.values(GenresObj);
  return (
    <ul className="catalog__genres-list">
      {
        namesOfGenres.map((name, index) => (
          <li
            key={`${name}`}
            className={`catalog__genres-item ${currentGenre === genres[index] && 'catalog__genres-item--active'}`}
          >
            <div
              className="catalog__genres-link"
              style={{cursor: 'pointer'}}
              onClick={() => {
                dispatch(changeGenre(genres[index]));
                dispatch(updateListOfFilms());
              }}
            >
              {name}
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default ListOfGenres;