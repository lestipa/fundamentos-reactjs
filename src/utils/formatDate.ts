const formatDate = (value: Date): string =>
  Intl.DateTimeFormat('pt').format(value);

export default formatDate;
