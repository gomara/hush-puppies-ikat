import React from 'react';

import { Label } from '@/components/ui/label';

import CardsList from './CardsList';
import FooterNav from './FooterNav';
import FooterMedia from './FooterMedia';

function Footer() {
  return (
    <footer className="text-center opacity-80">
      <FooterMedia />
      <FooterNav />
      <div className="row flex justify-between gap-2 px-20 py-4">
        <Label className="text-center font-serif text-sm">© 2024 Cristobal Gomara Ikatech.</Label>
        <CardsList />
      </div>
    </footer>
  );
}

export default Footer;
