// ==UserScript==
// @name         Media mode for Twitter home
// @namespace    https://github.com/UtopicPanther/userscript-twitter-home-media
// @supportURL   https://github.com/UtopicPanther/userscript-twitter-home-media/issues
// @version      0.2
// @description  Remove text-only tweet on the flow of my Twitter home
// @author       UtopicPanther
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let intersectionObserver;

    const removeTweet = article => {
        article.classList.add('mmfth_hide');

        const div = article.parentElement.parentElement;

        //console.log("hide%d %O\n\n%s",Math.random(), article, "");
        //div.style.background = "red";
        div.style.display = "none";
    }

    const isTweetOnlyText = i => {
        let haveImages = Array.from(i.querySelectorAll('img')).some(img => {
            if (!img.src.match(/^[a-z]*:\/\/[^\/]*\/profile_images/) &&
                !img.src.match(/^[a-z]*:\/\/[^\/]*\/emoji/)) {
                return true;
            }
        });

        if (!haveImages)
            haveImages = (i.querySelector('div[data-testid=tweetPhoto]') != null);

        if (!haveImages) {
             haveImages = Array.from(i.querySelectorAll('a')).some(a => {
                 if (a.getAttribute('href').match(/^\/[^\/]*\/status\/[0-9]*\/photo\//)) {
                     return true;
                 }
             });
        }

        return (!haveImages && i.querySelectorAll('video').length == 0);
    }

    const findTweetsForRemove = () => {
        document.querySelectorAll('article:not(.mmfth_hide)').forEach(i => {
            if (isTweetOnlyText(i)) {
                //console.log("add observ %O", i);
                //intersectionObserver.observe(i);
                removeTweet(i)
            }
        });
    }

    setTimeout(() => {
        alert("Media mode for Twitter home will be actived. After your flow loaded, click Yes.");

        const targetNode = document.querySelector('article').parentElement.parentElement.parentElement.parentElement;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }
        intersectionObserver = new IntersectionObserver((es, o) => {
            es.forEach(i => {
                if (isTweetOnlyText(i.target))
                    removeTweet(i.target)
                o.unobserve(i.target);
            });
        }, options);

        findTweetsForRemove();

        const config = { childList: true, subtree: true };
        const observer = new MutationObserver((mutationsList, observer) => {
            findTweetsForRemove();
        });
        observer.observe(targetNode, config);
    }, 6000);
})();
