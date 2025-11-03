import { useEffect } from "react";

export const useAOS = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      [data-aos] {
        opacity: 0;
        transition-property: opacity, transform;
      }
      [data-aos].aos-animate {
        opacity: 1;
      }
      [data-aos="fade-up"] {
        transform: translateY(50px);
      }
      [data-aos="fade-up"].aos-animate {
        transform: translateY(0);
      }
      [data-aos="fade-down"] {
        transform: translateY(-50px);
      }
      [data-aos="fade-down"].aos-animate {
        transform: translateY(0);
      }
      [data-aos="fade-left"] {
        transform: translateX(50px);
      }
      [data-aos="fade-left"].aos-animate {
        transform: translateX(0);
      }
      [data-aos="fade-right"] {
        transform: translateX(-50px);
      }
      [data-aos="fade-right"].aos-animate {
        transform: translateX(0);
      }
      [data-aos="zoom-in"] {
        transform: scale(0.8);
      }
      [data-aos="zoom-in"].aos-animate {
        transform: scale(1);
      }
    `;
    document.head.appendChild(style);

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

    document.querySelectorAll("[data-aos]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};
