import logo from "./logo.svg";
import "./App.css";
import Lista from "./components/Lista";
import MonedaInfo from "./components/MonedaInfo";
import axios from "axios";
import Header from "./components/Header";
import { useEffect, useState } from "react";


function App() {
  
const monedas = [];
  // const [monedas, setMonedas] = useState([])
  useEffect(() => {
    const getItem = async () => {
      const myURL = "https://api.coingecko.com/api/v3/";
      try {
        const arrayMonedas = await axios.get(`${myURL}/coins/`);
        const data = arrayMonedas.data;
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          monedas.push(data[i]);
        }
        return data;
      } catch (errors) {
        console.error(errors);
      }
    };
    getItem();
  }, []);

  return (
    <>
      <Header></Header>
      <Lista monedas={monedas}></Lista>
      <MonedaInfo></MonedaInfo>
    </>
  );
}

export default App;
