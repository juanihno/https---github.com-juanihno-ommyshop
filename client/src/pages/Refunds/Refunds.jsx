import "./Refunds.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";




const Refunds = () => {

  return (
    <div>
      <Navbar />

    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ommy-dc67a.appspot.com/o/wave%20whole%20body.jpeg?alt=media&token=9b6d9cd5-9444-492d-addf-2d2296deea00"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Refund Policy</h1>
        <p className="a-sub">
        <p> STEPS TO FOLLOW:</p>
<p>1- Send us and email requesting a Refund to laura@ommysurf.com</p>

<p>2- We will reply you as within 2-4 hours with a FORM to fill up with the order information. Once we receive the information, we will wait for the item/s to arrive to the workshop.</p>

<p>3- Once your return is received and inspected, we will send you an email to notify you that we have received your returned item and if your request has been approved or rejected for refund.</p>

<p>4- If you are approved, then your refund will be processed and a credit will automatically be applied to the original method of payment, within 20 working days. </p>

<p>5- If you want to swap size or color (EXCHANGES), the new item/s need to be purchased as a new order while you wait for your refund.</p>

<div>6- Keep in mind that we are cutting and sewing your swimmers by hand as we are a fashion on demand business. Your itemes will take 2-3 weeks to be ready for shipping, we are concious about the environment by not over producing./</div>
        </p>
        
        <p className="a-desc">
        - You can return your items within 14 days of receipt of your shipment. Except if you have purchased your item during Christmas (15 Nov to 31 Dec), then the refund timeframe is extended until 10 of January.

</p>
<p className="a-desc">
-Gift cards are non-refundable.


</p>
<p className="a-desc">
- Original shipping charges are non-refundable. You are responsible for the charges of the return shipping.



</p>
        <p className="a-desc">
        - Items must be in original condition and in the original packaging, unwashed and unworn, keeping the hygiene slip stuck. If you are returning light color pieces please be aware of not trying them with make up or fake tan on.        </p>

      </div>
    </div>
    <div>
            <Footer/>

    </div>
    </div>


  );
};

export default Refunds;