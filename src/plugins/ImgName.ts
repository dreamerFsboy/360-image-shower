const arr:Array<string> = []

const files = import.meta.glob('../../public/imgs/*.jpg')

for (const key in files) {
    arr.push(key.replace('../../public/imgs/',''))
}

export default arr
