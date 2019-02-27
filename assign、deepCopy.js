Object.assign()

function isObj(target) {
    return typeof target === 'object' && target !== null
}

Object.defineProperty(Object, 'assign2', {
    value(to) {
        if(to == null) {
            console.log('error')
            return
        }
        to = Object(to);
        let args = [...arguments].slice(1)
        for (let i = 0; i < args.length; i++) {
            let next = args[i];
            if(next == null) continue
            for(var key in next) {
                if(Object.prototype.hasOwnProperty.call(next,key)) {
                    to[key] = next[key]
                }
            }
        }
        return to
    },
    writable: true,
    enumerable: true,
    configurable: true
})

function deepCopy(source, hash = new WeakMap()) {
    if(!isObj(source)) return source
    if(hash.has(source)) return hash.get(source)
    var target = Array.isArray(source) ? [] : {};
    hash.set(source, target);
    Object.getOwnPropertySymbols().forEach(symKey =>{
        if(isObj(source[symKey])) {
            target[symKey] = deepCopy(source[symKey], hash)
        }else{
            target[symKey] = source[symKey]
        }
    })
    for (let key in source) {
        if(Object.prototype.hasOwnProperty.call(source,key)) {
            if(isObj(source[key])) {
                target[key] = deepCopy(source[key], hash)
            }else{
                target[key] = source[key]
            }
        }
    }
    return target
}
