// Shared footer markup, injected into <footer id="site-footer"> on every page.
(function () {
  var html = ''
    + '<div class="wrap">'
    + '  <div class="footer-grid">'
    + '    <div>'
    + '      <div class="footer-brand"><img src="assets/images/logo.png" alt="TOTA logo"><span>TOTA</span></div>'
    + '      <p class="footer-tagline"><span class="zh">香港智造，品质为本。专注氨糖软骨素与维生素软糖两大核心品类。</span><span class="en">Hong Kong made, quality first — focused on joint care and daily vitamins.</span></p>'
    + '    </div>'
    + '    <div class="footer-col">'
    + '      <h5><span class="zh">导航</span><span class="en">Navigation</span></h5>'
    + '      <a href="index.html"><span class="zh">首页</span><span class="en">Home</span></a>'
    + '      <a href="about.html"><span class="zh">关于我们</span><span class="en">About</span></a>'
    + '      <a href="products.html"><span class="zh">产品</span><span class="en">Products</span></a>'
    + '      <a href="contact.html"><span class="zh">联系我们</span><span class="en">Contact</span></a>'
    + '    </div>'
    + '    <div class="footer-col">'
    + '      <h5><span class="zh">联系方式</span><span class="en">Contact</span></h5>'
    + '      <a href="mailto:xinmai11@outlook.com">xinmai11@outlook.com</a>'
    + '      <p><span class="zh">香港</span><span class="en">Hong Kong</span></p>'
    + '    </div>'
    + '  </div>'
    + '  <div class="footer-bottom">'
    + '    <span>&copy; 2026 TOTA. <span class="zh">版权所有。</span><span class="en">All rights reserved.</span></span>'
    + '    <span><span class="zh">本网站仅用于品牌与产品信息介绍</span><span class="en">This site is for brand and product information only</span></span>'
    + '  </div>'
    + '</div>';

  var mount = document.getElementById('site-footer');
  if (mount) mount.innerHTML = html;
})();
