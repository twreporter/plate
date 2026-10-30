(function () {
  'use strict';

  // The existing Keystone item template loads /keystone-plugin.bundle.js.
  // Keep the online-users implementation in the plugin service.
  if (document.querySelector('[data-online-users-loader]')) return;
  var script = document.createElement('script');
  script.setAttribute('data-online-users-loader', '');
  script.src = '/_online-users/client.js';
  script.async = true;
  script.onload = function () {
    if (window.OnlineUsers && !document.querySelector('[data-online-users-widget]')) {
      window.OnlineUsers.mount();
    }
  };
  script.onerror = function () {
    console.warn('在線名單載入失敗，不影響編輯與存檔。');
  };
  document.head.appendChild(script);
})();
