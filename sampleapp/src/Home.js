import './first.css';
function Home({ onNext }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src="https://cdn.shopify.com/app-store/listing_images/a82167e02b45cadf681efc6c17c35f3a/icon/CMmMjb30lu8CEAE=.jpg"></img>
      <h1 classname="one">SUNO NA</h1>
      <h2 className="one">Not just played, felt.</h2>
      <button  className="two" onClick={onNext}>Next</button>
    </div>
  );
}

export default Home;
