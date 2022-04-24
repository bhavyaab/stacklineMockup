import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DrawChart } from "../drawChart/drawChart";
import { InfoSection } from "../infoSection/infoSection";
import { TableMaker } from '../tableMaker/tableMaker';

import {  getMockData } from '../../../store/stacklineSlice';

import './landing.scss';
export const Landing = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMockData());
    }, [dispatch]);
    return (
        <div className="landing">
            <div className="leftSection">
                <InfoSection></InfoSection>
            </div>
            <div className="dataSection">
                <DrawChart></DrawChart>
                <TableMaker></TableMaker>
            </div>
        </div>
    )
}