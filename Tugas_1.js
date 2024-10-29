function hitungFrekuensi(input) {

    const angkaArray = input.split(',').map(Number);

    const frekuensi = {};

    angkaArray.forEach(angka => {
        if (frekuensi[angka]) {
            frekuensi[angka]++;
        } else {
            frekuensi[angka] = 1;
        }
    });

    return frekuensi;
}


const input = '1,1,1,2,2,3,4,4,4,4,5,5,5,5,5,6,6';

const hasilFrekuensi = hitungFrekuensi(input);
console.log(hasilFrekuensi);
