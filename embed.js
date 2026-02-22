/**
 * Flowcar Chat Widget Embed Script
 *
 * Usage: Add this script to your website:
 * <script src="https://YOUR_DOMAIN/embed.js"></script>
 *
 * Or copy the code below directly into your HTML before </body>:
 *
 * <script>
 * (function() {
 *   var iframe = document.createElement('iframe');
 *   iframe.src = 'https://YOUR_DOMAIN/index.html';
 *   iframe.style.cssText = 'position:fixed;bottom:0;right:0;width:100px;height:100px;border:none;z-index:999999;background:transparent;';
 *   iframe.setAttribute('allowtransparency', 'true');
 *   document.body.appendChild(iframe);
 *
 *   window.addEventListener('message', function(e) {
 *     if (e.data && e.data.type === 'flowcar-chat-resize') {
 *       iframe.style.width = e.data.width + 'px';
 *       iframe.style.height = e.data.height + 'px';
 *     }
 *   });
 * })();
 * </script>
 *
 * Dimensions:
 * - Closed: 100x100px (only the chat button)
 * - Open: 440x650px (chat window + button)
 */

(function() {
    // Configuration - Change this to your widget URL
    var WIDGET_URL = window.FLOWCAR_CHAT_URL || 'https://chatbot-widget-9yaj.vercel.app/index.html';

    // Dimensions: closed = 100x100 (button only), open = 440x650 (chat + button)
    var CLOSED_SIZE = { width: 100, height: 100 };

    // Create iframe
    var iframe = document.createElement('iframe');
    iframe.id = 'flowcar-chat-widget';
    iframe.src = WIDGET_URL;
    iframe.style.cssText = [
        'position: fixed',
        'bottom: 0',
        'right: 0',
        'width: ' + CLOSED_SIZE.width + 'px',
        'height: ' + CLOSED_SIZE.height + 'px',
        'border: none',
        'background: transparent',
        'z-index: 2147483647',
        'transition: width 0.3s ease, height 0.3s ease',
        'pointer-events: auto'
    ].join(';');
    iframe.setAttribute('allowtransparency', 'true');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('scrolling', 'no');

    // Listen for resize messages from the widget
    window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'flowcar-chat-resize') {
            iframe.style.width = event.data.width + 'px';
            iframe.style.height = event.data.height + 'px';
        }
    });

    // Add iframe to page when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.appendChild(iframe);
        });
    } else {
        document.body.appendChild(iframe);
    }
})();
