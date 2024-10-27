

const FooterComponent = () => {
  return (
    <footer className=" text-gray-300 py-8 max-w-7xl mx-auto">

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo and Company Info */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-white">Sports Complex</h1>
          <p className="mt-2 text-gray-400">
            Delivering quality services since 2024.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-12">
          <div>
            <h5 className="text-lg font-semibold text-white mb-2">Company</h5>
            <ul className="space-y-2">
              <li>
                <a href="/aboutUs" className="hover:text-indigo-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contactUs" className="hover:text-indigo-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-white mb-2">Resources</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 fill-current text-gray-300 hover:text-indigo-400 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.334C0 23.402.598 24 1.325 24h11.494v-9.294H9.662v-3.622h3.157V8.413c0-3.1 1.892-4.788 4.654-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.503 0-1.794.714-1.794 1.76v2.308h3.588l-.467 3.622h-3.121V24h6.116C23.402 24 24 23.402 24 22.667V1.333C24 .598 23.402 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 fill-current text-gray-300 hover:text-indigo-400 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.92 4.92 0 00-8.385 4.482c-4.088-.2-7.719-2.165-10.148-5.144A4.822 4.822 0 001.671 7.7c0 1.72.87 3.24 2.188 4.13a4.903 4.903 0 01-2.229-.616v.062a4.923 4.923 0 003.946 4.827 4.934 4.934 0 01-2.224.085 4.936 4.936 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.396 0-.79-.023-1.176-.068a13.93 13.93 0 007.548 2.212c9.057 0 14.01-7.5 14.01-14.01 0-.213-.005-.425-.015-.636A10.025 10.025 0 0024 4.557z" />
            </svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 fill-current text-gray-300 hover:text-indigo-400 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.32 3.608 1.295.975.975 1.233 2.242 1.295 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.32 2.633-1.295 3.608-.975.975-2.242 1.233-3.608 1.295-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.32-3.608-1.295-.975-.975-1.233-2.242-1.295-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.32-2.633 1.295-3.608C4.517 2.483 5.784 2.225 7.15 2.163 8.416 2.105 8.796 2.093 12 2.093m0-2.163C8.71 0 8.316.012 7.052.07 5.697.129 4.36.388 3.261 1.487 2.162 2.586 1.903 3.923 1.844 5.278.786 8.316.786 15.684 1.844 18.722c.059 1.354.318 2.692 1.417 3.791s2.437 1.358 3.791 1.417c3.038 1.058 10.406 1.058 13.444 0 1.354-.059 2.692-.318 3.791-1.417s1.358-2.437 1.417-3.791c1.058-3.038 1.058-10.406 0-13.444-.059-1.354-.318-2.692-1.417-3.791s-2.437-1.358-3.791-1.417c-3.038-1.058-10.406-1.058-13.444 0C8.316.012 8.71 0 12 0z" />
              <path d="M12 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.326a4.163 4.163 0 110-8.326 4.163 4.163 0 010 8.326zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-100" />

      {/* Footer Bottom */}
      <div className="flex justify-between items-center text-sm">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Sports Complex. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-indigo-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-indigo-400 transition">
            Terms of Service
          </a>
        </div>
      </div>

    </footer>
  );
};

export default FooterComponent;
