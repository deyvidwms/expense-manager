export default class Utils {
  static convertToMoney(value: number) {
    const formatter = new Intl.NumberFormat('pt-BR');
    let valueFormatted = formatter.format(value);

    if (valueFormatted.split(',').length === 1 )
      valueFormatted = `${valueFormatted},00`;
    else if ( valueFormatted.split(',')[1].length === 1 )
      valueFormatted = `${valueFormatted}0`;

    return valueFormatted;
  }
}