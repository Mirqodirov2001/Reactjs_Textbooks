import Header from "./components/Header";
import rasm from './assets/images/IMAGE (3).jpg'
import rasm1 from './assets/images/city.jpg'


const App = () => {
  let appName="React.JS";
  return (
    <>
      <Header />

      <section id="intro">
        <div className="container">
          <div className="wrapper">

            <div className="img">
              <img src={rasm} />
            </div>
            <div className='text'>
              <p className='text1'>Illustration</p>
              <h1>Japan House opens in mountainside to foster pea creativity.</h1>
              <p className='p2'>Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam accusata, hinc justo falli id eum, ferri novum molestie eos cu.</p>
              <h4>By Reta Torphy</h4>
            </div>
          </div>
        </div>
      </section>


      <section id="card">
        <div className="container">
          <div className="wrapper">
            <div className="card1">
              <img src={rasm1} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App;
