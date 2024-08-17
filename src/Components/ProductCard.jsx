import React from 'react';

const ProductCard = ({ product }) => {
    const date =product.creationDateTime.split("T")
    return (
        <div>
            <div className="card h-full bg-base-100 w-96 shadow-xl mx-auto">
                <figure>
                    <img
                        className='w-full h-64'
                        src={product?.productImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title w-full">
                        {product?.productName}!

                    </h2>
                    <div className="flex justify-between gap-2">

                        <div className='flex gap-2 '>
                            <p className='text-sm'>Rating :  </p>
                            <div className="badge badge-secondary"> {product?.ratings}</div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className='font-bold'>Price :  </p>
                            <div className="badge badge-secondary font-extrabold">$ {product?.price}</div>
                        </div>
                    </div>
                    <p>{product?.description}</p>
                    <p><span>creation Date & Time :</span><br />{date[0]} & {date[1]}</p>
                   
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{product?.category}</div>
                        <div className="badge badge-outline">{product?.brandName}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;