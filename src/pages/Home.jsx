import data from "../data";

console.log(data);

const Home = () => {
    return(
        <>
        <header className="hero">
            <h1 className="text-black font-bold md:text-2xl">Welcome to Our App</h1>
        </header>


        <main>
            <section className="cardWrapper">
                  {data.map((i, ele) => 
                  <div key={i}>
                    <div className="img">
                        <img src={i.img} alt={i.title} />
                    </div>
                
                    <div className="p-4">
                        <h2>{i.title}</h2>
                        <p>{i.desc}</p>
                    </div>
                </div>
            )}
            </section>
        </main>






        </>
    );
};

export default Home;