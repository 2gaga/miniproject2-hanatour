import Visual from '../../components/home/visual/Visual';
import Header from '../../components/common/header/header';
import Menu from '../../components/home/menu/Menu';
import Sec01 from '../../components/home/sec01/Sec01';
import Sec02 from '../../components/home/sec02/Sec02';
import Banner from '../../components/home/banner/Banner';
import Sec03 from '../../components/home/sec03/Sec03';
import Sec04 from '../../components/home/sec04/Sec04';
import Sec05 from '../../components/home/sec05/Sec05';
import Sec06 from '../../components/home/sec06/Sec06';
import Footer from '../../components/common/footer/Footer';
import './style.css';

const Home = () => {
    return (
        <>
            <Header />
            <Visual />
            <Menu />
            <Sec01 />
            <Sec02 />
            <Banner />
            <Sec03 />
            <Sec04 />
            <Sec05 />
            <Sec06 />
            <Footer />
        </>
    );
};

export default Home;
