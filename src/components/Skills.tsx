'use client';
import { DiHtml5, DiCss3, DiJavascript1, DiPostgresql, DiGit, DiReact, } from 'react-icons/di'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export function Skills() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section id="skills">
            <h2>Habilidades</h2>
            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true} 
                infinite={true}
                autoPlay={true}
                shouldResetAutoplay={false}
                keyBoardControl={true}
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                <div className="item">
                    <span>HTML5</span>
                    <DiHtml5 size={150} color="#f3632c" />
                </div>
                <div className="item">
                    <span>CSS</span>
                    <DiCss3 size={150} color="#2965f1" />
                </div>
                <div className="item">
                    <span>JavaScript</span>
                    <DiJavascript1 size={150} color="#f1e11b" />
                </div>
                <div className="item">
                    <span>React</span>
                    <DiReact size={150} color="#61dafb" />
                </div>
                <div className="item">
                    <span>PostgreSQL</span>
                    <DiPostgresql size={150} color="#2e6594" />
                </div>
                <div className="item">
                    <span>Git</span>
                    <DiGit size={150} color="#f35434" />
                </div>
            </Carousel>
        </section>
    )
}
