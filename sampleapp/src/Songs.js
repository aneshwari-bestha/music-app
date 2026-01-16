import priya from "./priya.mpeg";
import asalepilla from "./asalepilla.mpeg";
import puvvullodagunna from "./puvvullodagunna.mpeg";
import kallumoosi from "./kallumoosi.mpeg";
import hrudayam from "./hrudayam.mpeg";
import hairabba from "./hairabba.mpeg";
import gelupu from "./gelupu.mpeg";
import nigama from "./nigama.mpeg";
import Kondalalo from "./kondalalo.mpeg";
import adivo from "./adivo.mpeg";
import kkkg from "./kkkg.mpeg";
import hr from "./hr.mpeg";
import kunfaya from "./kunfaya.mpeg";
import tujme from "./tujme.mpeg";
import tumhiho from "./tumhiho.mpeg";
import orum from "./orum.mpeg";
import dharshana from "./dharshana.mpeg";
import mukunda from "./mukunda.mpeg";
import vizhi from "./vizhi.mpeg";
import adada from "./adada.mpeg";
import asakooda from "./asakooda.mpeg";
import munbeva from "./munbeva.mpeg";
import ennasolla from "./ennasolla.mpeg";
import dragon from "./dragon.mpeg";
import adiye from "./adiye.mpeg";
import whosays from "./whosays.mpeg";
import levitating from "./levitating.mpeg";
import senorita from "./senorita.mpeg";
import cheapthrillss from "./cheapthrillss.mpeg";
import beliver from "./beliver.mpeg";
import baby from "./baby.mpeg";
import calmdown from "./calmdown.mpeg";
import perfect from "./perfect.mpeg";
import blue from "./blue.mpeg";
import shapeofyou from "./shapeofyou.mpeg";
function Songs({name,language,onBack}) {
  return (
    <div className="songs-row">
        {language === "telugu" &&(
            <>
        <h2>Here are few Telugu songs for you {name}:</h2>
    <div>
        <p>Nigama Nigamantha(Annamayya)</p>
        <audio controls>
          <source src={nigama} type="audio/mpeg" />
        </audio>
       </div>
    <div>
        <p>Kondalalo Nelakonna(Annamayya)</p>
        <audio controls>
          <source src={nigama} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Adivo Alladivo (Annamayya)</p>
        <audio controls>
          <source src={adivo} type="audio/mpeg" />
        </audio>
    </div>
    <div className="song-item">
        <p>Priya Priya(Jeans)</p>
        <audio controls>
          <source src={priya} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Asale Pilla(ghatikudu)</p>
        <audio controls>
          <source src={asalepilla} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Puvvullo dagunna(Jeans)</p>
        <audio controls>
          <source src={puvvullodagunna} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Kallumoosi yochiste(vedokkade)</p>
        <audio controls>
          <source src={kallumoosi} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Hrudayam ekkadunnadhi</p>
        <audio controls>
          <source src={hrudayam} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Hairabba(Jeans)</p>
        <audio controls>
          <source src={hairabba} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>GelupuLeni Samaram(Mahanati)</p>
        <audio controls>
          <source src={gelupu} type="audio/mpeg" />
        </audio><br></br>
        <button className="four" onClick={onBack}>⬅ Back</button>
    </div>  </>  )}


    {language ==="hindi" && ( <>
        <h2>Here are few Hindi songs for you {name}:</h2>
    <div>
        <p>Bhole Chudiya(kkkg)</p>
        <audio controls>
          <source src={kkkg} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Au Sunao Pyar ki ek kahani</p>
        <audio controls>
          <source src={hr} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Kun Faya Kun</p>
        <audio controls>
          <source src={kunfaya} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Tuj me rab dektha hai</p>
        <audio controls>
          <source src={tujme} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Tumhi Ho</p>
        <audio controls>
          <source src={tumhiho} type="audio/mpeg" />
        </audio><br></br>
        <button className="four" onClick={onBack}>⬅ Back</button>
    </div>  </>  )}


    {language ==="tamil" && (<>
    <div>
        <h1>Here are few Tamil songs for you {name}:</h1>
        <p>Unna than Pathuka</p>
        <audio controls>
          <source src={orum} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Dharshana</p>
        <audio controls>
          <source src={dharshana} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Mukunda Mukunda</p>
        <audio controls>
          <source src={mukunda} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Vizhi Veekura</p>
        <audio controls>
          <source src={vizhi} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Adada Mazhaida</p>
        <audio controls>
          <source src={adada} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Asakooda</p>
        <audio controls>
          <source src={asakooda} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Munbe vaa</p>
        <audio controls>
          <source src={munbeva} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Enna Solla</p>
        <audio controls>
          <source src={ennasolla} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Vazhithunayie</p>
        <audio controls>
          <source src={dragon} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Adiye</p>
        <audio controls>
          <source src={adiye} type="audio/mpeg" />
        </audio><br></br>
        <button className="four" onClick={onBack}>⬅ Back</button>
    </div>  </>  )}


    {language ==="english" && ( <>
        <h1>Here are few English songs for you {name}:</h1>
    <div>
        <p>Who Says</p>
        <audio controls>
          <source src={whosays} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Levitating</p>
        <audio controls>
          <source src={levitating} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Senorita</p>
        <audio controls>
          <source src={senorita} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Cheapthrills</p>
        <audio controls>
          <source src={cheapthrillss} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Beliver</p>
        <audio controls>
          <source src={beliver} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Baby</p>
        <audio controls>
          <source src={baby} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Calmdown</p>
        <audio controls>
          <source src={calmdown} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Perfect</p>
        <audio controls>
          <source src={perfect} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Blue</p>
        <audio controls>
          <source src={blue} type="audio/mpeg" />
        </audio>
    </div>
    <div>
        <p>Shape of you</p>
        <audio controls>
          <source src={shapeofyou} type="audio/mpeg" />
        </audio><br></br>
        <button className="four" onClick={onBack}>⬅ Back</button>
    </div>   </>  )}
</div>
  );
}
export default Songs;
