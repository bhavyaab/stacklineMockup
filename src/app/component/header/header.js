import React from "react";
import './header.scss';
import {ReactComponent as StacklinLogo} from '../../../data/stackline_logo.svg';

export const Header = () => {
    return (
        <div className="header">
            <span>
                <StacklinLogo className='logo' title="stackline logo" 
                              width='3em' />
            </span>
        </div>
    )
}