import '../App.css';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Chefs from '../components/Chefs';
import Services from '../components/services';
import Menu from '../components/Menu';

function Home() {

  return (
    <main className='relative w-full'>
      <Nav />
      <section className=' container pt-[50px] md:pt-[75px]  mx-auto flex flex-col md:flex-row '>
        <Hero />
      </section>
      <br/>
      <section className='container mt-12 mb-12 px-5 md:px-0 pb-12 mx-auto'>
        <h1 className='text-blue-500 mb-4 font-bold text-2xl md:text-3xl'>Food Is Always Ready 24/7</h1>
        <h2 className='text-xl md:text-2xl'>Check Out Our Menu And Order</h2>
        <Menu/>
      </section>
      <section className='mx-auto container'>
        <Chefs />
      </section>
      <br />
      <br />
      <section className='container mx-auto'>
      <h2 className="text-center md:text-left mb-7 text-xl font-bold md:text-2xl">
              OUR SERVICES
            </h2>
        <Services />
      </section>
    </main>
  );
}

export default Home;
