const storeFiles = import.meta.glob("./../stores/*.js",{eager:true});

let storeExports = {};

for (const fileName in storeFiles) {
    const storeObject = storeFiles[fileName];
    for (const key in storeObject) {
      if (typeof storeObject[key] === 'function') {
        storeExports[storeObject[key].$id] = storeObject[key];
        break;
      }
    }
  }

const useStore=(storeName)=> {
  if (!Object.keys(storeExports).includes(storeName)) {
    throw "Unknown pinia store name: " + storeName;
  }
  const store = storeExports[storeName]();
  const storeRefs = storeToRefs(store);
  return { ...store, ...storeRefs };
}
const f1=()=>{
    console.log(storeExports);
}

export {useStore as useStore,f1}