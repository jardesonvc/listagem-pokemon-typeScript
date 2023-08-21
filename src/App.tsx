import logo from './assets/pokebool.png';
import sun from './assets/sun.png';
import bulbasaur from './assets/bulbasaur.gif';
import Ivysaur from './assets/ivysaur.gif';
import Venusaur from './assets/venusaur.gif';
import Charmander from './assets/charmander.gif';
import Charmeleon from './assets/charmeleon.gif';
import Charizard from './assets/charizard.gif';
import Squirtle from './assets/squirtle.gif';
import Wartortle from './assets/wartortle.gif';
import Blastoise from './assets/blastoise.gif';
import Caterpie from './assets/cartepier.gif';
import './App.css';
import './css/reset.css';
import './css/scrollbar.css';
import Header from './components/header';


function App() {
  return (
    <>
      
      <header>
        <a id='logoo' href="http://localhost:3000/">
          <img src={logo} className="logo" alt="pokebola" /> 
        </a>
        <button id='botao-alterar-tema'>
          <img src={sun} className="imagem-botao" alt="imagem do sol" />
        </button>
      </header>

      <main>
        <ul className="listagem-pokemon">
            <li className='cartao-pokemon'>
                <div className='informacoes'>
                  <span>Bulbasaur</span>
                  <span>#001</span>
                </div>

                <img src={bulbasaur} className="gif" alt="bulbasaur" />

                <ul className='tipos'>
                  <li className='tipo grama'>Grama</li>
                  <li className='tipo veneno'>Veneno</li>
                </ul>

                <p className='descricao'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, esse explicabo excepturi quaerat eaque doloremque inventore ad possimus iure corrupti neque obcaecati!</p>
            </li>

            <li className='cartao-pokemon'>
                <div className='informacoes'>
                  <span>Ivysaur</span>
                  <span>#002</span>
                </div>

                <img src={Ivysaur} className="gif" alt="Ivysaur" />

                <ul className='tipos'>
                  <li className='tipo grama'>Grama</li>
                  <li className='tipo veneno'>Veneno</li>
                </ul>
                
                <p className='descricao'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, esse explicabo excepturi quaerat eaque doloremque inventore ad possimus iure corrupti neque obcaecati!</p>
            </li>

            <li className='cartao-pokemon'>
                <div className='informacoes'>
                  <span>Venusaur</span>
                  <span>#003</span>
                </div>

                <img src={Venusaur} className="gif" alt="Venusaur" />

                <ul className='tipos'>
                  <li className='tipo grama'>Grama</li>
                  <li className='tipo veneno'>Veneno</li>
                </ul>
                
                <p className='descricao'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, esse explicabo excepturi quaerat eaque doloremque inventore ad possimus iure corrupti neque obcaecati!</p>
            </li>

            <li className='cartao-pokemon'>
                <div className='informacoes'>
                  <span>Charmander</span>
                  <span>#004</span>
                </div>

                <img src={Charmander} className="gif" alt="Charmander" />

                <ul className='tipos'>
                  <li className='tipo fogo'>Fogo</li>
                </ul>
                
                <p className='descricao'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, esse explicabo excepturi quaerat eaque doloremque inventore ad possimus iure corrupti neque obcaecati!</p>
            </li>

            <li className='cartao-pokemon'>
                <div className='informacoes'>
                  <span>Charmeleon</span>
                  <span>#005</span>
                </div>

                <img src={Charmeleon} className="gif" alt="Charmeleon" />

                <ul className='tipos'>
                  <li className='tipo fogo'>Fogo</li>
                </ul>
                
                <p className='descricao'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, esse explicabo excepturi quaerat eaque doloremque inventore ad possimus iure corrupti neque obcaecati!</p>
            </li>

            <li className='cartao-pokemon'>
                <div className='informacoes'>
                  <span>Charizard</span>
                  <span>#006</span>
                </div>

                <img src={Charizard} className="gif" alt="Charizard" />

                <ul className='tipos'>
                  <li className='tipo fogo'>Fogo</li>
                </ul>
                
                <p className='descricao'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, esse explicabo excepturi quaerat eaque doloremque inventore ad possimus iure corrupti neque obcaecati!</p>
            </li>

            <li className='cartao-pokemon'>
                <div className='informacoes'>
                  <span>Squirtle</span>
                  <span>#007</span>
                </div>

                <img src={Squirtle} className="gif" alt="Squirtle" />

                <ul className='tipos'>
                  <li className='tipo agua'>Água</li>
                </ul>
                
                <p className='descricao'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, esse explicabo excepturi quaerat eaque doloremque inventore ad possimus iure corrupti neque obcaecati!</p>
            </li>

            <li className='cartao-pokemon'>
                <div className='informacoes'>
                  <span>Wartortle</span>
                  <span>#008</span>
                </div>

                <img src={Wartortle} className="gif" alt="Wartortle" />

                <ul className='tipos'>
                  <li className='tipo agua'>Água</li>
                </ul>
                
                <p className='descricao'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, esse explicabo excepturi quaerat eaque doloremque inventore ad possimus iure corrupti neque obcaecati!</p>
            </li>

            <li className='cartao-pokemon'>
                <div className='informacoes'>
                  <span>Blastoise</span>
                  <span>#009</span>
                </div>

                <img src={Blastoise} className="gif" alt="Blastoise" />

                <ul className='tipos'>
                  <li className='tipo agua'>Água</li>
                </ul>
                
                <p className='descricao'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, esse explicabo excepturi quaerat eaque doloremque inventore ad possimus iure corrupti neque obcaecati!</p>
            </li>

            <li className='cartao-pokemon'>
                <div className='informacoes'>
                  <span>Caterpie</span>
                  <span>#010</span>
                </div>

                <img src={Caterpie} className="gif" alt="Caterpie" />

                <ul className='tipos'>
                  <li className='tipo inseto'>Inseto</li>
                </ul>
                
                <p className='descricao'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, esse explicabo excepturi quaerat eaque doloremque inventore ad possimus iure corrupti neque obcaecati!</p>
            </li>
        </ul>
      </main>
      <Header />
    </>
  );
}

export default App;
