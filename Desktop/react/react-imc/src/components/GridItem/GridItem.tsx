import { Level } from "../../helpers/imc";
//import styles from "./GridItem.module.css";
import styles from './item.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';
//import styles from "./GridItem.module.css";
 

type Props = {
    item: Level
};

export const GridItem = ({item} : Props ) =>{
    return( 
      // <div className={styles.main} ></div>
       <div style={{backgroundColor:item.color}} className={styles.main}>
        <div className={styles.gridIcon}>
            <img src={item.icon === 'up' ? upImage : downImage} width='30px'alt="Imagem de positivo ou negativo" />
        </div>
        <div className={styles.gridTitle}>{item.title}</div>

        {item.yourImc &&
            <div className={styles.yourImc}>O seu IMC é de {item.yourImc}</div>
        }


        <div className={styles.gridInfo}>
            <>
            O IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </>
        </div>
       </div>
    );
}