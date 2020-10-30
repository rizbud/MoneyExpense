export function formatMoney(num) {
  num = num + ""

  if (num == "" || num == "0")
    return "";

  num = num.replace(/\./g, "");
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return num_parts.join(".");
}