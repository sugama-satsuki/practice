

function removeDuplicates(arr: number[]):number[] {
    let result:number[] = [];

    arr.forEach((num, i) => {
        let count = 0;

        arr.forEach((num2) => {
            if(num === num2) count ++;
        });
        // 配列中に同じ値が1つだけ出現したやつをresult配列に
        if(count === 1) result.push(num);
    });

    return result;
}

module.exports = removeDuplicates;


// 階乗の結果を返す関数
export function calcFactorial(num: number):number {
    let result: number = 0;
    for(let i = 1; i <= num; i++) {
        result = result + i;
    }
    return result;
}