import '../styles/191045.css'
import { useTranslation } from "react-i18next";

export default function Student() {
    const { t } = useTranslation();
    
    return(
        <div id="gradient">
        <div id="cardMia">
      
        <h2>{t("Nom")} Gonzalo Eduardo Rodriguez Romo</h2>
        <br />
        <p> Universidad Tecnologica de Aguascalientes</p>
        <br />
        <p>{t("Mat")}Desarrollo Web Integral</p>
         <br />
        <p> {t("Matr y Grup")} 191045 9-A IDGS</p>
        <span class="left bottom">{t("Tel")} 731 366 ***</span>
        <span class="right bottom">{t("Nacion")} Mexicano</span>
      </div>
      </div>
        
    )
    
}