// ==UserScript==
// @name         PTIT Code Ghibli Theme
// @namespace    http://tampermonkey.net/
// @version      2025-03-30
// @description  Custom theme for PTIT Code platform
// @author       You
// @match        https://code.ptit.edu.vn/beta/problems
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edu.vn
// @grant        GM_addStyle
// @grant        GM_addElement
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    // Thêm CSS vào trang web
    const customCSS = `
        /* Thêm CSS của bạn ở đây */
        body {
            background-color: #f0f0f0;
            font-family: 'Arial', sans-serif;
        }
        
        /* Ví dụ: Tùy chỉnh màu sắc cho các phần tử */
        .problem-title {
            color: #2c3e50;
        }
        
        .problem-content {
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
    `;

    // Inject CSS vào trang web
    GM_addStyle(customCSS);

    // Hàm chạy sau khi trang web đã load xong
    function init() {
        // Thêm Tailwind CSS CDN
        const tailwindLink = document.createElement('link');
        tailwindLink.rel = 'stylesheet';
        tailwindLink.href = 'https://cdn.tailwindcss.com';
        document.head.appendChild(tailwindLink);

        // Thêm cấu hình Tailwind (tùy chọn)
        const tailwindConfig = document.createElement('script');
        tailwindConfig.textContent = `
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            primary: '#3498db',
                            secondary: '#2ecc71'
                        }
                    }
                }
            }
        `;
        document.head.appendChild(tailwindConfig);


        

    }

    // Chờ cho đến khi trang web load xong
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();