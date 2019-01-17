import React from 'react';
import { Button, NavLink } from 'reactstrap';

export default function BookingButton() {
  return (
    <div className='booking-button'>
      <NavLink href='/order/new/standard'>
        <Button color='success' size='lg'>
          Book A Collection
        </Button>{' '}
      </NavLink>
    </div>
  );
}
