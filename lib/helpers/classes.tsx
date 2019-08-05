function classes (...names: (string | undefined)[]){
   return names.filter(Boolean).join(' ');
}

export default classes;


interface Options{
   extra?: string | undefined;
}
interface classToggles {
   [K:string]: boolean;
}
function scopedClassMaker (prefix:string){
   return (name:string | classToggles, options?:Options)=>{
      const name2 = (typeof name === "string" || typeof name === "undefined") ?
        {[name]: name} : name;
       return Object
        .entries(name2)
        .filter(kv=>kv[1] !==false)
        .map(kv=>kv[0]).map(name => [prefix, name]
          .filter(Boolean)
          .join('-')).concat(options && options.extra || [])
        .join(' ');
   }
}
export {scopedClassMaker}