import { img_person1, img_person2, img_person3, img_person4 } from "../../assets";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import styles from "./styles";

const Testimonials = () => {
    const testimonials = [
        {
            id: "1",
            image: img_person3,
            name: "Terry Crews",
            stars: 5,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            id: "2",
            image: img_person2,
            name: "Mary Anne",
            stars: 4,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            id: "3",
            image: img_person4,
            name: "Peter Parker",
            stars: 5,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            id: "4",
            image: img_person1,
            name: "Peter Parker 2",
            stars: 5,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
    ];
    return (
        <>
            <div className={styles().container}>
                <div className={styles().background}></div>
                <h1 className={styles().title}>Testimonials</h1>
                <div className={styles().containerCards}>
                    {testimonials.map((testimonial) => {
                        return (
                            <TestimonialsCard
                                key={testimonial.id}
                                {...testimonial}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Testimonials;
