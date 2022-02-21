import translate from "translate";

translate.engine = "google"; 
translate.from ="it";
translate.key = process.env.GOOGLE_KEY;

const text = await translate("Ciao questa è una prova di node", "es");
console.log(text);



