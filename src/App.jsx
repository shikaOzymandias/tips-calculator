import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [persentage1, setPersentage1] = useState(0);
  const [persentage2, setPersentage2] = useState(0);
  const tip = (bill * (persentage1 + persentage2)) / 2 / 100;

  function handleReset() {
    setPersentage1(0);
    setPersentage2(0);
    setBill("");
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPersentage
        persentage={persentage1}
        onSetPersentage={setPersentage1}
      >
        Your Persentage of bill?
      </SelectPersentage>
      <SelectPersentage
        persentage={persentage2}
        onSetPersentage={setPersentage2}
      >
        Your friend's Persentage of bill?
      </SelectPersentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bills"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      />
    </div>
  );
}

function SelectPersentage({ children, persentage, onSetPersentage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={persentage}
        onChange={(e) => onSetPersentage(+e.target.value)}
      >
        <option value="0">0%</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="15">15%</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      Your pay: {bill + tip} ({bill} + {tip}:Tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
