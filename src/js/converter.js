import 'convert-units/lib/index.js';
import convert from 'convert-units';

export const convertTo = (number, from, to) => {
    return convert(number).from(from).to(to);
};
