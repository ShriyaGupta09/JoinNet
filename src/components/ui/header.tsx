import { Link } from "react-router-dom";

const Header = ({ headerClass }: { headerClass?: string }) => {
  return (
    <header className={`sticky top-0 z-50 w-full ${headerClass} backdrop-blur py-2 supports-[background-filter]:bg-background/60`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-6"> {/* Added px-4 for padding */}

        <Link to={"/"}>

            <img
              src="flower.png"
              alt="phool Logo"
              className="h-10 w-10"  
            />
        </Link>
        
        

        <div className="flex items-center space-x-2">
          <Link to={"/"}>
            <img
              src="user.png"
              alt="User Profile"
              className="h-10 w-10 rounded-full border-2 border-gray-300"
            />
          </Link>
          <span className="text-right text-lg font-semibold mr-10">Namaste!! </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
