import { configureStore } from "@reduxjs/toolkit";

import TemplateSlice from './Slices/TemplateSelectionSlice';

const Store = configureStore({
    reducer:{
        temps:TemplateSlice,
    }
})

export default Store