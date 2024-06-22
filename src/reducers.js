import { createSlice } from "@reduxjs/toolkit"

const estadoIni = {
    episodios: [],
    info: [],
    details: {}
}

const reducers = createSlice({
    name: 'holaAPP',
    initialState: estadoIni,
    reducers: {

        setEpisodios: (state, action) => {
            console.log(action.payload);
            state.episodios = action.payload;
        },
        setInfo: (state, action) => {
            console.log(action.payload);
            state.info = action.payload;
        },
        setDetails: (state, action) => { state.details = action.payload }
    }
})

export const { setEpisodios, setDetails, setInfo } = reducers.actions;
export default reducers.reducer;