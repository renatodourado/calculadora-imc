import { useState } from 'react';
import styles from './App.module.css';
import imgHeader from './assets/powered.png';
import leftArrowImg from './assets/leftarrow.png'
import { GridItem } from './components/GridItem';
import {levels, calculateImc, Level} from '../src/helpers/imc';

const App = () =>{

const [heightField, setHeigthField] = useState<number>(0);
const [weightField, setWeightField] = useState<number>(0);
const [showItem, setShowItem] = useState<Level | null>(null);

const calculator = () =>{
  if(heightField && weightField){
    setShowItem(calculateImc(heightField, weightField));
  }else{
    alert('Por favor, digite todos os campos');
  }
}

const handleClick = ()=> {
  setShowItem(null);
  setHeigthField(0);
  setWeightField(0);
}

  return(
    <div className={styles.main}>
    
      <header>
        <div className={styles.headerContainer}>
          <img src={imgHeader} alt="imagem de logo" width={100}></img>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</p>

          <input type='number' placeholder='Digite a sua altura. Ex: 1.75' value={heightField > 0 ? heightField : ''} onChange={e => setHeigthField(parseFloat(e.target.value))} disabled={showItem ? true : false}/>

          <input type='number' placeholder='Digite o seu peso. Ex. 80.7' value={weightField > 0 ? weightField : ''} onChange={e => setWeightField(parseFloat(e.target.value))} disabled={ showItem ? true : false}/>

        <button onClick={calculator} disabled={showItem ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!showItem &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
              <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {showItem && 
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleClick}>
                <img src={leftArrowImg} alt="Seta para voltar" width={25}/>
                {/* <img src='<FontAwesomeIcon icon="fa-solid fa-arrow-turn-down-left" />' alt="Seta para voltar" width={25}/> */}
              </div>
              <GridItem item={showItem}/>
            </div>
          }
        </div>
        
      </div>
      <footer><p>Desenvolvido por Renato Dourado</p></footer>
    </div>
  )
};

export default App;