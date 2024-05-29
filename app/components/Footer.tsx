const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-sm text-gray-700 flex items-center w-full justify-center cursor-default">
      <p>
        Designed and developed by Armin D. &copy; {year} all rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
