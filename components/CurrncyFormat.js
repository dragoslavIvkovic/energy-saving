/* eslint-disable import/prefer-default-export */
export function formatToCurrency(amount) {
  return amount
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
