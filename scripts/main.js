/*
 * Progressive enhancement only. Every piece of content on this page is
 * readable, navigable and correctly themed with this file absent.
 */
(function () {
    'use strict';

    var root = document.documentElement;

    /* ---- Theme toggle --------------------------------------------------
     * The base theme comes from prefers-color-scheme in CSS. An explicit
     * choice is stored on the root element as data-theme and persisted, and
     * is applied by the inline script in the head to avoid a flash.
     */
    var toggle = document.getElementById('theme-toggle');

    if (toggle) {
        var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

        var currentTheme = function () {
            return root.dataset.theme || (darkQuery.matches ? 'dark' : 'light');
        };

        var syncButton = function () {
            toggle.setAttribute('aria-pressed', String(currentTheme() === 'dark'));
        };

        toggle.addEventListener('click', function () {
            var next = currentTheme() === 'dark' ? 'light' : 'dark';
            root.dataset.theme = next;
            try {
                localStorage.setItem('theme', next);
            } catch (e) {
                /* Storage blocked. The choice still applies for this page view. */
            }
            syncButton();
        });

        /* Follow the system while no explicit choice has been made. */
        darkQuery.addEventListener('change', function () {
            if (!root.dataset.theme) syncButton();
        });

        syncButton();
    }

    /* ---- Reveal on scroll ----------------------------------------------
     * The hiding is gated on .js-reveal, set in the head before first paint.
     * Anything that stops us observing drops the gate instead of leaving
     * elements stranded at opacity 0.
     */
    var standDown = function () {
        root.classList.remove('js-reveal');
    };

    var targets = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        !targets.length) {
        standDown();
        return;
    }

    /* Tells the head's load handler that the reveal is being driven here. */
    root.dataset.reveal = 'on';

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    targets.forEach(function (el) {
        observer.observe(el);
    });
})();
