function nikahCalculation(mahr, walima, miscellaneous) {
  const obj = {
    totalMahr: mahr,
    totalWalima: walima * 400,
    totalmiscellaneous: miscellaneous
  }
  const total = obj.totalMahr + obj.totalWalima + obj.totalmiscellaneous;
  return {
    obj,
    total,
  };
}
console.log(nikahCalculation(120000, 50, 50000));
