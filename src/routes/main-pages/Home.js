import Banner from '../../components/Banner';
import BottomBar from '../../components/Footer';
import Latest from '../../components/Latest';
import Header from '../../components/Navbar';
import Pack from '../../components/Pack';
import Quote from '../../components/Quote';
import SEO from '../../components/SEO';
import '../../styles/home.css'

const EditorPage = () => {
  return (
    <div className='home'>
      <SEO
        title="Elite Global Transit | International Shipping & Logistics"
        description="Discover reliable international shipping, freight forwarding, cargo transportation and logistics services with Elite Global Transit."
        path="/"
      />
      <Header/>
      <Banner/>
      <Quote/>
      <Pack/>
      <Latest/>
      <BottomBar/>
    </div>
  );
};

export default EditorPage;