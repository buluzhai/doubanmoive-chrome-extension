$(function () {

  insertLink(getMovieName());

  function _x(STR_XPATH) {
      var xresult = document.evaluate(STR_XPATH, document, null, XPathResult.ANY_TYPE, null);
      var xnodes = [];
      var xres;
      while (xres = xresult.iterateNext()) {
          xnodes.push(xres);
      }

      return xnodes;
  }

  function getMovieName(){
    return $(_x("//span[contains(@property,'v:itemreviewed')]")).text();
  }

  function genMiwifiUrl(url) {
      var baseUrl = "http://d.miwifi.com/d2r/";
      var srcParam = "src=chrome_ext_zc";
      if (url) return baseUrl + "?url=" + Base64.encodeURI(url) +"&"+srcParam;
      return baseUrl + "?" + srcParam;
  }

  function getMagnetLink(name) {
    return "ed2k://|file|%E7%A1%85%E8%B0%B7.Silicon.Valley.S03E05.%E4%B8%AD%E8%8B%B1%E5%AD%97%E5%B9%95.HDTVrip.1024X576.mp4|286180458|3db3c6d3defc0f990508e0c5835b1fee|h=gpwovvg4zy72ddjc7kfrweupahdeu26u|/";
  }

// add nav item in github home page
  function insertLink(name, link) {
    var nav = $('#info');
    var wifilink=genMiwifiUrl(getMagnetLink())
    var item = $("<span class='pl'><a href='"+wifilink+"'>下载到小米路由器</a><br/>" );
    nav.append(item);
  }

});
