import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

async function FooterMedia() {
  return (
    <div className="flex flex-col items-center bg-footer">
      <Link className="font-serif text-4xl leading-[4rem]" href="/#">
        @HUSHPUPPIESCO
      </Link>
      <hr className="border-1 w-[200px] border-black" />
      <div className="row flex gap-4 py-4">
        <Facebook className="h-6 w-6 cursor-pointer" />
        <Instagram className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
}

export default FooterMedia;
