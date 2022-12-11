import './directory-item.styles.scss';


const DirectoryItem = ({ id, imageUrl, title }) => {
    return(
        <div key={id} className="directory-item-container">
            <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className="body">
            <h2>{title}</h2>
            <p>Shop Now</p>
            </div>
      </div>
    )
}

export default DirectoryItem;