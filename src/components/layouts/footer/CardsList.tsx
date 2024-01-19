import React from 'react';

import { Icons } from '@/components/ui/icons';

function CardsList() {
  return (
    <ul className="flex flex-wrap  gap-4">
      <li>
        <Icons.AmmericanExpress />
      </li>
      <li>
        <Icons.ApplePay />
      </li>
      <li>
        <Icons.GooglePay />
      </li>
      <li>
        <Icons.Maestro />
      </li>
      <li>
        <Icons.MasterCard />
      </li>
      <li>
        <Icons.PayPal />
      </li>
      <li>
        <Icons.ShopifyPay />
      </li>
      <li>
        <Icons.UnionPay />
      </li>
      <li>
        <Icons.Visa />
      </li>
    </ul>
  );
}

export default CardsList;
