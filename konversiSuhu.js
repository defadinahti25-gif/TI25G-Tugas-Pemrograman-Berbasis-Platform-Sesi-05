const rumusSuhu = require('./rumusSuhu');
const chalk = require('chalk');

const suhuAwal = 30;
const hasilKonversi = rumusSuhu(suhuAwal);

console.log(chalk.bgBlue.white.bold(' --- Aplikasi Konversi Suhu --- '));
console.log(chalk.green(`Suhu Celcius: ${suhuAwal}°C`));
console.log(chalk.yellow(`Suhu Fahrenheit: ${hasilKonversi}°F`));
console.log(chalk.bgBlue.white(' ------------------------------ '));