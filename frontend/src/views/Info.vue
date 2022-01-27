
<template>
  <div class="info">
    <div id="button-box">
      <Button :text='"Back"' id="probButton" @click="$router.push('/')" />
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
      <p><sub>5</sub><a href="https://www.klimafakten.de/meldung/neue-infografik-macht-ein-halbes-grad-weniger-erderwaermung-einen-unterschied">klimafackten.de</a>, <a href="https://www.ipcc.ch/sr15/chapter/spm/">IPCC Report</a></p>
      <p><sub>6</sub>The Facts are a summary of the chapter "2 Degrees more" from the Book <a href="https://www.rowohlt.de/buch/mark-lynas-6-grad-mehr-9783499004421">"6 Degrees more"</a> by Mark Lynas. Also we fackt checked the predictions by comparing them to <a href="https://www.klimafakten.de/meldung/neue-infografik-macht-ein-halbes-grad-weniger-erderwaermung-einen-unterschied">klimafackten.de</a> and the <a href="https://www.ipcc.ch/sr15/chapter/spm/">latest IPPC report</a>.</p>
      <p><sub>7</sub>The Facts are a summary of the chapter "3 Degrees more" from the Book <a href="https://www.rowohlt.de/buch/mark-lynas-6-grad-mehr-9783499004421">"6 Degrees more"</a> by Mark Lynas. Also we fackt checked the predictions by comparing them to the <a href="https://www.ipcc.ch/sr15/chapter/spm/">latest IPPC report</a>.</p>
      
      
    </div>
    <div id="impressum">
      <div id="impressum-text">
        <h2>Service provider according to § 5 para. 1 german telemedia act and § 55 para. 1 german broadcasting treaty</h2>
        <p>
        University of applied sciences Augsburg<br>
        An der Hochschule 1<br>
        86161 Augsburg<br><br>
        Phone: <a href= "tel:+4982155860">+49 (0)821-5586-0</a><br>
        Fax: +49 (0)821-5586-3222<br><br>
        email: <a href= "mailto:info@hs-augsburg.de">info@hs-augsburg.de</a><br><br>
        authorised representative<br>
        President Prof. Dr. Gordon Thomas Rohrmair according to Art. 21 para. 7 Bavarian University Law
        </p>
        <h2>VAT ID</h2>
        <p>DE 811335517<br>
        (Staatsoberkasse Bayern, Landshut)
        </p>
        <h2>Legal form</h2>
        <p>The university of applied sciences Augsburg is a corporation under public law according to Art. 11 Para. 1 Sentence 1 Bavarian University Law and at the same time a state institution, Art. 11 Para. 1 Sentence 2 Bavarian University Law.It handles its own affairs as a corporation, state affairs as a state institution - Art. 12 Para. 1 Bavarian University Law.<br>
        </p>
        <h2>Competent supervisory authority</h2>
        <p>Bavarian State Ministry<br>
        for Economy and Art<br>
        80327 Munich
        </p>
        <h2>Copyright</h2>
        <p>Copying and reuse of text and graphics requires the consent of Augsburg College.
        </p>
        <h2>Photos | Image and copyrights held by:</h2>
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
        <h2>No warranty</h2>
        <p>The right to make changes as a result of ministerial decisions taken in the meantime and in the context of general reforms in the education sector and in the personnel sector must be reserved.
        </p>
        <h2>Rules</h2>
        <p>The presentation of Augsburg University also contains individually designed pages, which are the responsibility of the respective authors. These pages must not contain any content that damages the reputation of the university. The university management reserves the right to take measures in case of non-compliance with these rules.
        </p>
        <h2>Data protection</h2>
        <p>The responsible party within the meaning of the EU General Data Protection Regulation (hereinafter: DSGVO) and other national data protection laws of the member states as well as other data protection regulations is:<br><br>
        University of applied sciences Augsburg,<br>
        Corporation under public law pursuant to Art. 11 Para. 1 S. 1 Bavarian University Law,<br>
        represented by its President Prof. Dr. Gordon T. Rohrmair<br><br>
        An der Hochschule 1<br>
        86161 Augsburg<br><br>
        Phone: <a href= "tel:+4982155860">+49 (0)821-5586-0</a><br>
        Fax: +49 (0)821-5586-3222<br><br>
        <a href= "mailto:info@hs-augsburg.de">info@hs-augsburg.de</a>
        </p>
        <h3>Name and address of the data protection officer</h3>
        <p>Internal contact persons for data protection: Anna Fichte and Christiane Schroth (Legal Office)<br><br>
        External data protection officer at Augsburg University of Applied Sciences<br><br>
        Attorney at law Dr. Karsten Kinast, LL.M.<br>
        KINAST Law Firm Ltd.<br>
        Hohenzollernring 54<br>
        D-50672 Cologne<br><br>
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