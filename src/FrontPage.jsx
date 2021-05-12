import Footer from "./Footer";
import Navigationbar from "./Navigationbar";

const FrontPage = () => {
  return (
    <div>
      <Navigationbar />
      <div>Insert bilde-thingy her</div>
      <Footer />
    </div>
  );
};


// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}

export default FrontPage;
