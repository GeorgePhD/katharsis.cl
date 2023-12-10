import React from 'react';
import './inicio-content.css';
import InicioImagesContainer from '../InicioImagesContainer/InicioImagesContainer';
const InicioContent = () => {

    return (

        <div className='inicio-content'>
            <h1 className='info'>Importante: <br /> el sitio tendrá estilos básicos y serán modificados a medida que vamos hablando y poniéndonos de acuerdo. Por ahora nos enfocamos en la estructura y una vez finalizada esta, le damos estilos. Las imégenes cargan lento por ahora, la carga será rápida cuando las optimicemos. El menu funciona ya. El sitio web deberá ser visto desde un notebook por ahora ya que los estilos de celular se harán una vez terminados los estilos para notebook.</h1>
            <h1 className='title'>Perfil Profesional de Katharsis</h1>
            <h3 className='subtile'>Visión</h3>
            <p className='text'>En Katharsis, nos enorgullece ser más que una productora musical; somos arquitectos de experiencias auditivas. Nos esforzamos por elevar cada proyecto a nuevas alturas, proporcionando un sonido excepcional que resuene en la mente de nuestro público.</p>
            <h3 className='subtile'>Misión</h3>
            <p className='text'>Nuestra misión es materializar la visión única de cada cliente a través de la magia del sonido. Con un compromiso inquebrantable con la excelencia y la creatividad, buscamos no sólo satisfacer, sino superar las expectativas, transformando ideas en obras maestras sonoras.</p>
            <h3 className='subtile'>Valores</h3>
            <div className="valores-container">
                <div className="valores-container-section">
                    <h4 className='subtile'>Innovación</h4>
                    <p className='text'>Abrazamos la vanguardia y creativadad para ofrecer soluciones únicas.</p>
                </div>
                <div className="valores-container-section">
                    <h4 className='subtile'>Compromiso</h4>
                    <p className='text'>Nos dedicamos por completo a cada proyecto, asegurando resultados de la más alta calidad.</p>
                </div>
                <div className="valores-container-section">
                    <h4 className='subtile'>Colaboración</h4>
                    <p className='text'>Fomentamos un ambiente donde las ideas fluyan y la colaboración sea la clave del éxito.</p>
                </div>
                <div className="valores-container-section">
                    <h4 className='subtile'>Integridad</h4>
                    <p className='text'>Nos regimos por los más altos estándares éticos en todo lo que hacemos.</p>
                </div>
                
            </div>
            
            
            <InicioImagesContainer />
        </div>
    )
}

export default InicioContent