import HTMLFlipBook from 'react-pageflip';
import '../assets/css/Flipbook.css';
export default function FlipBook(props) {
    let myHeight = window.innerHeight;
    let myWidth = window.innerWidth;
    const images = Array.from({ length: 44 }, (_, i) => i);

    return (
        <HTMLFlipBook
            height={myHeight * 0.8}
            minHeight={myHeight * 0.5}
            maxHeight={myHeight}
            width={myWidth * 0.4}
            minWidth={myWidth * 0.25}
            maxWidth={myWidth * 0.45}
            size="fixed"    
            drawShadow={true}
            showCover={true}
            mobileScrollSupport={true}
        >
            {images.map(index => (
                <img
                    key={index}
                    src={`/img/libroVisitas/visitas${index}.jpg`}
                    alt={
                        index === 0 ? "Tapa del libro de visitas"
                        : index === images.length-1 ? "Contratapa del libro de visitas"
                        : `Página ${index} del libro de visitas`
                    }
                    className="max-w-full h-auto rounded-lg shadow-lg"
                />
            ))}
        </HTMLFlipBook>
    );
}