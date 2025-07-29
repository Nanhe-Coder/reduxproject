import { BUY_BOOK,SELL_BOOK } from "./Actiontypes";


export const buybook=()=>{
       return {
        type:BUY_BOOK
       }
}

export const sellbook=()=>{
    return {
        type:SELL_BOOK
    }
}