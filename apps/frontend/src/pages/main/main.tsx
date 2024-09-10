import { Guitar } from '@guitar-shop-2024/types';
import { Breadcrumbs, Card, Filter } from '../../components';
import { useAppSelector } from '../../hooks';


export function Main(): JSX.Element {
  const shopItems = useAppSelector((state: any) => state.shopItems);
  console.log('shopItems', shopItems);
  return (
    <main className="page-content">
      <div className="container">
        <h1 className="page-content__title title title--bigger">
          Каталог гитар
        </h1>
        <Breadcrumbs />
        <div className="catalog">
          <Filter />
          <div className="catalog-sort">
            <h2 className="catalog-sort__title">Сортировать:</h2>
            <div className="catalog-sort__type">
              <button
                className="catalog-sort__type-button"
                aria-label="по цене"
              >
                по цене
              </button>
              <button
                className="catalog-sort__type-button"
                aria-label="по популярности"
              >
                по популярности
              </button>
            </div>
            <div className="catalog-sort__order">
              <button
                className="catalog-sort__order-button catalog-sort__order-button--up"
                aria-label="По возрастанию"
              ></button>
              <button
                className="catalog-sort__order-button catalog-sort__order-button--down"
                aria-label="По убыванию"
              ></button>
            </div>
          </div>
          <div className="catalog-cards">
            <ul className="catalog-cards__list">
              {shopItems.map((item: Guitar) => <Card
                key={item.id}
                item={item} />)}
            </ul>
          </div>

          <div className="pagination page-content__pagination">
            <ul className="pagination__list">
              <li className="pagination__page pagination__page--active">
                <a
                  className="link pagination__page-link"
                  href="1">
                  1
                </a>
              </li>
              <li className="pagination__page">
                <a
                  className="link pagination__page-link"
                  href="2">
                  2
                </a>
              </li>
              <li className="pagination__page">
                <a
                  className="link pagination__page-link"
                  href="3">
                  3
                </a>
              </li>
              <li
                className="pagination__page pagination__page--next"
                id="next">
                <a
                  className="link pagination__page-link"
                  href="2">
                  Далее
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

