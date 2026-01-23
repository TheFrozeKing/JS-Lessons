import Label from "./Label";
import RoundLetter from "./RoundLetter";
import styles from "./styles/ConversionResult.module.css"

export default function ConvertionResult({currencyName, rubAmount, shortName,rate, currencySign, currencyColor}){
    const usableRate = rate.replace(',','.');
    const converted = rubAmount / Number(usableRate);
    let convertedRounded = String(Math.round(converted*100)/100).replace('.',',');

    convertedRounded = convertedRounded.indexOf(',') < 0 ? convertedRounded + ",00" : convertedRounded;

    return (
        <div className={styles.conversionResult}>
            <RoundLetter backgroundColor="#eff4f8" color={currencyColor} letter={currencySign} size="4"></RoundLetter>
            <Label text={currencyName + ` (${shortName})`} fontSize="1vh" fontWeight="600" color="gray"></Label>
            <Label text={convertedRounded + " " + currencySign} fontSize="2vh" fontWeight="700" color="black"></Label>
            <hr></hr>
            <Label text={`1 ${shortName} → ${rate} RUB`} fontSize="1vh" fontWeight="600" color="gray"></Label>
        </div>
    );
}