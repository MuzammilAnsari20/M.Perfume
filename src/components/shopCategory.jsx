import sh1 from '../assets/img/collect-item5.png'
import sh2 from '../assets/img/collect-item4.png'
import sh3 from '../assets/img/collect-item3.png'
import sh4 from '../assets/img/collect-item1.png'
import sh5 from '../assets/img/collect-item2.png'

function ShopCategory() {
    const ShopCategoryData = [
        { src: sh1, name: 'Unisex' },
        { src: sh2, name: 'Strong Perfume' },
        { src: sh3, name: 'Perfume Oil' },
        { src: sh4, name: 'Light Perfume' },
        { src: sh5, name: 'Fresh Perfume' }
    ]

    // 4 baar duplicate karo taake seamless loop guaranteed ho
    const marqueeItems = [...ShopCategoryData, ...ShopCategoryData, ...ShopCategoryData, ...ShopCategoryData]

    return (
        <div className="w-full flex justify-center items-center flex-col desktop-md:pb-[50px]!">

            <div className="text desktop-md:leading-10!">
                <h6 className="text-[14px]! desktop-md:text-[18px]! max-md:tracking-[3px]! max-md:text-[11px]!">
                    Shop by Category
                </h6>
                <h5 className="text-[28px]! max-md:text-[18px]! desktop-md:text-[38px]!">Perfume Collection</h5>
            </div>

            <div className="w-[90%] mt-[20px]! overflow-hidden">
                <div className="flex marquee-track">
                    {marqueeItems.map((i, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-[190px] max-md:w-[120px] desktop-md:w-[230px] flex items-center justify-center flex-col gap-[10px] px-[40px] max-md:px-[20px]"
                        >
                            <div className="w-full rounded-full aspect-square overflow-hidden">
                                <img className="w-full h-full object-cover" src={i.src} alt={i.name} />
                            </div>
                            <h5 className="desktop-md:text-[24px] whitespace-nowrap">{i.name}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShopCategory