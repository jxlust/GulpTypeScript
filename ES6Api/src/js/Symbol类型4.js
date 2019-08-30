iframe = document.createElement('iframe');
iframe.src = String(window.location);
document.body.appendChild(iframe);

iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')
// true
// 上面代码中，iframe 窗口生成的 Symbol 值，可以在主页面得到。