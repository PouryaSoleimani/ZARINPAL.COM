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
    </>
  )
}

export default App
