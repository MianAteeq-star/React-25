import React, { useState } from "react";
import data from "./data";

function Accordian() {
  const [selected, setSelected] = useState(null); 
  const [multiple, setMultiple] = useState([]); 
  const [enableMultiple, setEnableMultiple] = useState(false); 



//   Handle single selection
  const handleSingle = (currentId) => {
    setSelected(currentId === selected ? null: currentId);
    console.log(currentId);
  };

//   Handle multiple selections

const handleMultiple = (currentId)=>{
let copy = [...multiple]
let seeCurrentId = copy.indexOf(currentId) ;
if (seeCurrentId === -1) copy.push(currentId)
    else  copy.splice(seeCurrentId,1)



setMultiple(copy)
console.log(copy);
}

  return (
    <>
      <div className="flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
        <div className="w-full max-w-lg px-10 py-8 mx-auto bg-zinc-700 rounded-lg shadow-xl">
          <h1 className="bg-slate-500 p-6 text-3xl rounded-xl mb-6">
            Accordian
          </h1>
          <div className="max-w-md mx-auto space-y-6 text-white cursor-pointer">
            <button onClick={()=>setEnableMultiple(!enableMultiple)} className="p-3 bg-teal-300 text-black rounded" >Select multiple</button>
            <div className="mx-3">
              {data && data.length > 0 ? (
                data.map((dataItem) => (
                  <>
                  <div key={dataItem.id}>
                    <div 
                      onClick={enableMultiple ? ()=>handleMultiple(dataItem.id) :  () => handleSingle(dataItem.id)}
                      className="flex justify-between font-bold"
                      >

                      <h2> Question : {dataItem.question}</h2>
                      <span>+</span>
                    </div>
                        </div>

                    {

                        enableMultiple ? multiple.indexOf(dataItem.id ) !== -1  &&
                    <h2 className="font-light">Answer : {dataItem.answer}</h2> :
                    
                    selected === dataItem.id &&
                    <h2 className="font-light">Answer : {dataItem.answer}</h2> 
                    }
                   
                  </>
                ))
              ) : (
                <div>No Data Found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordian;
