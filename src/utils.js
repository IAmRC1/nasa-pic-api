function shorten(str){
  return str.slice(0, 600);
};
function full(str){
  const last_dot = str.lastIndexOf('.')
  return str.slice(600, last_dot+1)
};

export { shorten, full };
