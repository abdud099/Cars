import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Lucid Air Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Lucid Air</h3>
            <ul>
              <li>
                <Link href="#">
                  <p className="hover:underline">Explore Lucid Air</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="hover:underline">Design Yours</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="hover:underline">Available Cars</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="hover:underline">Test Drive</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Lucid Gravity Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Lucid Gravity</h3>
            <ul>
              <li>
                <Link href="#">
                  <p className="hover:underline">Explore Lucid Gravity</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="hover:underline">
                    Road to Lucid Gravity Videos
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="hover:underline">Stay Informed</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Lucid Motors Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Lucid Motors</h3>
            <ul>
              <li>
                <Link href="#">
                  <p className="hover:underline">Company</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="hover:underline">Leadership</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="hover:underline">Lucid × Four Seasons</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="hover:underline">Stories</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="hover:underline">Investors</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">More</h3>
            <ul>
              <li>
                <Link href="#">
                  <p className="hover:underline">Financial Services</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="hover:underline">FAQ</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="hover:underline">Contact Us</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="hover:underline">Locations</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="hover:underline">Events</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="hover:underline">Media Room</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>©2024 Lucid. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="#">
              <p className="hover:underline">Legal</p>
            </Link>
            <Link href="#">
              <p className="hover:underline">Privacy Policy</p>
            </Link>
            <Link href="#">
              <p className="hover:underline">Cookie Settings</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
