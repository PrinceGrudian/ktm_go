import { LuCarFront as SteeringWheel, LuBriefcaseBusiness as BriefcaseBusiness, LuRoute as Route } from 'react-icons/lu';

export const PHONE = '916383323659';
export const DISPLAY_PHONE = '+91 63833 23659';
export const INSTAGRAM = 'https://www.instagram.com/ktmgo.carrentals/';
export const cars = [
  { name: 'Maruti Suzuki Dzire', category: 'Sedan', seats: '5', fuel: 'CNG and Petrol', image: 'https://www.suzukiauto.co.za/hubfs/Dzire%20-%20Arctic%20White%20Pearl.png', alt: 'White compact sedan on a road' },
  { name: 'Maruti Suzuki Ertiga', category: 'MPV', seats: '7', fuel: 'Petrol', image: 'https://imgd.aeplcdn.com/642x336/n/c6es93a_1572125.jpg?q=80', alt: 'White family MPV parked outdoors' },
  { name: 'Mahindra Xylo', category: 'MPV', seats: '7', fuel: 'Diesel', image: 'https://drive.google.com/file/d/1I9WEfpQDM1CHtSLcTW6PScDpmwRwYDpj/view?usp=sharing', alt: 'White multi-purpose vehicle' },
  { name: 'Maruti Suzuki Brezza', category: 'SUV', seats: '5', fuel: 'Petrol', image: 'https://drive.google.com/file/d/1tO_kRcDg_jz-saUoEPWlWHHbS1_qVMzn/view?usp=sharing', alt: 'White compact SUV' },
  { name: 'Maruti Suzuki Baleno', category: 'Hatchback', seats: '5', fuel: 'Petrol', image: 'https://drive.google.com/file/d/12kWrc26zGqhx3r-LrS0cEAucGFYcyyxz/view?usp=sharing', alt: 'White hatchback car' },
];
export const services = [
  { title: 'Self-Drive Rentals', icon: SteeringWheel, text: 'Drive on your own terms. Ask us about self-drive options for your trip.' },
  { title: 'Driver-Operated Rentals', icon: BriefcaseBusiness, text: 'Prefer to sit back? Enquire about a driver-operated journey.' },
  { title: 'Local & Outstation Trips', icon: Route, text: 'Share your route and travel dates so we can help plan the right option.' },
];
