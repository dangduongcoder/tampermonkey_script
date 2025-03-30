// ==UserScript==
// @name         PTIT Code Ghibli Theme
// @namespace    http://tampermonkey.net/
// @version      2025-03-30
// @description  Custom theme for PTIT Code platform
// @author       You
// @match        https://code.ptit.edu.vn/beta/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edu.vn
// @grant        GM_addStyle
// @grant        GM_addElement
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    const customCSS = `
        /* Thêm CSS của bạn ở đây */
        body {
            background-image: url(https://raw.githubusercontent.com/dangduongcoder/tampermonkey_script/refs/heads/main/assets/images/bg-ghibli.webp)!important;
            background-position: center top;
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            min-height: 100vh;
        }

        .problem-container, .collapse-options, .search-container, .card-content, .ant-card-bordered {
            background: rgba(255, 255, 255, 0.1) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
        }

        .collapse-options {
            border-radius: 10px;
        }

        .ant-btn-default {
            background-color: #C4A86E !important;
            color: #fff !important;
        }
        
        .ant-collapse-header {
            color: #5C4A34 !important;
        }

        .header {
            background: rgba(255, 255, 255, 0.1) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
        }

        .ant-pagination .ant-pagination-item-active, .ant-select-selector {
            background-color: #C4A86E !important;
            border-color: #a7453c !important;
        }

        
        

        .ant-input {
            background-color: transparent !important;
        }

        .search-container {
            border: none !important;
        }

        .ant-table {
            background: none !important;
            color: #5C4A34 !important;
            font-weight: 600 !important;
        }

        .body-header h2 {
            color: #5C4A34 !important;
        }

        .logo {
            color: #5C4A34 !important;
        }

        .nav-item {
            color: #5C4A34 !important;
        }

        .nav-item:hover {
            color: #5C4A34 !important;
        }

        .navigation {
            // display: none !important;
        }

        .ant-collapse-content {
            background: none !important;
        }

        .ant-table-thead>tr>th {
            background: none !important;
        }

        .ant-collapse {
            background: none !important;
        }

        .ant-table-content {
            background: rgba(255, 255, 255, 0.1) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
            border-radius: 16px;
        }

        .ant-checkbox-wrapper {
            color: #5C4A34 !important;
        }

        .ant-table-cell>a {
            color: #5C4A34 !important;
            font-weight: 600 !important;
        }

        .ant-table-cell-row-hover {
            background: rgba(255, 255, 255, 0.1) !important;
        }

        .ant-table-thead>tr>th {
            color: #5C4A34 !important;
        }

        .ant-collapse-item {
            border-bottom: 1px solid #5C4A34 !important;
        }

        .ant-btn-primary {
            background-color: #6B9362 !important;
        }

        .ant-checkbox-inner {
            background-color: #6B9362 !important;
            border-color: #6B9362 !important;
        }
        
        .group-icon {
            color: #5C4A34 !important;
        }
    `;

    GM_addStyle(customCSS);

    function processElements() {
        const elements = document.getElementsByClassName('nav-item');
        for (let element of elements) {
            if (element.hasAttribute('style')) {
                element.removeAttribute('style');
            }
        }

        const collapseOptions = document.getElementsByClassName('collapse-options');
        for (let element of collapseOptions) {
            if (element.hasAttribute('style')) {
                element.removeAttribute('style');
            }
        }

        const antCard = document.getElementsByClassName('ant-card');
        for (let element of antCard) {
            if (element.hasAttribute('style')) {
                element.removeAttribute('style');
            }
        }

        const xpath = "//*[@id='app']/div/div/div/div[1]/div/div[2]/div[3]/div/div/div/div/div/div/table/tbody/tr[1]/td[2]/a";
        const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        const element = result.singleNodeValue;
        if (element && element.hasAttribute('style')) {
            element.removeAttribute('style');
            console.log("Đã xóa thuộc tính style của element theo XPath");
        }
    }

    function init() {
        const observer = new MutationObserver((mutations) => {
            processElements();
        });

        const config = {
            childList: true, 
            subtree: true,   
            attributes: true 
        };

        observer.observe(document.body, config);

        processElements();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();