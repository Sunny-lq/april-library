export default function getUrlParams(url) {
  var qs = '';
  if (url && url.split('?')[1]) {
    // eslint-disable-next-line prefer-destructuring
    qs = url.split('?')[1];
  } else {
    qs = window.location.search;
  }
  var params = {};
  var re = /[?&]?([^=]+)=([^&]*)/g;
  var tokens;

  // eslint-disable-next-line no-cond-assign
  while (tokens = re.exec(qs.split('+').join(' '))) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }
  return params;
}