import DirectoryItem from '../directory-item/directory-item.component';
import {DirectoyContainer} from './directory.styles.jsx';

const Directory = ({ categories }) =>{
    return(
        <DirectoyContainer>
        { categories.map( ({id, title, imageUrl} ) => {
            return(
              <DirectoryItem key={id} id={id} title={title} imageUrl={imageUrl}/>
            )
          })
        };
        </DirectoyContainer>
    )
}

export default Directory;