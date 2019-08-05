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
      const scoped = Object
        .entries(name2)
        .filter(kv=>kv[1] !==false)
        .map(kv=>kv[0]).map(name =>
          [prefix, name].filter(Boolean).join('-'))
        .join(' ');

      if (options && options.extra) {
         return [scoped, options && options.extra].filter(Boolean).join(' ')
      } else {
         return scoped
      }
   }
}
export {scopedClassMaker}