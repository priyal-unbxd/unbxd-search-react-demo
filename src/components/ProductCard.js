import React,{useState} from 'react';
import {Link} from 'react-router-dom'

const ProductItemComponent = (props) => {
    const { itemData, idAttribute, onClick, idx, showSwatches } = props;

    const getParsedProduct = ({ itemData, idAttribute }) => {
        const { imageUrl, title, productUrl, variants,displayPrice,salePrice,size,color} = itemData;
        const swatchValues = variants.map((variant, index) => {
            return {
                swatchId: variant.variantId,
                imageUrl: variant.v_imageUrl,
                swatchImageUrl: variant.v_swatchUrl,
                active: index === 0 ? true : false
            };
        });

        const productValues = {
            idAttribute,
            imageUrl,
            title,
            productUrl,
            swatchValues,
            displayPrice,
            salePrice,
            size,
            color
        };
        return productValues;
    };

    const handleSwatchClick = (event) => {
        const currentSwatchId = event.target.dataset['swatchid'];
        const updatedSwatches = productValues.swatchValues.map((swatch) => {
            if (swatch.swatchId === currentSwatchId) {
                return { ...swatch, active: true };
            } else {
                return { ...swatch, active: false };
            }
        });
        setProductValues({ ...productValues, swatchValues: updatedSwatches });
    };

    const [productValues, setProductValues] = useState(
        getParsedProduct({ itemData, idAttribute })
    );

    const [activeSwatch] = productValues['swatchValues'].filter((swatch) => {
        return swatch.active;
    });

    const product = { ...productValues, ...activeSwatch };
    const { imageUrl, title, productUrl, swatchValues,displayPrice,salePrice,size,color} = product;
    const uniqueId = idAttribute;
    const prank = idx + 1;
    
    return (
        <div key={title} className="UNX-productCard__container">
            <div
                className="details"
                data-uniqueid={uniqueId}
                data-prank={prank}
                onClick={onClick}
            >
                <Link
                    to={`/product/${uniqueId}`}
                    state={{title:title,imageUrl:imageUrl,displayPrice:displayPrice,salePrice:salePrice,size:size,color:color}}
                    data-uniqueid={uniqueId}
                    data-prank={prank}
                >
                    <img
                        className="-image"
                        src={imageUrl}
                        data-uniqueid={uniqueId}
                        data-prank={prank}
                        alt={title}
                    />
                </Link>
                <div
                    className="-title"
                    data-uniqueid={uniqueId}
                    data-prank={prank}
                >
                    {title}
                </div>

                <div
                    className="-price"
                    data-uniqueid={uniqueId}
                    data-prank={prank}
                >
                    {salePrice}
                </div>
                <div
                    className="-price -displayprice"
                    data-uniqueid={uniqueId}
                    data-prank={prank}
                >
                    {displayPrice}
                </div>

  
                
            </div>
            {showSwatches && (
                <div className="UNX-swatch__list">
                    {swatchValues.map((swatch,index) => {
                        const { swatchImageUrl, swatchId } = swatch;
                        return (
                            <img
                                className="-image"
                                src={swatchImageUrl}
                                key={swatchId}
                                data-swatchid={swatchId}
                                onClick={handleSwatchClick}
                                alt={title}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ProductItemComponent