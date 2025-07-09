import { Route, Routes } from "react-router-dom";
import {  publickRoutes } from "../Routes.js";
import { observer } from "mobx-react-lite";
// @ts-ignore
import { Gallery } from "../pages/Printset.tsx";

const Printset = observer(() => {
    return (
            <Gallery></Gallery>

    );
});

export default Printset;