import { DAT_GHE, HUY_GHE } from "../types/BaiTapBookingTypes"



export const datGheAction = (ghe) => {
    return {
        type: DAT_GHE,
        payload: ghe
    }
}

export const huyGheAction = (soGhe) => {
    return {
        type: HUY_GHE,
        payload: soGhe
    }
}