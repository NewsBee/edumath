/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace Edumath {
    // Blok untuk memeriksa apakah suatu bilangan genap
    //% block="Apakah $n bilangan ganjil atau genap"
    export function isEvenNumber(n: number): void {
    if (n % 2 === 0) {
        basic.showString("Genap");
    } else {
        basic.showString("Ganjil");
     }
    }


    // Blok untuk mencari faktorial suatu bilangan
    //% block="Faktorial dari $n"
    export function factorial(n: number): number {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    // Blok untuk menjumlahkan dua bilangan
    // dan mengembalikan hasil penjumlahannya
    //% block="Penjumlahan dari $a + $b"
    export function addNumbers(a: number, b: number): number {
        return a + b;
    }
}