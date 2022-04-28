import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DrawChart } from "../drawChart/drawChart";
import { InfoSection } from "../infoSection/infoSection";
import { TableMaker } from '../tableMaker/tableMaker';

import {  getMockData, isFetching } from '../../../store/stacklineSlice';

import './landing.scss';
export const Landing = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMockData());
    }, [dispatch, getMockData]);

    var loading = useSelector(isFetching);
    return (
        <div className="landing">
            {!loading && (<div className="leftSection">
                            <InfoSection></InfoSection>
                        </div>)}
            {!loading && (<div className="dataSection">
                            <DrawChart></DrawChart>
                            <TableMaker></TableMaker>
                        </div>)}
            {loading && <div className="loading"></div>}
        </div>
    )
}