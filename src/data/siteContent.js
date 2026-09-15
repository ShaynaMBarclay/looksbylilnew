import classicShortCut from '../assets/standard.png'
import kidsCut from '../assets/kidscut.png'
//import chlorineCleanse from '../assets/chlorine-cleanse.jpg'
//import calmCut from '../assets/calm-cut.jpg'
//import bangTrim from '../assets/bang-trim.jpg'
import shampooBlowout from '../assets/blowout.png'
import babysFirstHaircut from '../assets/babysfirst.png'
import midLengthHaircut from '../assets/midlength.png'
import neckEarCleanup from '../assets/neck.png'
//import buzzCut from '../assets/buzz-cut.jpg'
import skinFade from '../assets/skinfade.jpg'
//import shampoo from '../assets/shampoo.jpg'
import longLayerHaircut from '../assets/longlayers.jpg'
import fullService from '../assets/fullservice.png'
//import grayBlendingColor from '../assets/gray-blending-color.jpg'
//import grayBlendingBeard from '../assets/gray-blending-beard.jpg'
//import highFives from '../assets/high-fives.jpg'
//import beardTrimAddon from '../assets/beard-trim-addon.jpg'

export const business = {
  name: 'Looks By Lil',
  tagline: 'Fresh cuts in a space where everyone belongs.',
  address: '236 Main St, Gaithersburg, MD 20878',
  phone: '(304) 790-9018',
  bookingUrl: 'https://book.squareup.com/appointments/9trdv592na54cd/location/L1FEC39XS0HR8/services',
  brandColor: '#558632',
}

export const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '10:00 AM – 6:00 PM' },
  { day: 'Wednesday', time: '10:00 AM – 6:00 PM' },
  { day: 'Thursday', time: '10:00 AM – 7:00 PM' },
  { day: 'Friday', time: '10:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'By appointment' },
]

export const services = [
  // --- Services with photos ---
  {
    id: 'classic-short-cut',
    name: 'Classic Short Cut',
    price: '$38.00',
    duration: '25 min',
    image: classicShortCut,
    description: 'A clean, structured short haircut tailored to your everyday style. Clipper guards on the side, shears on top or all around short shear cut.',
  },
  {
    id: 'kids-cut',
    name: "Kid's Cut 12 and Under",
    price: '$27.00',
    duration: '25 min',
    image: kidsCut,
    description: 'A patient, gentle haircut designed to keep younger clients comfortable and confident. For kids 12 and under.',
  },
  {
    id: 'shampoo-blowout',
    name: 'Shampoo and Blowout',
    price: '$40.00',
    duration: '30 min',
    image: shampooBlowout,
    description: 'A wash and blowdry that leaves your hair smooth, styled, and ready to go.',
  },
  {
    id: 'babys-first-haircut',
    name: "Baby's First Haircut",
    price: '$27.00',
    duration: '25 min',
    image: babysFirstHaircut,
    imagePosition: 'top',
    description: 'A gentle, stress free first haircut for babies and toddlers. Little ones can sit on a parent\'s lap, with plenty of patience and care throughout. Includes a keepsake certificate and optional lock of hair. [placeholder — edit later]',
  },
  {
    id: 'mid-length-haircut',
    name: 'Mid Length Haircut',
    price: '$50.00',
    duration: '30 min',
    image: midLengthHaircut,
    description: 'For hair lengths that fall in between chin length to the shoulder. A versatile, mid length cut tailored to your natural texture and style.',
  },
  {
    id: 'neck-ear-cleanup',
    name: 'Neck and Around the Ear Clean Up',
    price: '$17.00',
    duration: '15 min',
    image: neckEarCleanup,
    description: 'A quick refinement around the neckline and ears for a crisp, tidy look.',
  },
  {
    id: 'skin-fade',
    name: 'Skin Fade',
    price: '$43.00',
    duration: '30 min',
    image: skinFade,
    description: 'A seamless fade taken all the way down for a smooth, modern finish.',
  },
  {
    id: 'long-layer-haircut',
    name: 'Long Layer Haircut',
    price: '$60.00',
    duration: '40 min',
    image: longLayerHaircut,
    description: 'For hair that falls beyond the shoulders. Adds movement and shape while keeping length and softness.',
  },
  {
    id: 'full-service',
    name: 'Full Service - Shampoo, Haircut, Blowdry',
    price: '$85.00',
    duration: '1 hr',
    image: fullService,
    description: 'A complete experience, cleanse, tailored cut, and finished styling for a refreshed feel. Typically for longer, layered cuts. Includes Shampoo, Cut, and Blowdry.',
  },

  // --- Services without photos yet ---
   {
    id: 'calm-cut',
    name: 'Calm Cut - A Sensory Hour Haircut',
    price: '$40.00',
    duration: '1 hr',
    // image: calmCut,
    description: 'A patient, unhurried haircut experience designed for comfort, trust, and ease. A service for those with sensory issues that may need more time getting acclimated to me, the shop and idea of a haircut. [placeholder — edit later]',
  },
  {
    id: 'chlorine-cleanse',
    name: 'Chlorine Cleanse Treatment',
    price: '$15.00',
    duration: '5 min',
    // image: chlorineCleanse,
    description: 'A clarifying cleanse that removes chlorine buildup and restores softness and shine.',
  },
  {
    id: 'bang-trim',
    name: 'Bang Trim',
    price: '$10.00',
    duration: '15 min',
    // image: bangTrim,
    description: 'A quick clean up for the front bang, keeps them soft, shaped, and out of your eyes.',
  },
  {
    id: 'buzz-cut',
    name: 'Buzz Cut',
    price: '$25.00',
    duration: '30 min',
    // image: buzzCut,
    description: 'An all over short cut for a fresh, low-maintenance finish.',
  },
  {
    id: 'shampoo',
    name: 'Shampoo',
    price: '$6.00',
    duration: '5 min',
    // image: shampoo,
    description: 'A refreshing wash to leave your hair feeling light and clean.',
  },
  {
    id: 'gray-blending-color',
    name: 'Gray Blending Color',
    price: '$60.00',
    duration: '30 min',
    // image: grayBlendingColor,
    description: 'Softly blends away grays for a natural, low-maintenance transition.',
  },
  {
    id: 'gray-blending-beard',
    name: 'Gray Blending Color for Beard',
    price: '$40.00',
    duration: '30 min',
    // image: grayBlendingBeard,
    description: 'Subtle gray blending for facial hair to keep everything looking even and natural.',
  },
  {
    id: 'high-fives',
    name: 'High Fives',
    price: 'Free',
    duration: '5 min',
    // image: highFives,
    description: 'Placeholder description — edit later.',
  },
  {
    id: 'beard-trim-addon',
    name: 'Beard Trim (Add-on)',
    price: '$12.00',
    duration: '5 min',
    // image: beardTrimAddon,
    description: 'A precise beard clean-up to sharpen lines and maintain a polished look.',
  },
]

