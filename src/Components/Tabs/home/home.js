import cules from './cules.png'
import problem from './problem.png'
import total from './total.png'
import ferti from './fertilizare.png'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export default function Home() {
  return(
      <Carousel className='box' fade>
          <Carousel.Item >   
          <a href="/detalii">
            <img
                className="d-block w-100"
                src={problem}                
              />          
          </a>
            <Carousel.Caption>
              <h1 className='text'>Probleme</h1>
              <p className='text'>Adauga sau vizioneaza problemele existente din plantatie.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
          <a href="/cules">

            <img
              className="d-block w-100"
              src={cules}
            />
          </a>
            <Carousel.Caption>
              <h1 className='text'>Adauga kilograme.</h1>
              <p className='text'>Adauga cantitaea culeasa pentru un culegator.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
          <a href="/total">
            <img
              className="d-block w-100"
              src={total}
            />
          </a>
            <Carousel.Caption>
            <h1 className='text'>Cantitate culeasa</h1>
              <p className='text'>Vizioneaza cantitatea totala culeasa, si cantitatea culeasa de fiecare culegator.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <a href="/fertilizare">
            <img
              className="d-block w-100"
              src={ferti}
            />
          </a>
            <Carousel.Caption>
              <h1 className='text'>Fertilizare</h1>
              <p className='text'>Programul de fertilizare pe saptamani.</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
        

  );
}
