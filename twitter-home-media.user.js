// ==UserScript==
// @name         Media mode for Twitter home
// @namespace    https://github.com/UtopicPanther/userscript-twitter-home-media
// @supportURL   https://github.com/UtopicPanther/userscript-twitter-home-media/issues
// @version      0.1
// @description  Remove text-only tweet on the flow of my Twitter home
// @author       UtopicPanther
// @match        https://twitter.com/home
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const removeTweet = article => {
        const div = article.parentElement.parentElement;

        if (div.offsetTop >= window.pageYOffset)
            div.style.display = "none";
    }

    const findTweetsForRemove = () => {
        document.querySelectorAll('article').forEach(i => {
            const media = Array.from(i.querySelectorAll('img')).some(img => {
                if (!img.src.match(/^[a-z]*:\/\/[^\/]*\/profile_images/) &&
                    !img.src.match(/^[a-z]*:\/\/[^\/]*\/emoji/)) {
                    return true;
                }
            });

            if (!media && i.querySelectorAll('video').length == 0)
                removeTweet(i);
        });
    }

    setTimeout(() => {
        alert("Media mode for Twitter home will be actived. After your flow loaded, click Yes.");

        const targetNode = document.querySelector('article').parentElement.parentElement.parentElement.parentElement;
        const config = { childList: true, subtree: true };

        const observer = new MutationObserver((mutationsList, observer) => {
            findTweetsForRemove();
        });
        observer.observe(targetNode, config);
    }, 6000);
})();
