import './inicio-images-container.css';
import katharsisImage1 from '../../../public/img/Katharsis.png';
import katharsisImage2 from '../../../public/img/Colorful-Cool-Lonely-Man-Watching-the-Sunset-Photo-Album-Cover-(1).png';
import katharsisImage3 from '../../../public/img/Colorful-Cool-Lonely-Man-Watching-the-Sunset-Photo-Album-Cover-(2).png';
import katharsisImage4 from '../../../public/img/Colorful-Cool-Lonely-Man-Watching-the-Sunset-Photo-Album-Cover.png';
const InicioImagesContainer = () => {


    return (

        <div className="inicio-images-container">
                <img className='katharsis-img' src={katharsisImage1} alt="imagen de productora katharsis" />
                <img className='katharsis-img' src={katharsisImage2} alt="imagen de productora katharsis" />
                <img className='katharsis-img' src={katharsisImage3} alt="imagen de productora katharsis" />
                <img className='katharsis-img' src={katharsisImage4} alt="imagen de productora katharsis" />
            </div>
    )
}

export default InicioImagesContainer