import { SortEnum } from '../../components/Sort/Sort.props';
import { ProductModel } from '../../interfaces/product.interface';

export type SortActions =
  | { type: SortEnum.Price; products?: ProductModel[] }
  | { type: SortEnum.Rating; products?: ProductModel[] };

export interface SortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}

export const sortReducer = (
  state: SortReducerState,
  action: SortActions
): SortReducerState => {
  const newProducts = action.products && action.products.length ? action.products : state.products;
  switch (action.type) {
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: newProducts.sort((a, b) => (a.price > b.price ? -1 : 1)),
      };
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: newProducts.sort((a, b) =>
          a.initialRating > b.initialRating ? -1 : 1
        ),
      };
    default:
      throw new Error('Неверный тип сортировки');
  }
};
