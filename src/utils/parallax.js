const parallax = (ratio, maxParallax, set) => {
    const handleScroll = () => {
        let position = window.pageYOffset;
        position = position / ratio;
        if (position > maxParallax) position = maxParallax;
        set(position);
        // console.log(scrollPosition);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
};

export default parallax;
