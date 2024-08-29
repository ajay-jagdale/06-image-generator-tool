const Header = () => {

    return (
        <header className={`fixed top-0 left-0 w-full z-10 bg-[rgb(30,64,175)] text-white rounded-b-[15px] max-h-16`}>
            <div className="p-2 md:p-3 lg:p-4 text-center">
                <a href="/" className="text-xl font-bold mb-2 text-white">Image Generator</a>
            </div>
        </header>
    );
};

export default Header;
