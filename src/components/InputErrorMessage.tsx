interface Iprops{
    msg?:string;
}

const InputErrorMessage=({msg}:Iprops)=>{
    return msg? <span className="block text-red-800 font-semibold text-sm">{msg}</span>:null;
}
export default InputErrorMessage;