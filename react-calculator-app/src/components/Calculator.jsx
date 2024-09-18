import { useRef, useState } from "react";
import "./calculator.css";
import { TiBackspaceOutline } from "react-icons/ti";
import { Navbar } from "./Navbar";

export const Calculator = () => {
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState(0);
  const [history,setHistory]=useState([]);
  const [historyView,setHistoryView]=useState("none");
  const historyRef=useRef(null);

  const handleClick = (e) => {
    setCalculation((prevCalc) => prevCalc + e.target.value);
  };

  const handleExpression = () => {
    try {
    let calculatedResult=eval(calculation).toString()
    setResult(calculatedResult)
      let obj={
        expression:calculation,
        result:calculatedResult
      }
      let copyArr=[...history]
      copyArr.push(obj)
      setHistory(copyArr)
      if(history.length>5){
        copyArr.shift()
        setHistory(copyArr)
      }
    } catch {
      setResult("Invalid Entry!!!");
    }

  };
console.log(history)

  const handleReset = () => {
    setCalculation("");
    setResult(0);
  };

  const handleDelete = () => {
    setCalculation((prevCalc) => prevCalc.slice(0, -1));
  };

  const historyList=history.map((item,index)=>{
    return(
     <ul key={index} >
        <button ref={historyRef} className="history-element" onClick={()=>{
            setCalculation(item.expression)
            setResult(item.result)
        }}>{item.expression}={item.result}</button>
     </ul>
    )
 })
const handleHistory=()=>{
    if(historyView==="none"){
      setHistoryView("display")
    }
    else{
      setHistoryView("none")
    }
  

  
}

  return (
    <>
      <Navbar/>
      <button onClick={handleHistory} className="history-btn">History</button>
      <div className="calculator-container">
        <div className="screen-area">
          <div className="display">{calculation}</div>
          <div className="result">{result}</div>
        </div>
        <div className="calculator-section">
          <hr />
          <button className="icon" onClick={handleDelete}>
            <TiBackspaceOutline size="30px" />
          </button>
          <div className="calculator-buttons">
            <button value="C" className="light-orange" onClick={handleReset}>
              C
            </button>
            <button value="(" className="light-orange" onClick={handleClick}>
              (
            </button>
            <button value=")" className="light-orange" onClick={handleClick}>
              )
            </button>
            <button value="%" className="light-orange" onClick={handleClick}>
              %
            </button>
            <button value="/" className="dark-orange" onClick={handleClick}>
              /
            </button>
            <button value="7" className="orange" onClick={handleClick}>
              7
            </button>
            <button value="8" className="orange" onClick={handleClick}>
              8
            </button>
            <button value="9" className="orange" onClick={handleClick}>
              9
            </button>
            <button value="*" className="dark-orange" onClick={handleClick}>
              X
            </button>
            <button value="4" className="orange" onClick={handleClick}>
              4
            </button>
            <button value="5" className="orange" onClick={handleClick}>
              5
            </button>
            <button value="6" className="orange" onClick={handleClick}>
              6
            </button>
            <button value="-" className="dark-orange" onClick={handleClick}>
              -
            </button>
            <button value="1" className="orange" onClick={handleClick}>
              1
            </button>
            <button value="2" className="orange" onClick={handleClick}>
              2
            </button>
            <button value="3" className="orange" onClick={handleClick}>
              3
            </button>
            <button value="+" className="dark-orange" onClick={handleClick}>
              +
            </button>
            <button value="0" className="orange" onClick={handleClick}>
              0
            </button>
            <button value="." className="orange" onClick={handleClick}>
              .
            </button>
            <button className="equals" onClick={handleExpression}>
              =
            </button>
          </div>
        </div>
      </div>
      <div className="history-list">
            {historyView==="display"&&historyList}
        </div>
    </>
  );
};
// [2+5,4+2,4+9] ->History ->seperate component and use it in calculator component history button to show history.
//Show passwrd feature

// history={history} historyView={historyView} setHistoryView={setHistoryView} historyRef={historyRef?.current?.innerHTML