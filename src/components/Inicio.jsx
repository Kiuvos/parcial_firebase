import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Inicio = () => {
  return (
    <div class='mb-5 container-sm'>
       <div className="BibliotecaUnicosta">
                <div className="titulo-root ">
                <img src="https://th.bing.com/th/id/OIP.Mh1RFleyFGYE5Y_BL6FalwAAAA?pid=ImgDet&rs=1" alt="site icon" width={50}/><h3>Biblioteca Unicosta</h3>
                </div>           
                <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.eeecec278b6b56f9a2b2ec29ae1c4a7d?rik=kRVc0ATgccOtsA&pid=ImgRaw&r=0"
          alt="First slide"
        />      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.usfq.edu.ec/sites/default/files/styles/min_mobile/public/2021-04/biblioteca.jpg"
          alt="Second slide"
        />      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/bibliotecasmedellin.gov.co/wp-content/uploads/2021/05/P1460649-1200x700.jpg"
          alt="Third slide"
        />       
      </Carousel.Item>
    </Carousel>
                <div className="Contenido-root">
                Con el propósito de contribuir al desarrollo educativo regional a nivel superior, se creó el 16 de Noviembre de 1970, la UNIVERSIDAD DE LA COSTA –CUC, entidad sin ánimo de lucro, dedicada a la formación de profesionales en el área de la ciencia, la tecnología, las humanidades, el arte y la filosofía
                <br />
                <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit adipisci doloribus commodi vero similique! Rem itaque, laborum distinctio sapiente, recusandae adipisci, provident laboriosam corrupti iure vitae officia? Doloribus, cupiditate recusandae!
                    Obcaecati, eos? Labore cupiditate quod culpa, deleniti quasi itaque nobis nemo, ut ex impedit facere voluptatem laudantium quam a perspiciatis eius minima doloribus nulla vel iusto ad sunt alias. Nihil?
                    Maxime, et. Quae debitis eius illum, cumque excepturi molestiae possimus delectus aperiam iure consequatur error eaque, hic aliquam voluptate. Adipisci consequatur atque quibusdam tempora id, excepturi optio dolore nostrum quae.
                </div>
            </div>
    </div>
  )
}

export default Inicio
