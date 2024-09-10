import { Guitar } from '@guitar-shop-2024/types';
import { Link } from 'react-router-dom';
import { AppRoute, BACKEND_IMAGES_URL } from '../../../constants';

import { useAppSelector } from '../../hooks';

type CardProps = {
  item: Guitar
}

export function Card({ item }: CardProps): JSX.Element {
  const {authStatus} = useAppSelector((state) => state);

  const {
    id,
    name,
    photo,
    price,
    createdAt
  } = item;

  const photoUrl = photo ?  `${BACKEND_IMAGES_URL}/${photo}` : "img/content/catalog-product-1.png";

  const deleteButtonHandler = () => {
    console.log('Delete an item');
  }


  return (
    <li className="catalog-item">
      <div className="catalog-item__data">
        <img
          src={photoUrl}
          width="36"
          height="93"
          alt={`${name}`}
        />
        <div className="catalog-item__data-wrapper">
          <Link
            className="link"
            to={AppRoute.Item.replace(':id', String(id))}>
            <p className="catalog-item__data-title">{name}</p>
        </Link>
          <br />
          <p className="catalog-item__data-date">Дата добавления {createdAt ? createdAt.toLocaleString(
            'ru-RU',
            {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }
          ) : ''}</p>
          <p className="catalog-item__data-price">{price} ₽</p>
        </div>
      </div>
      <div className="catalog-item__buttons"><a className="button button--small button--black-border"
                                                href="edit-item.html"
                                                aria-label="Редактировать товар">Редактировать</a>
        <button
          onClick={deleteButtonHandler}
          className="button button--small button--black-border"
          aria-label="Удалить товар">
          Удалить
        </button>
      </div>
    </li>
  );
}

