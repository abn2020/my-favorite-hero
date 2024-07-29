import loading from '../../assets/loading.svg';
import './style.css';


const Loading = () => {
    return (
        <div className='loading'>
            <img className="loading-svg" src={loading} alt="Loading..." title="Carregando..." />
        </div>
    )
}

export default Loading;