import {all, fork} from "redux-saga/effects";
import users from './users';
import menus from './menus';
import converter from './converter';
import products from './products';
import HomeFilters from './HomeFilters';

export default function* watchers() {
    yield all([
        users,
        menus,
        converter,
        products,
        HomeFilters,
    ].map(fork))
}
