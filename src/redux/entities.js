import { combineReducers } from '@reduxjs/toolkit';
import AdminSlice from "./admin/admin"

export default combineReducers({
  admin: AdminSlice,
});