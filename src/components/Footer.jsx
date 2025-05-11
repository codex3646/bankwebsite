import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        {/* Column 1 - Transparency */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-400">Transparency</h3>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Security policy</li>
            <li>Terms of Use</li>
            <li>Compliance and ESG</li>
            <li>Contracts</li>
            <li>Financial reports</li>
            <li>Open data</li>
          </ul>
        </div>

        {/* Column 2 - Explore */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-400">Explore</h3>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Nord bank</li>
            <li>Nord online</li>
            <li>InvestNews</li>
          </ul>
        </div>

        {/* Column 3 - Help */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-400">Help</h3>
          <ul className="space-y-1">
            <li>Security</li>
            <li>FAQ</li>
            <li>Customer service</li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-400">Talk to us</h3>
          <ul className="space-y-1">
            <li>Capitals: <strong>---- ----</strong></li>
            <li>Other areas: <strong>---- ----</strong></li>
            <li>Ombudsman: <strong>---- --- ----</strong></li>
          </ul>
        </div>

        {/* Column 5 - Social & Privacy */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-400">Privacy</h3>
          <ul className="space-y-1">
            <li>dpo@nordbank.com.br</li>
            <li className="mt-4 text-gray-400">Social Media</li>
            <div className="flex gap-2 mt-2">
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-5 h-5" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Instagram" className="w-5 h-5" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-5 h-5" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-5 h-5" /></a>
            </div>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © 2025 Nu Pagamentos SA - Payment Institution. 18.236.120/0001-58
      </div>
    </footer>
  );
};

export default Footer;
