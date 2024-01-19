import React from 'react';

import CardsList from './CardsList';
import FooterNav from './FooterNav';
import FooterMedia from './FooterMedia';

function Footer() {
  return (
    <footer className="text-center opacity-80">
      <FooterMedia />
      <FooterNav />
      <div className="row flex justify-between gap-2 px-20 py-4">
        <p className="text-center font-serif text-sm">© 2024 Hush Puppies Ikatech.</p>
        <CardsList />
      </div>
    </footer>
  );
}

export default Footer;
