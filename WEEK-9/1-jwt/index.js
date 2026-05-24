const jwt = require("jsonwebtoken");
const jwtPassword = "secret";


function signJwt(username, password) {
  // first get the email check the email is valid  or not with the help of regex then after this also check password lenght is greater then 6 or not of both not return null nad if both are valid then create a jwt token with a secret key or password
  // get the email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(username) || password.length < 6) {
    return null;
  } else {
    const token = jwt.sign({ username, password }, jwtPassword);
    return token;
  }
}

            
function verifyJwt(token) {
  try {
    jwt.verify(token, jwtPassword);
    return true;
  } catch (error) {
    return false;
  }
}


function decodeJwt(token) {
    try{
const decoding = jwt.decode(token);
    
return decoding ? true : false }
catch (error) {
  return   false;
}



}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
