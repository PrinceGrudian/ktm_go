import { LuCarFront as SteeringWheel, LuBriefcaseBusiness as BriefcaseBusiness, LuRoute as Route } from 'react-icons/lu';

export const PHONE = '916383323659';
export const DISPLAY_PHONE = '+91 63833 23659';
export const INSTAGRAM = 'https://www.instagram.com/ktmgo.carrentals/';
export const cars = [
  { name: 'Maruti Suzuki Dzire', category: 'Sedan', seats: '5 ', fuel: 'CNG and Petrol', image: 'https://www.suzukiauto.co.za/hubfs/Dzire%20-%20Arctic%20White%20Pearl.png', alt: 'White compact sedan on a road' },
  { name: 'Maruti Suzuki Ertiga', category: 'MPV', seats: '7 ', fuel: 'Petrol', image: 'blob:https://chatgpt.com/0a533814-cf81-4325-9c14-933ab9262444', alt: 'White family MPV parked outdoors' },
  { name: 'Mahindra Xylo', category: 'MPV', seats: '7 ', fuel: 'Diesel', image: 'blob:https://chatgpt.com/04007a7b-c0ad-4894-ac82-0783fb8a4434', alt: 'White multi-purpose vehicle' },
  { name: 'Maruti Suzuki Brezza', category: 'SUV', seats: '5 ', fuel: 'Petrol', image: 'blob:https://chatgpt.com/6711354b-f1d2-49f1-9137-b175f27482c5', alt: 'White compact SUV' },
  { name: 'Maruti Suzuki Baleno', category: 'Hatchback', seats: '5 ', fuel: 'Petrol', image: 'blob:https://chatgpt.com/3d454520-f8e5-4caf-ae9c-74d8d8a398a5', alt: 'White hatchback car' },
];
export const services = [
  { title: 'Self-Drive Rentals', icon: SteeringWheel, text: 'Drive on your own terms. Ask us about self-drive options for your trip.' },
  { title: 'Driver-Operated Rentals', icon: BriefcaseBusiness, text: 'Prefer to sit back? Enquire about a driver-operated journey.' },
  { title: 'Local & Outstation Trips', icon: Route, text: 'Share your route and travel dates so we can help plan the right option.' },
];
