import { getCars } from "./active";
import { patchCar } from "./exit";
import { getCheck } from "./check";
import { getReport } from "./report";

document.addEventListener('DOMContentLoaded', async () => {
    
    getCars();
    await getReport();
    getCheck();
});