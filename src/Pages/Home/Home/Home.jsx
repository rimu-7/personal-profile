import HashtagWithIcons from "../HastagWithIcons/HastagWithIcons";
import Information from "../Information/Information";


const Home = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-5 md:p-10 space-y-10 md:space-y-0 md:space-x-10">
            <HashtagWithIcons />
            <Information />
        </div>
    );
};

export default Home;
