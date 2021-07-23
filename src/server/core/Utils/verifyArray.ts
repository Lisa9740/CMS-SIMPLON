export class VerifyArray{
    isSame(arr1, arr2){
        return arr1.length === arr2.length && arr1.every(function (e, index) {
            return e === arr2[index]
        })
    }
}
