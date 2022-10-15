let asyncFunc1 = (something: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`resolved ${something} from func1 ...`);
        }, 1000);
    })
}

let asyncFunc2 = (something: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`resolved ${something} from func1 ...`);
        }, 1500);
    })
}

const promiseMain = (): void => {
    asyncFunc1("test")
        .then((resolvedData: string) => {
            console.log(resolvedData);
            return asyncFunc2('test!!!!!')
        })
        .then((resolvedData: string) => {
            console.log(resolvedData);
        })
}

const main = async () : Promise<void> => {
    let result = await asyncFunc1("wow!");
    console.log(result);
    result = await asyncFunc2("우왕!");
    console.log(result)
}

promiseMain()

main()