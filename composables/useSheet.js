// composables/useSheet.js

let sheetRange = "Productos!A1:R10";

const getVars = () => {
    const SPREAD_SHEET_ID = useRuntimeConfig().public.SPREAD_SHEET_ID;
    const GOOGLE_API_KEY = useRuntimeConfig().public.GOOGLE_API_KEY;

    return { SPREAD_SHEET_ID, GOOGLE_API_KEY }
}

export async function allRows() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${sheetRange}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function singleRow(row) {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();

    const rowRange = `Productos!A${row}:R${row}`

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${rowRange}?key=${GOOGLE_API_KEY}`
    console.log(url);
    return await useFetch(url)
}
