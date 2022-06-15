import { useEffect } from 'react';
import SmoothScrollTop from 'smooth-scroll-top';

const Footer = () => {

    useEffect(() => {
        const smoothScroll = new SmoothScrollTop();
        smoothScroll.init();
        return () => smoothScroll.destroy();
    }, []);

    return (
        <>
            {/* <footer className="mt-99 px-24" style={{ backgroundColor: '65006c' }}>
                <span className="text-sm text-gray-400 text-center block py-12 mx-auto">© 2022 Meta Warriors™ All Rights Reserved.</span>
            </footer> */}
        </>

    )
}

export default Footer;