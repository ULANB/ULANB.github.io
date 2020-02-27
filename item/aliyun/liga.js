/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'camera': '&#xe90f;',
            'photo': '&#xe90f;',
            'music': '&#xe911;',
            'song': '&#xe911;',
            'play': '&#xe912;',
            'video': '&#xe912;',
            'connection': '&#xe91b;',
            'wifi': '&#xe91b;',
            'mic': '&#xe91e;',
            'microphone': '&#xe91e;',
            'location2': '&#xe948;',
            'map-marker2': '&#xe948;',
            'compass': '&#xe949;',
            'direction': '&#xe949;',
            'compass2': '&#xe94a;',
            'direction2': '&#xe94a;',
            'keyboard': '&#xe955;',
            'typing': '&#xe955;',
            'bubbles': '&#xe96c;',
            'comments': '&#xe96c;',
            'bin': '&#xe9ac;',
            'trashcan': '&#xe9ac;',
            'list2': '&#xe9bb;',
            'todo2': '&#xe9bb;',
            'download3': '&#xe9c7;',
            'save5': '&#xe9c7;',
            'volume-medium': '&#xea27;',
            'volume2': '&#xea27;',
            'ctrl': '&#xea50;',
            'control': '&#xea50;',
            'page-break': '&#xea68;',
            'wysiwyg10': '&#xea68;',
            'android': '&#xeac0;',
            'brand55': '&#xeac0;',
            'search': '&#xe986;',
            'magnifier': '&#xe986;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
