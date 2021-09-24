import Hero from "./Hero";
const Home = () => {
  return (
    <>
        <Hero text="Welcome to the best Movie Browser!" />
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 my-5">
                    <p className="lead">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
                        architecto, velit sunt voluptas deleniti voluptates. Repellat
                        placeat nulla itaque voluptas laboriosam. Nam minima tempora
                        perferendis provident repellat, quod vel consectetur!
                    </p>
                </div>
            </div>
        </div>
    </>
  );
};

export default Home;
