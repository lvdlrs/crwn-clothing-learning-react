import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = ({ categories }) =>{
    return(
        <div className="diretories-container">
        { categories.map( ({id, title, imageUrl} ) => {
            return(
              <DirectoryItem key={id} id={id} title={title} imageUrl={imageUrl}/>
            )
          })
        };
        </div>
    )
}

export default Directory;