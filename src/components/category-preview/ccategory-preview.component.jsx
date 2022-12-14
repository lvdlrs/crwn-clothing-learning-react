import ProductCard from '../product-card/product-card.component';
import {CatPreviewContainer, CatTitleLink, CatProducts} from './category-preview.styles.jsx'

const CategoryPreview = ( { title, products }) => {
    return(
        <CatPreviewContainer>
            <h2>
                <CatTitleLink to={title}>{title.toUpperCase()}</CatTitleLink>
            </h2>
            <CatProducts>
                {
                    products
                    .filter( ( _, idx ) => idx < 4 )
                    .map( (product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </CatProducts>
        </CatPreviewContainer>
    )

}

export default CategoryPreview;