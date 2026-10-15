# KTM GO Car Rentals

Responsive React + Vite + TypeScript website for KTM GO Car Rentals.

## Run locally

1. Install Node.js (LTS).
2. In this folder run `npm install`.
3. Run `npm run dev` and open the local URL printed by Vite.
4. Run `npm run build` to create the production build in `dist/`; `npm run preview` serves it locally.

Static hosting should rewrite application routes (such as `/our-cars` and `/privacy-policy`) to `index.html`.

## Business details to confirm

- Confirm each fleet vehicle's exact seating and fuel configuration. Dzire is labelled CNG only; other card fuel details and seating ask customers to confirm with the team.
- Confirm which trip types are offered, including whether airport transfers are available before adding them.
- Confirm the rental-specific terms before publishing a complete policy. The current terms page asks customers to confirm details directly.
- Confirm data handling and retention practices before expanding the privacy policy.
- Confirm customer support hours before advertising them.

## Implementation notes

- Vehicle and service content is centralized in `src/data.ts`.
- Enquiry forms validate required fields, phone number, and return date/time, then open WhatsApp with an encoded message. The site does not store form data and does not confirm a booking.
- Vehicle photography and the hero background are served from Unsplash; Google Fonts are loaded remotely.
