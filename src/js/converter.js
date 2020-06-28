import convert from 'convert-units';

const convertTo = (number, from, to) => {
    return convert(number).from(from).to(to);
};

export const convertInput = (inputList) => {
    inputList.forEach((elm) => {
        elm.addEventListener('input', changeValue);
    });

    function changeValue(e) {
        inputList.forEach((elm) => {
            if (e.target.id === elm.id) return;

            if (e.target.value === '') elm.value = '';
            else elm.value = convertTo(e.target.value, e.target.id, elm.id);
            M.updateTextFields();
        });
    }
};
