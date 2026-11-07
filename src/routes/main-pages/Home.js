import Banner from '../../components/Banner';
import BottomBar from '../../components/Footer';
import Latest from '../../components/Latest';
import Header from '../../components/Navbar';
import Pack from '../../components/Pack';
import Quote from '../../components/Quote';
import '../../styles/home.css'

const EditorPage = () => {
  return (
    <div className='home'>
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