import React, { useState } from 'react'
import './Styles.css';

export default function Attendance() {
    const [liste, setliste] = useState([])   ; 
    const [index, setindex] = useState(0) ;
    const [fullName, setfullname] = useState() ;
    const [result, setresult] = useState([]);
    const [filtred ,setfiltred]= useState([]) ;
    const [start, setstart] = useState(false) ;
         
    
         const filter = (condition)=>{
             if (condition==="Tous") {
                 setfiltred(result)
             }else{
                 const filter = result.filter(element => element.condition === condition);   
                 setfiltred(filter);
             }     
         }
         const test=()=>{
            var i=0;
            var x = document.getElementById("myInput").value;
            for(let item of liste)
                if (item.name===x) i+=1;
            if (i===0)setliste((oldArray)=>[...oldArray,{name:x}]);
            document.getElementById('myInput').value="";
        }
        const Cross = (condition)=>{
            if (index===liste.length) {
                setfiltred((oldArray)=>[...oldArray,{name:fullName,condition}])
                setfullname(liste[index-1].name);
                setresult((oldArray)=>[...oldArray,{name:fullName,condition}])
                document.getElementById('Blockl').innerHTML=""
            }else{
                if (condition==="Begin") {
                    setindex(index+1);
                    setfullname(liste[index].name);
                    document.getElementById('addInfo').innerHTML=""
                }else{
                    setfiltred((oldArray)=>[...oldArray,{name:fullName,condition}])
                    setindex(index+1);
                    setfullname(liste[index].name);
                    setresult((oldArray)=>[...oldArray,{name:fullName,condition}])
    
                 }
        }}
                
    return (
        <div >
            <div id="Blockl">
                <div id="names" >
                {start?null:<button onClick={()=>{
                setstart(!start);
                setfullname(liste[index].name);
                Cross("Begin");
                }}>Begin</button>} 
                <p id="fullName"> {fullName}</p>  
                <p id="Conteur">{index} out of {liste.length}</p>
                <div id="addInfo">
                <input type="text" id="myInput" placeholder="Enter a Student Name"></input>
                <input type="submit" id="myInput" value="Submit" onClick={test}></input>
                </div>
                </div>
            <div id="buttons"  >
             <button type="button" disabled={!start} onClick={()=>Cross("Present")} >Present</button>
             <button type="button" disabled={!start} onClick={()=>Cross("Excused")} >Excused</button>
             <button type="button" disabled={!start} onClick={()=>Cross("Absent")} >Absent</button>
         </div>
     </div>
     <div>
     <div className="menu">
      <buttongroup id="buttong">
        <button onClick={()=>filter("Tous") } >Tous</button>
        <button onClick={()=>filter("Absent")} >Absent</button>
        <button onClick={()=>filter("Present")} >Present</button>
        <button onClick={()=>filter("Excused")} >Excused</button>
      </buttongroup>
      
    </div>
     </div >
     <div className="listee">
     <ul>
        {filtred && filtred.map((element,index)=>
        <div>
            <div>
                <div id="StudentName">
                    <p style={{fontSize:30}}>{element.name}</p>
                    {element.condition}
                </div>
            </div>
        </div>)}
     </ul>
     </div>
     </div>
    )}
