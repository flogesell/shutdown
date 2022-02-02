
<template>
  <div class="info">
    <div id="button-box">
      <Button :text='"Back"' id="probButton" @click="$router.push('/')"/>
    </div>
    <Logo id="logo" :checked=false :dark=false />
    <div class="text">
      <h2>Informations</h2>
      <h3>Motivation</h3>
      <p>We do life in a time of misinformation and heated debates. Creating this application, our goal was always to give users the ability to get in contact with data regarding climate change. Our vision is it to make people think about the facts we prepared visually and make them draw their own conclusions from the scientific facts.</p>
      <h3>Data processing</h3>
      <p>We get our data from the CAIT (Climate Analysis Indicators Tool) on global climate change developed by the World Resources Institute from 2018, due to the variety and accuracy of the data.This Data is processed with a model, to be found in the IPCC-report from 2021, that can be used to convert the amount of CO₂ emissions into a probability spectrum for global warming.<br>
      Since the global climate is very complex and can't be completely narrowed down into numbers to calculate future change, the model from the IPCC-report just gives a spectrum from 17% up to 83%. There is never a 100% certainty that the prognoses by scientists are to become true.<br>
      For visualization, understandability and usability purposes we calculated a zero point to this model.<br>
      Sources are to be found below.
      </p>
      <h3>Sources</h3>
      <p><sub>1</sub> ourworldindata.org</p>
      <p><sub>2</sub> <a href="https://www.ipcc.ch/sr15/chapter/spm/">IPCC Report</a></p>
      <p><sub>3</sub> ourworldindata.org</p>
      <p><sub>4</sub> ifeu.de</p>
      <p><sub>5</sub> <a href="https://www.klimafakten.de/meldung/neue-infografik-macht-ein-halbes-grad-weniger-erderwaermung-einen-unterschied">klimafakten.de</a>, <a href="https://www.ipcc.ch/sr15/chapter/spm/">IPCC Report</a></p>
      <p><sub>6</sub> The Facts are a summary of the chapter "2 Degrees more" from the Book <a href="https://www.rowohlt.de/buch/mark-lynas-6-grad-mehr-9783499004421">"6 Degrees more"</a> by Mark Lynas. This information was checked against <a href="https://www.klimafakten.de/meldung/neue-infografik-macht-ein-halbes-grad-weniger-erderwaermung-einen-unterschied">klimafakten.de</a> and the <a href="https://www.ipcc.ch/sr15/chapter/spm/">latest IPPC report</a>.</p>
      <p><sub>7</sub> The Facts are a summary of the chapter "3 Degrees more" from the Book <a href="https://www.rowohlt.de/buch/mark-lynas-6-grad-mehr-9783499004421">"6 Degrees more"</a> by Mark Lynas. This information was checked against the <a href="https://www.ipcc.ch/sr15/chapter/spm/">latest IPPC report</a>.</p>
      
      
    </div>
    <div id="impressum">
      <div id="impressum-text">
        <h2>Diensteanbieter gemäß § 5 Abs. 1 TMG und § 55 Abs. 1 RStV</h2>
        <p>
        Hochschule für angewandte Wissenschaften Augsburg<br>
        An der Hochschule 1<br>
        86161 Augsburg<br><br>
        Telefon: <a href= "tel:+4982155860">+49 (0)821-5586-0</a><br>
        Fax: +49 (0)821-5586-3222<br><br>
        E-Mail: <a href= "mailto:info@hs-augsburg.de">info@hs-augsburg.de</a><br><br>
        Vertretungsberechtigte Person<br>
        Präsident Prof. Dr. Gordon Thomas Rohrmair gem. Art. 21 Abs. 7 BayHSchG
        </p>
        <h2>Ust-Idnr:</h2>
        <p>DE 811335517<br>
        (Staatsoberkasse Bayern, Landshut)
        </p>
        <h2>Rechtsform</h2>
        <p>Die Hochschule Augsburg ist Körperschaft des öffentlichen Rechts gemäß Art. 11 Abs. 1 Satz 1 Bayerisches Hochschulgesetz und zugleich staatliche Einrichtung, Art. 11 Abs. 1 Satz 2 Bayerisches Hochschulgesetz. Sie nimmt eigene Angelegenheiten als Körperschaft (Körperschaftsangelegenheiten), staatliche Angelegenheiten als staatliche Einrichtung wahr – Art. 12 Abs. 1 Bayerisches Hochschulgesetz.<br>
        </p>
        <h2>Zuständige Aufsichtsbehörde</h2>
        <p>Bayerisches Staatsministerium<br>
        für Wissenschaft und Kunst<br>
        80327 München
        </p>
        <h2>Copyright</h2>
        <p>Kopie und Weiterverwendung von Text und Graphik erfordert die Zustimmung der Hochschule Augsburg.
        </p>
        <h2>Fotos | Bild- und Urheberrechte liegen bei:</h2>
        <p>University of applied sciences Augsburg<br>
        <!--Christina Bleier<br>
        Colourbox, <a href= "https://colourbox.de" target="_blank">www.colourbox.de</a><br>
        Martin Duckek, Ulm<br>
        Florian Hammerich, <a href= "https://altrofoto.de" target="_blank">www.altrofoto.de</a><br>
        iStock<br>
        Matthias Leo<br>
        Eckhart Matthäus, <a href= "https://em-foto.de" target="_blank">www.em-foto.de</a><br>
        Marcus Reppich<br>
        Simeon Johnke/Regio Augsburg Wirtschaft GmbH<br>-->
        </p>
        <h2>Ohne Gewähr</h2>
        <p>Änderungen infolge zwischenzeitlicher ministerieller Entscheidungen sowie im Rahmen der allgemeinen Reformen auf dem Bildungssektor und im Personalbereich müssen vorbehalten bleiben.
        </p>
        <h2>Regeln</h2>
        <p>Die Darstellung der Hochschule Augsburg enthält auch individuell gestaltete Seiten, die in der Verantwortung der jeweiligen Autoren stehen. Auf diesen Seiten dürfen keine Inhalte enthalten sein, die dem Ansehen der Hochschule schaden. Die Hochschulleitung behält sich vor, bei Nichtbeachten dieser Regeln Maßnahmen zu ergreifen.
        </p>
        <h2>Datenschutz</h2>
        <p>Der Verantwortliche im Sinne der EU-Datenschutzgrundverordnung (im Folgenden: DSGVO) und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:<br>
        Hochschule für angewandte Wissenschaften Augsburg,<br>
        Körperschaft des öffentlichen Recht gemäß Art. 11 Abs. 1 S. 1 BayHSchG,<br>
        vertreten durch ihren Präsidenten Prof. Dr. Gordon T. Rohrmair<br><br>

        An der Hochschule 1<br>
        86161 Augsburg<br><br>

        Telefon: <a href= "tel:+4982155860">+49 (0)821-5586-0</a><br>
        Telefax: +49 (0)821-5586-3222<br>

        <a href= "mailto:info@hs-augsburg.de">info@hs-augsburg.de</a>
        </p>
        <h3>Protokollierung von Daten</h3>
        <p>Wenn Sie diese Website besuchen, werden auf einem Server des Betreibers 
        Daten für Sicherungszwecke gespeichert, die möglicherweise eine 
        Identifizierung zulassen:<br>
          – IP-Adresse des anfragenden Rechners<br>
          – Datum und Uhrzeit des Zugriffs<br>
          – Name und URL der abgerufenen Datei<br>
          – Meldung, ob der Abruf erfolgreich war<br>
          – Betriebssystem und Browser des anfragenden Rechners<br><br>

        Die vorübergehende Speicherung der IP-Adresse durch das System ist 
        notwendig, um eine Auslieferung der Website an den Rechner des Nutzers 
        zu ermöglichen. Da diese Daten für den Betrieb der Website zwingend 
        erforderlich sind, haben Sie als Nutzer keine Möglichkeit der 
        Verarbeitung zu widersprechen.<br><br>

        Diese Daten werden über einen Zeitraum von maximal zwei Tagen 
        gespeichert. Die Speicherung erfolgt aus Gründen der Datensicherheit, um 
        die Stabilität und die Betriebssicherheit des Systems zu gewährleisten. 
        Es findet keine personenbezogene Verwertung statt. Die Daten werden 
        nicht an Dritte weitergegeben. Es findet keine Übertragung 
        personenbezogener Daten ins Ausland statt. Eine statistische Auswertung 
        der Daten findet NICHT statt, auch nicht in anonymisierter Form.
        </p>
        <h3>Cookies</h3>
        <p>Es werden keine Cookies verwendet oder gespeichert.
        </p>
        <h3>Name und Anschrift des Datenschutzbeauftragten</h3>
        <p>Interne Ansprechpartnerinnen für den Datenschutz: <a href="https://www.hs-augsburg.de/Personal-und-Recht/Anna-Fichte.html">Anna Fichte</a> und <a href="https://www.hs-augsburg.de/Personal-und-Recht/Christiane-Schroth.html">Christiane Schroth</a> (Justiziariat)<br><br>
        Externer Datenschutzbeauftragter der Hochschule für angewandte Wissenschaften Augsburg<br><br>
        
        Herr Rechtsanwalt Dr. Karsten Kinast, LL.M.<br>
        KINAST Rechtsanwaltsgesellschaft mbH<br>
        Hohenzollernring 54<br>
        D-50672 Köln<br><br>

        Phone: <a href="tel:+492212221830">+49 221 222183-0</a><br><br>
        E-mail: <a href="mailto:mail@kinast.eu">mail@kinast.eu</a><br>
        Website: <a href="https://kinast.eu">www.kinast.eu</a>
        </p>
      </div>
    </div>
  </div>
  
</template>

<script>
import Logo from '@/components/Logo.vue'
import Button from '@/components/buttons/Button.vue'

export default {
  name: 'Info',
  components: {
    Button,
    Logo
  },
  data() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/_config.scss';

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #button-box {
      width: 100px;
      position: fixed;
      bottom: 20px;
      right: 20px;
    }
  }
  #logo {
    margin: 50px 0 
  ;
    width: 100%;
    max-width: 340px;
  } 

  .text {
    margin: 50px 20%;
    text-align: center;
    h2 {
      margin-bottom: 25px;
    }
    h3 {
      margin: 15px 0;
    }
    p {
      text-align: justify;
    }
  }

  #impressum {
    background: $primary;
    text-align: left;
    #impressum-text {
      margin: 50px 20%;
    }
    h2 {
      color: $color;
      margin: 30px 0 10px 0;
      font-size: 30px;
    }
    h3 {
      color: $color;
      margin: 15px 0 10px 0;
      font-size: 25px;
    }
    p {
      color: white;
    }
    a {
      color: $color;
      text-decoration: none;
    }
    #probButton {
      position: fixed;
    }
  }
</style>