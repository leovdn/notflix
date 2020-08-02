import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';
import './style.css';
import 'aos/dist/aos.css';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1000 });

    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div className="loader" />)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Com mais de 250 premiações, The Witcher 3 é o jogo mais premiado da história dos games. Produzido pelo estúdio polonês CD Projekt Red, o título se mostrou um ambicioso Open-World RPG, dando sequência à já então popular série de jogos inspirados nos livros de Andrzej Sapkowski"
              />
              <div
                className="scrollSection"
                data-aos="fade-right"
              >
                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            </div>
          );
        }

        return (
          <div
            className="scrollSection"
            data-aos="fade-up"
          >
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          </div>
        );
      })}
    </PageDefault>
  );
}

export default Home;
