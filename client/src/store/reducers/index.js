import { combineReducers } from "redux";
import users from './users';
import menus from './menus';
import converter from './converter';
import products from './products';
import HomeFilters from './HomeFilters';

export default combineReducers({
  users,
  menus,
  converter,
  products,
  HomeFilters,
})
