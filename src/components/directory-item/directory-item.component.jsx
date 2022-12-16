import { DirectoryItemContainer, BackgroundImage, ItemBody } from './directory-item.styles.jsx';


const DirectoryItem = ({ id, imageUrl, title }) => {
    return(
            <DirectoryItemContainer to={"/shop/" + title} key={id}>
                <BackgroundImage imageUrl={imageUrl} />
                <ItemBody>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </ItemBody>
            </DirectoryItemContainer>

    )
}

export default DirectoryItem;