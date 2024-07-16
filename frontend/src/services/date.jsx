const getMonthAndYearFromDate = (date) => {
    const result = new Date(date).toDateString().split(' ');
    return `${result[1]} ${result[3]}`;
}

export { getMonthAndYearFromDate };