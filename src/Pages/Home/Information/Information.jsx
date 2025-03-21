import { Link } from 'react-router-dom';

const Information = () => {
    return (
        <div className='flex flex-col items-start w-full md:w-[600px] mx-5 text-left'>
            <h1 className='text-4xl md:text-6xl text-green-500 font-bold'>Mutasim Fuad Rimu</h1>
            <h2 className='text-3xl md:text-5xl mt-2'>FullStack Developer</h2>
            <p className='text-lg md:text-xl mt-3'>
                I&apos;m Fuad, a programmer who aims to produce and share <Link to="/showcase" className='text-blue-400'>[great software ↗]</Link> with the world.
            </p>
            <div className='mt-5 space-y-2'>
                <Link to="/about" className="block text-lg md:text-xl hover:text-green-400 hover:scale-105 transition-all duration-300">
                    [Know About Me ↗]
                </Link>
                <Link to="/showcase" className="block text-lg md:text-xl hover:text-green-400 hover:scale-105 transition-all duration-300">
                    [Showcase ↗]
                </Link>
                <Link to="/social" className="block text-lg md:text-xl hover:text-green-400 hover:scale-105 transition-all duration-300">
                    [Get in Touch ↗]
                </Link>
                <Link to="/" className="block text-lg md:text-xl hover:text-green-400 hover:scale-105 transition-all duration-300">
                    [What I Know ↗]
                </Link>
                <Link to="/about" className="block text-lg md:text-xl hover:text-green-400 hover:scale-105 transition-all duration-300">
                    [Know My Story ↗]
                </Link>
            </div>
        </div>
    );
};

export default Information;
