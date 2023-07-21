const translateMonth = (month: string): string => {
  const monthsMap: { [key: string]: string } = {
    January: "Janeiro",
    February: "Fevereiro",
    March: "Março",
    April: "Abril",
    May: "Maio",
    June: "Junho",
    July: "Julho",
    August: "Agosto",
    September: "Setembro",
    October: "Outubro",
    November: "Novembro",
    December: "Dezembro",
  };

  return monthsMap[month] || month;
};

export default translateMonth;
