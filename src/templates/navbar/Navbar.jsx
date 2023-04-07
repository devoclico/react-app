import React from "react";
import { Link } from "react-router-dom";
import '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/group-ui/assets/themes/vwag/vwag.css';
import { applyPolyfills, defineCustomElements } from '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/loader';

applyPolyfills().then(() => {
    defineCustomElements();
});

function Navbar() {
    return (

        <div className="top-navigation-live-demo container-border">
            <groupui-header>
                <groupui-headline heading="h2" style={{ color: 'var(--groupui-vwag-color-white)' }}>React Template</groupui-headline>
            </groupui-header>

            <groupui-top-navigation size="l">
                
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <groupui-top-navigation-item >Account Template</groupui-top-navigation-item>
                </Link>

                <Link to="/service" style={{ textDecoration: 'none' }}>
                    <groupui-top-navigation-item >Service Template</groupui-top-navigation-item>
                </Link>

                <Link to="/change" style={{ textDecoration: 'none' }}>
                    <groupui-top-navigation-item >Oil Change Template</groupui-top-navigation-item>
                </Link>

                <Link to="/data" style={{ textDecoration: 'none' }}>
                    <groupui-top-navigation-item >Display Json-Data</groupui-top-navigation-item>
                </Link>

                <Link to="/table" style={{ textDecoration: 'none' }}>
                    <groupui-top-navigation-item >Display Json-Table</groupui-top-navigation-item>
                </Link>

                <Link to="/pagination" style={{ textDecoration: 'none' }}>
                    <groupui-top-navigation-item >Pagination</groupui-top-navigation-item>
                </Link>

            </groupui-top-navigation>
        </div>

    );
}

export default Navbar;