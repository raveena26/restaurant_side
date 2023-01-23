import { configureStore } from "@reduxjs/toolkit";
import  errorSlice  from "./error";


const store= configureStore({ 
    reducer:{
        errorValues:errorSlice
    }
    
    });


export default store;