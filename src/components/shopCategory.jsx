import { useRef, useState, useEffect } from 'react';
import sh1 from '../assets/img/collect-item5.png'
import sh2 from '../assets/img/collect-item4.png'
import sh3 from '../assets/img/collect-item3.png'
import sh4 from '../assets/img/collect-item1.png'
import sh5 from '../assets/img/collect-item2.png'

function ShopCategory() {
    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const ShopCategoryData = [
        { src: sh1, name: 'Unisex' },
        { src: sh2, name: 'Strong Perfume' },
        { src: sh3, name: 'Perfume Oil' },
        { src: sh4, name: 'Light Perfume' },
        { src: sh5, name: 'Fresh Perfume' }
    ]

    // 4 baar duplicate karo taake seamless loop guaranteed ho
    const marqueeItems = [...ShopCategoryData, ...ShopCategoryData, ...ShopCategoryData, ...ShopCategoryData]

    useEffect(() => {
        const slider = sliderRef.current;
        let animationFrameId;

        const autoScroll = () => {
            if (slider && !isDown && !isHovered) {
                slider.scrollLeft += 1;
                // Seamless loop reset when reaching halfway
                if (slider.scrollLeft >= slider.scrollWidth / 2) {
                     slider.scrollLeft -= slider.scrollWidth / 2;
                }
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isDown, isHovered]);

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="w-full flex justify-center items-center flex-col desktop-md:pb-[50px]!">

           <div className="text desktop-md:leading-10! hidden! max-md:flex! w-full flex-col items-center justify-center mb-10">
                    <h6 className="text-[#E670FB] text-[14px]! desktop-md:text-[18px]! tracking-[5px]! max-md:text-[11px]! uppercase font-medium">
                        Shop by Category
                    </h6>
                    <h5 className="text-[32px]! max-md:text-[24px]! desktop-md:text-[42px]! font-bold text-white mt-2 text-center">Perfume Collection</h5>
            </div>

            <div className="w-[90%] max-md:w-full mt-[20px]! overflow-hidden">
                <div 
                    ref={sliderRef}
                    className={`flex overflow-x-auto no-scrollbar desktop-md:gap-20  gap-5 ${isDown ? 'cursor-grabbing' : 'cursor-grab'}`}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {marqueeItems.map((i, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-[190px] max-md:w-[90px] desktop-md:w-[230px] flex items-center justify-center flex-col gap-[10px] px-[40px] max-md:px-[20px] mx-[10px] select-none"
                        >
                            <div className="w-full rounded-full aspect-square overflow-hidden pointer-events-none">
                                <img className="w-full h-full object-cover pointer-events-none" src={i.src} alt={i.name} draggable="false" />
                            </div>
                            <h5 className="desktop-md:text-[24px] max-md:text-[12px] whitespace-nowrap pointer-events-none">{i.name}</h5>
                        </div>
                    ))}
                </div>
            </div>
            
            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    )
}

export default ShopCategory