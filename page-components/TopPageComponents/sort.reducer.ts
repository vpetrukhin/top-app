import { SortEnum } from '../../components/Sort/Sort.props';
import { ProductModel } from '../../interfaces/product.interface';

export type sortActions = { type: SortEnum.Rating } | { type: SortEnum.Price };

export interface sortState {
  sort: SortEnum;
  products: ProductModel[];
};

export const sortReduser = (state: sortState, action: sortActions): sortState => {
  switch (action.type) {
    case (SortEnum.Rating): {
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? 1 : -1)
      }
    }
    case (SortEnum.Price): {
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => a.price > b.price ? -1 : 1)
      }
    }
  }
} 