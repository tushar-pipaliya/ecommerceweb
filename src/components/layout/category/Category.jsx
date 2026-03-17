import React from 'react';

function Category() {
    const data = [
        { category: "Electronics", categoryIcon: '💻' },
        { category: "Jewelery", categoryIcon: '💍' },
        { category: "Men's Clothing", categoryIcon: '👕' },
        { category: "Women's Clothing", categoryIcon: '👗' }
    ];

    return (
        <div className='py-12 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-10 text-gray-800'>
                    Shop by Category
                </h2>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className='group cursor-pointer bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center'
                        >
                            <div className='bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors'>
                                <span className='text-4xl'>{item.categoryIcon}</span>
                            </div>
                            <h3 className='font-semibold text-lg text-gray-700 group-hover:text-blue-600 transition-colors'>
                                {item.category}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Category;