/* eslint-disable no-restricted-syntax */
const api111JsonFile = require('./LLM-data.openapi.json');
const apiJsonFile = require('./vgene.openapi.json');

function findValueByKey(obj, targetKey) {
    let result;

    // 检查当前对象是否包含目标 key
    if (obj[targetKey] !== undefined) {
        return obj[targetKey];
    }

    // 遍历对象的所有属性
    for (const key in obj) {
        if (Object.hasOwn(obj, key) && typeof obj[key] === 'object') {
            // 如果属性的值是一个对象，则进行递归调用
            result = findValueByKey(obj[key], targetKey);

            // 如果找到目标值，立即返回
            if (result !== undefined) {
                return result;
            }
        }
    }

    // 如果未找到目标值，返回 undefined
    return result;
}

const vd = findValueByKey(apiJsonFile, 'schema');
console.log('vd: ', vd);