export const values = [
  {
    id: 'lgbtq',
    title: 'LGBTQ+ Friendly',
    blurb:
      "This is an affirming chair. You'll be greeted with the name and pronouns you use, and cut for the look that feels like you, no gendered menus, no assumptions.",
  },
  {
    id: 'autism',
    title: 'Autism & Sensory Friendly',
    blurb:
      'Appointments can be adapted for sensory needs with patience and understanding, we have specific services for you just for you and want to make your experience the best we can.',
  },
  {
    id: 'skilled',
    title: 'Skilled Barbering',
    blurb:
      'Fades, tapers, beard work, and classic cuts done with care and precision, every visit starts with a real conversation about what you want.',
  },
]

export const about = {
  heading: 'About Looks By Lil',
  body: [
    'Looks By Lil is a barber shop on Main Street in Gaithersburg built on one simple idea: everyone deserves a great cut and a place where they feel completely at ease.',
    'That means an inclusive, LGBTQ+ affirming chair and appointments that can be adapted for autistic and sensory-sensitive clients, without ever making anyone feel like an exception.',
    'Come as you are. Leave looking sharp.',
  ],
}

export const calmCut = {
  eyebrow: 'Sensory-friendly by design',
  heading: 'The Calm Cut — a sensory hour',
  body: [
    'A haircut asks a lot of your senses. The buzz of clippers, the snip near your ears, water at the sink, a cape at your neck, a stranger in your space, bright lights, and a mirror staring back. For a lot of autistic and sensory-sensitive folks, that is a lot to take on all at once, and that is completely okay. Here, none of it is rushed and none of it is assumed.',
    "That is what the Calm Cut is all about. It is a full hour set aside just for you, so nothing has to happen on anyone else's clock. We can go slow, take breaks, and let you get comfortable with me, the shop, and the whole idea of a haircut at whatever pace feels right. Want to hold the clippers first, hear them before they come near you, or feel the cape before it goes on? Great, let's do that. Prefer the lights dimmed, no small talk, headphones in, or a favorite fidget in hand? Also great.",
    'There is no script you have to follow and no version of yourself you need to perform. We will figure out together what makes the chair feel safe, whether that is a parent close by, a step-by-step heads up before each part, or simply the freedom to say stop whenever you need to. The goal is a fresh cut and, just as much, the quiet confidence that comes from being met exactly where you are.',
  ],
}