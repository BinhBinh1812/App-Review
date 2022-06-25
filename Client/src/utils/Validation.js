export const validForm = () => {};

export const verifyEmail = (email) => {
  let regex = new RegExp(
    /([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])/
  );
  if (!email) return true;
  if (regex.test(email)) {
    return true;
  }
  return false;
};

export const verifyPhone = (phoneNumber) => {
  let regex = new RegExp(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/);
  if (!phoneNumber) return true;
  if (regex.test(phoneNumber)) {
    return true;
  }
  return false;
};
