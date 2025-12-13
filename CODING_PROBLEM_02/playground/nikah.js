function nikahCalculation(mahr, walima, miscellaneous) {
  const totalMahr = mahr;
  const totalWalima = walima * 350;
  const totalmiscellaneous = miscellaneous;

  const totalNikahCost = totalMahr + totalWalima + totalmiscellaneous;
  return totalNikahCost;
}

console.log(nikahCalculation(120000, 50, 50000));
