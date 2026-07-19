import PackageCard from "../components/PackageCard/PackageCard";
import packages from "../data/package";
import Footer from "../components/Footer/Footer";

function Packages() {
  return (
    <>
      <h1>All Travel Packages</h1>

      <div className="card-container">
        {
          packages.map((item)=>(
            <PackageCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))
        }
      </div>

      <Footer />
    </>
  );
}

export default Packages;