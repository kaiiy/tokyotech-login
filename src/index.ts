import { USER_DATA } from "../config";

const alphabetToNumber = (str: string) => {
  if (str.length !== 1) return;

  const num = str.charCodeAt(0) - "A".charCodeAt(0);
  if (num < 0 || num > 25) return;

  return num;
};

const isHTMLElement = <T>(e: unknown): e is T => {
  if (e == null) return false;
  return true;
};

const main = () => {
  const LOGIN_ID_URL =
    /^https:\/\/portal\.nap\.gsic\.titech\.ac\.jp\/GetAccess\/Login\?Template\=userpass_key\&AUTHMETHOD\=UserPassword$/;
  const LOGIN_SELECT_URL =
    /^https:\/\/portal\.nap\.gsic\.titech\.ac\.jp\/GetAccess\/Login\?Template\=idg_key.*$/;
  const LOGIN_MATRIX_URL =
    /^https:\/\/portal\.nap\.gsic\.titech\.ac\.jp\/GetAccess\/Login$/;

  const url = location.href;

  if (LOGIN_ID_URL.test(url)) {
    const formUserName = document.getElementsByName("usr_name")[0];
    if (!isHTMLElement<HTMLInputElement>(formUserName)) return;

    formUserName.value = USER_DATA.ID;
  } else if (LOGIN_SELECT_URL.test(url)) {
    const formMethod = document.getElementsByName("message5")[0];
    if (!isHTMLElement<HTMLSelectElement>(formMethod)) return;

    formMethod.selectedIndex = 1;
  } else if (LOGIN_MATRIX_URL.test(url)) {
    // submit matrix code
    const formTable = document.getElementById("authentication");

    if (!isHTMLElement<HTMLTableElement>(formTable)) return;

    for (let i = 4; i < 7; i++) {
      const thIndex = 0; // or 2?
      const formMatrixStr = formTable.rows[i].cells[thIndex].innerText;

      // Get matrix index
      const matrixRow = alphabetToNumber(formMatrixStr[1]);
      if (matrixRow === undefined) return;
      const matrixCell = parseInt(formMatrixStr[3]) - 1;

      // Fill matrix
      const formMatrix = document.getElementsByName(`message${i - 1}`)[0];
      if (!isHTMLElement<HTMLInputElement>(formMatrix)) return;

      formMatrix.value = USER_DATA.MATRIX[matrixCell][matrixRow];
    }
  }
};

main();
