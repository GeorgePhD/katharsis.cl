import React from 'react'
import './nosotros.css'
const Nosotros = () => {

    return (
        <div className='inicio-content'>
            <h1 className='title'>Perfil Profesional de Katharsis</h1>
            <h3 className='subtile'>Visión</h3>
            <p className='text'>En Katharsis, nos enorgullece ser más que una productora musical; somos arquitectos de experiencias auditivas. Nos esforzamos por elevar cada proyecto a nuevas alturas, proporcionando un sonido excepcional que resuene en la mente de nuestro público.</p>
            <h3 className='subtile'>Misión</h3>
            <p className='text'>Nuestra misión es materializar la visión única de cada cliente a través de la magia del sonido. Con un compromiso inquebrantable con la excelencia y la creatividad, buscamos no sólo satisfacer, sino superar las expectativas, transformando ideas en obras maestras sonoras.</p>
            <div className="inicio-iamges-container">
                <img className='katharsis-img' src="/katharsis.cl/public/img/Katharsis.png" alt="imagen de productora katharsis" />
                <img className='katharsis-img' src="/katharsis.cl/public/img/Colorful-Cool-Lonely-Man-Watching-the-Sunset-Photo-Album-Cover-(1).png" alt="imagen de productora katharsis" />
                <img className='katharsis-img' src="/katharsis.cl/public/img/Colorful-Cool-Lonely-Man-Watching-the-Sunset-Photo-Album-Cover-(2).png" alt="imagen de productora katharsis" />
                <img className='katharsis-img' src="/katharsis.cl/public/img/Colorful-Cool-Lonely-Man-Watching-the-Sunset-Photo-Album-Cover.png" alt="imagen de productora katharsis" />
            </div>
        </div>
    )
}

export default Nosotros