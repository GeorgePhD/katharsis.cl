import './catalogo-de-artistas.css'

const CatalogoDeArtistas = () => {

    return (
        <div className='inicio-content'>
            <h1>Catalogo de Artistas</h1>
                <p className="text">Descubre a talentosos artistas que han confiado en Katharsis para dar vida a su música. Desde voces cautivadoras hasta sonidos innovadores, nuestro catálogo abarca una variedad de géneros y estilos.</p>
                <div className="catalogo">
                    <h2 className='subtitle'>Pachapakari (Enlace al perfil del artista)</h2>
                    <ul>
                        <li className='text'>Género: música medicinal</li>
                        <li className='text'>Destacados: [Breve descripción o logros del artista]</li>
                    </ul>
                </div>
                <div className="catalogo">
                    <h2 className='subtitle'>Felixman (Enlace al perfil del artista)</h2>
                    <ul>
                        <li className='text'>Género: hip hop</li>
                        <li className='text'>Destacados: [Breve descripción o logros del artista]</li>
                    </ul>
                </div>
            

        </div>
    )
}

export default CatalogoDeArtistas