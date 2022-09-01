import reducer from './reducer';
import {configureStore} from "@reduxjs/toolkit";

// @ts-ignore
export default configureStore({ reducer: reducer });
