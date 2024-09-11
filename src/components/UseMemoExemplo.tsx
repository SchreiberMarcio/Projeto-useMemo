import { useState, useMemo } from "react";
import styles from "./UseMemoExamplo.module.css"; 

const ExpensiveCalculation = (num: number) => {  // Simulando uma operação que consome muito recurso (demorada)
  console.log("Calculando...");
  for (let i = 0; i < 1000000000; i++) { /* empty */ }
  return num * 2;
};

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const doubledNumber = useMemo(() => { // O useMemo memoriza o valor da operação cara e só o recalcula se "number" mudar
    return ExpensiveCalculation(number);
  }, [number]);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")); // Função para alternar o tema
  };

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <h1>Exemplo de useMemo</h1>
      <h2>Digite um valor para multiplicar por 2</h2>

      <input
        type="number"
        className={styles.input}
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={toggleTheme} className={styles.button}>
        Alternar Tema
      </button>

      <div className={styles.result}>
        <p>Resultado do cálculo: {doubledNumber}</p>
      </div>
    </div>
  );
};

export default UseMemoExample;
