//^ APP.TSX
import Header from './../components/Header';
import Parallax from './../components/Parallax';
import Payment from './../components/Payment';
import Social from './../components/Social';
import ZarinCard from './../components/ZarinCard';
import Payout from './../components/Payout';
import ZarinPlus from './../components/ZarinPlus';
import PaymentStandards from './../components/PaymentStandards';
import Options from './../components/Options';
import JoinBox from './../components/JoinBox';
import Support from './../components/Support';
import Footer from './../components/Footer';

function App() {

  return (
    <>
      <Header />
      <Parallax />
      <Payment />
      <Social />
      <ZarinCard />
      <Payout />
      <ZarinPlus />
      <PaymentStandards />
      <Options/>
      <JoinBox/>
      <Support/>
      <Footer/>
    </>
  )
}

export default App
