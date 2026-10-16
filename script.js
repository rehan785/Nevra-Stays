/* ==========================================================================
   NEVRA STAYS — MI-Travel Interactive Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Dynamic Copyright Year (Issue 12) ----
  const yearElement = document.getElementById('copyrightYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ==========================================================================
  // AIRBNB 4.88 GUEST FAVOURITE VERIFIED REVIEWS DATASET (All 33 Reviews)
  // ==========================================================================
  const allReviewsData = [
  {
    "id": 1,
    "author": "Ankit",
    "tenure": "4 months on Airbnb",
    "rating": 5,
    "date": "October 2026",
    "text": "The property was well maintained and beautifully decorated, making it a very comfortable stay. It was also easy to find. The host was incredibly responsive and helpful throughout our visit. I would definitely look to stay here again!",
    "response": {
      "author": "Response from Gaurav",
      "date": "October 2026",
      "text": "Thanku so much ankit",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/User/original/42fe590e-43a2-4d15-a2aa-616ef8fa7ef6.jpeg?im_w=120"
  },
  {
    "id": 2,
    "author": "Harsh",
    "tenure": "2 years on Airbnb",
    "rating": 5,
    "date": "October 2026",
    "text": "One of the best places I’ve ever visited, the view is to die for literally!! Highly responsive, highly recommend this place. Will definitely visit again.",
    "response": {
      "author": "Response from Gaurav",
      "date": "October 2026",
      "text": "Thankyou bhai 🥰",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/User/original/f514b340-53f7-49fa-adce-e7934cd9401f.jpeg?im_w=120"
  },
  {
    "id": 3,
    "author": "Ekta",
    "tenure": "6 years on Airbnb",
    "rating": 5,
    "date": "October 2026",
    "text": "Great host, highly recommended.",
    "response": {
      "author": "Response from Gaurav",
      "date": "October 2026",
      "text": "Thanku so much 🥰",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/70e28dae-33cc-4dd0-89a0-f78d74933e1d.jpg?im_w=120"
  },
  {
    "id": 4,
    "author": "Kaif",
    "tenure": "2 years on Airbnb",
    "rating": 4,
    "date": "September 2026",
    "text": "I booked this property for my friend, and overall the experience was fairly smooth. The check-in process was smooth, and the unit was clean and well-maintained. The kitchen and other facilities were also available.\nHowever, the main issue was that the unit provided was different from the one booked, and a few basic amenities such as towels and tissues were missing. My friend also mentioned some issue with the lock on the gate. I informed the host as soon as I came to know about these issues, although I received a response only the following morning.\nSince it was a short stay, I did not make a big issue out of it and asked my friend to manage with whatever was available. In fact, my friend had to order the missing essentials through Blinkit and manage them on his own. Apart from these points, the unit itself was clean and the overall stay was okay. Hopefully, the host can ensure that the listed unit and basic amenities are provided properly for future guests.",
    "response": {
      "author": "Response from Gaurav",
      "date": "October 2026",
      "text": "Thank you for your feedback, Kaif. I sincerely apologize for the inconvenience with the unit assignment and the missing essentials. We have since updated our late-arrival check-in procedures to ensure all supplies are completely stocked in advance, regardless of the booking hour. We appreciate your patience and look forward to welcoming you back for a seamless stay.",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/User/original/60ec7d59-55aa-4459-8d61-7af997e162c5.jpeg?im_w=120"
  },
  {
    "id": 5,
    "author": "Mohd",
    "tenure": "2 years on Airbnb",
    "rating": 5,
    "date": "August 2026",
    "text": "This Airbnb exceeded our expectations. The apartment was well-equipped, beautifully decorated, and quiet. The host provided clear instructions, was quick to respond to messages, and offered great local recommendations. A truly seamless experience from start to finish.",
    "response": {
      "author": "Response from Gaurav",
      "date": "September 2026",
      "text": "Thanku so much brother",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/User/original/1dab98a3-7414-4d2b-a386-53ced44e30a6.jpeg?im_w=120"
  },
  {
    "id": 6,
    "author": "Gaurav",
    "tenure": "5 years on Airbnb",
    "rating": 5,
    "date": "September 2026",
    "text": "It was an amazing experience staying at this bnb\nThank you for the lovely stay",
    "response": {
      "author": "Response from Gaurav",
      "date": "September 2026",
      "text": "Thankyou gaurav",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/Portrait/Avatars/v2/blue?im_w=120&im_t=G&im_s=43&im_f=AirbnbCerealLatinMedium.ttf&im_c=0d4daa&script=latin"
  },
  {
    "id": 7,
    "author": "Saurabh",
    "tenure": "7 years on Airbnb",
    "rating": 5,
    "date": "September 2026",
    "text": "Lovely place that’s small but beautifully done. The spectacular view is definitely the highlight. Had a great stay and would happily recommend it!",
    "response": {
      "author": "Response from Gaurav",
      "date": "September 2026",
      "text": "Thanku brother",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/2ed5a7b5-6204-4ef2-b363-dd1fa9a5be5a.jpg?im_w=120"
  },
  {
    "id": 8,
    "author": "Suraj",
    "tenure": "14 years on Airbnb",
    "rating": 5,
    "date": "September 2026",
    "text": "Excellent place to stay !",
    "response": {
      "author": "Response from Gaurav",
      "date": "September 2026",
      "text": "Thanku sir",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/users/3253722/profile_pic/1344934762/original.jpg?im_w=120"
  },
  {
    "id": 9,
    "author": "Mayank Kumar",
    "tenure": "2 years on Airbnb",
    "rating": 5,
    "date": "September 2026",
    "text": "Really enjoyed the facilities looking forward for more ❤️",
    "response": {
      "author": "Response from Gaurav",
      "date": "September 2026",
      "text": "Thanku mayank",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/Portrait/Avatars/v2/rausch?im_w=120&im_t=M&im_s=43&im_f=AirbnbCerealLatinMedium.ttf&im_c=a21039&script=latin"
  },
  {
    "id": 10,
    "author": "Sathiyan",
    "tenure": "3 years on Airbnb",
    "rating": 5,
    "date": "August 2026",
    "text": "Highly recommend. One of the best in the locality, room is the same as shown in photos. Host Gaurav is very responsive and friendly.",
    "response": {
      "author": "Response from Gaurav",
      "date": "September 2026",
      "text": "Thanku so much",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/ae8ba565-f87f-49da-979d-203daeda8cb0.jpg?im_w=120"
  },
  {
    "id": 11,
    "author": "Manoj",
    "tenure": "6 months on Airbnb",
    "rating": 5,
    "date": "August 2026",
    "text": "Responsive host and great place",
    "response": {
      "author": "Response from Gaurav",
      "date": "September 2026",
      "text": "Thanku manoj",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/Portrait/Avatars/v2/purple?im_w=120&im_t=M&im_s=43&im_f=AirbnbCerealLatinMedium.ttf&im_c=503eb2&script=latin"
  },
  {
    "id": 12,
    "author": "Jairaj",
    "tenure": "8 years on Airbnb",
    "rating": 5,
    "date": "July 2026",
    "text": "Good host and timely communication!",
    "response": {
      "author": "Response from Gaurav",
      "date": "September 2026",
      "text": "Thank you, Jairaj.\nTranslated  Show original",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/1fd9237e-c226-4b5c-b6fa-244c7dcada61.jpg?im_w=120"
  },
  {
    "id": 13,
    "author": "Prince",
    "tenure": "2 years on Airbnb",
    "rating": 5,
    "date": "July 2026",
    "text": "Property was great and the most important thing host was really helpful.",
    "response": {
      "author": "Response from Gaurav",
      "date": "July 2026",
      "text": "Thanku so much and its my pleasure to host you",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/Portrait/Avatars/v2/magenta?im_w=120&im_t=P&im_s=43&im_f=AirbnbCerealLatinMedium.ttf&im_c=901e7c&script=latin"
  },
  {
    "id": 14,
    "author": "Archana",
    "tenure": "2 years on Airbnb",
    "rating": 5,
    "date": "July 2026",
    "text": "Lovely stay! No hassle! Gaurav is very cooperative and property is very nice! :)",
    "response": {
      "author": "Response from Gaurav",
      "date": "July 2026",
      "text": "Its my pleasure to host you",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/Portrait/Avatars/v2/magenta?im_w=120&im_t=A&im_s=43&im_f=AirbnbCerealLatinMedium.ttf&im_c=901e7c&script=latin"
  },
  {
    "id": 15,
    "author": "Nirmal Chaudhary",
    "tenure": "6 months on Airbnb",
    "rating": 5,
    "date": "July 2026",
    "text": "The host was responsive, and the stay was smooth and enjoyable.",
    "response": {
      "author": "Response from Gaurav",
      "date": "July 2026",
      "text": "Thanku nirmal",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/Portrait/Avatars/v2/rausch?im_w=120&im_t=N&im_s=43&im_f=AirbnbCerealLatinMedium.ttf&im_c=a21039&script=latin"
  },
  {
    "id": 16,
    "author": "Rishabh",
    "tenure": "3 months on Airbnb",
    "rating": 5,
    "date": "July 2026",
    "text": "Nyc ambience & polite nature",
    "response": {
      "author": "Response from Gaurav",
      "date": "July 2026",
      "text": "Thank you for staying with us! I hope you had a comfortable and enjoyable stay.",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/Portrait/Avatars/v2/orange?im_w=120&im_t=R&im_s=43&im_f=AirbnbCerealLatinMedium.ttf&im_c=8f3400&script=latin"
  },
  {
    "id": 17,
    "author": "Ankit",
    "tenure": "10 years on Airbnb",
    "rating": 4,
    "date": "July 2026",
    "text": "Gaurav is a good host. He’s very responsive at all times.",
    "response": null,
    "avatar": "https://a0.muscache.com/im/pictures/user/User/original/42fe590e-43a2-4d15-a2aa-616ef8fa7ef6.jpeg?im_w=120"
  },
  {
    "id": 18,
    "author": "Amitabh",
    "tenure": "3 years on Airbnb",
    "rating": 5,
    "date": "June 2026",
    "text": "had a clean and laid back stay.\nenjoyed my time there.",
    "response": {
      "author": "Response from Gaurav",
      "date": "June 2026",
      "text": "Thank you for staying with us! It was a pleasure hosting you. We’re glad you had a comfortable stay and truly appreciate your feedback. We look forward to welcoming you again on your next visit. Safe travels and best wishes!",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/Portrait/Avatars/v2/blue?im_w=120&im_t=A&im_s=43&im_f=AirbnbCerealLatinMedium.ttf&im_c=0d4daa&script=latin"
  },
  {
    "id": 19,
    "author": "Akchaj",
    "tenure": "4 years on Airbnb",
    "rating": 5,
    "date": "June 2026",
    "text": "Amazing place",
    "response": {
      "author": "Response from Gaurav",
      "date": "June 2026",
      "text": "Thank you very much\nTranslated  Show original",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/User/original/af8261c3-9ee6-4436-b456-b7570cf44e36.jpeg?im_w=120"
  },
  {
    "id": 20,
    "author": "Supriya",
    "tenure": "6 months on Airbnb",
    "rating": 5,
    "date": "March 2026",
    "text": "I had a really comfortable and pleasant stay. The room was clean, well-maintained, and exactly as shown. The host was responsive and helpful throughout. I especially appreciated the attention to cleanliness and overall hygiene. Would definitely recommend and love to stay again!",
    "response": null,
    "avatar": "https://a0.muscache.com/im/pictures/user/User/original/07aebbe0-e701-428f-ab36-c97d5ed8f201.jpeg?im_w=120"
  },
  {
    "id": 21,
    "author": "Sumit",
    "tenure": "9 months on Airbnb",
    "rating": 5,
    "date": "March 2026",
    "text": "The space is simple, clean, and thoughtfully set up for a comfortable stay.\nPeaceful atmosphere, especially at night — perfect to relax and unwind.\nNot overly fancy, just a cozy, honest space made with care.\nGaurav is very helpful and kind.\nMust recommend.",
    "response": null,
    "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a34eeec0-776d-44dc-a0da-818c7b19607d.jpeg?im_w=120"
  },
  {
    "id": 22,
    "author": "Madan Mohan",
    "tenure": "6 months on Airbnb",
    "rating": 5,
    "date": "April 2026",
    "text": "Had a great stay clean comfortable place with smooth check in and a very helpful host.",
    "response": {
      "author": "Response from Gaurav",
      "date": "April 2026",
      "text": "Thanks a lot, Madan Mohan! 😊\nIt was a pleasure hosting you. Glad you enjoyed the stay and found everything comfortable. You’re always welcome back anytime at Nevra Stay! 🙌\nRegards\nNevra Stays",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/User/original/38a21b52-fa14-42be-96a2-548d2590417e.jpeg?im_w=120"
  },
  {
    "id": 23,
    "author": "Rahul",
    "tenure": "3 years on Airbnb",
    "rating": 5,
    "date": "June 2026",
    "text": "Nice stay, host is really very friendly and helpful. Peaceful location and nice view from balcony.",
    "response": null,
    "avatar": "https://a0.muscache.com/im/pictures/user/User/original/f7ecc303-09b7-4437-8933-3cc3353a5fea.jpeg?im_w=120"
  },
  {
    "id": 24,
    "author": "Harsh",
    "tenure": "1 year on Airbnb",
    "rating": 4,
    "date": "June 2026",
    "text": "Loved my stay at Nevra. Great views, peaceful environment, and excellent service",
    "response": null,
    "avatar": "https://a0.muscache.com/im/pictures/user/User/original/f514b340-53f7-49fa-adce-e7934cd9401f.jpeg?im_w=120"
  },
  {
    "id": 25,
    "author": "Rabin",
    "tenure": "4 months on Airbnb",
    "rating": 5,
    "date": "May 2026",
    "text": "Great host—friendly, responsive, and made the entire stay smooth and comfortable!",
    "response": null,
    "avatar": "https://a0.muscache.com/im/Portrait/Avatars/v2/rausch?im_w=120&im_t=R&im_s=43&im_f=AirbnbCerealLatinMedium.ttf&im_c=a21039&script=latin"
  },
  {
    "id": 26,
    "author": "Harshit",
    "tenure": "3 years on Airbnb",
    "rating": 5,
    "date": "June 2026",
    "text": "Had a wonderful stay! The place was clean, comfortable, and exactly as described. The host was responsive and helpful throughout. Would definitely stay again and highly recommend it. ♥️",
    "response": {
      "author": "Response from Gaurav",
      "date": "June 2026",
      "text": "Thank you for your kind review, Harshit! It was a pleasure hosting you. We’re glad you enjoyed your stay at Navra Stay and hope to welcome you back again soon. Safe travels!",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/79325ac6-6d87-480e-95fe-69dd022aa8e9.jpg?im_w=120"
  },
  {
    "id": 27,
    "author": "Akansha",
    "tenure": "4 months on Airbnb",
    "rating": 5,
    "date": "May 2026",
    "text": "Amazing stay at Nevra — clean rooms, great vibe, and very helpful host!",
    "response": {
      "author": "Response from Gaurav",
      "date": "May 2026",
      "text": "Hey akansha thanks for coming",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/Portrait/Avatars/v2/purple?im_w=120&im_t=A&im_s=43&im_f=AirbnbCerealLatinMedium.ttf&im_c=503eb2&script=latin"
  },
  {
    "id": 28,
    "author": "Aman",
    "tenure": "9 months on Airbnb",
    "rating": 5,
    "date": "April 2026",
    "text": "Had a amazing stay at Nevra.\n32nd Floor felt like wow.\nview from balcony is ek number.\nSmooth Checkin ✅\nHost is very responsive just one text Away.\nthey also provide spices in kitchen and guess what I felt like Home.\nI will definitely come again here.\nHad a great time with my partner.\nStaff is also very Helpful and kind with us.\nRoom is just like Photo.\nMust Recommend\nthank you",
    "response": {
      "author": "Response from Gaurav",
      "date": "April 2026",
      "text": "Aman was a great guest—polite, respectful, and maintained the property very well. Would be happy to host again!",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/User/original/336fc9aa-5dfb-4036-b59d-d804178e7db2.jpeg?im_w=120"
  },
  {
    "id": 29,
    "author": "Pratik",
    "tenure": "3 years on Airbnb",
    "rating": 4,
    "date": "April 2026",
    "text": "I had a comfortable stay, except for juggling with the entrance lock and key",
    "response": {
      "author": "Response from Gaurav",
      "date": "May 2026",
      "text": "Thank you for your feedback, Pratik! 😊\nWe’re really glad to hear you had a comfortable stay. Apologies for the inconvenience with the entrance lock and key — we’ll definitely work on making the check-in process smoother and more seamless for future guests.\nAppreciate your suggestion, and we’d love to host you again soon! 🙌”",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/User/original/e2dc5718-229d-4dea-9580-e62473c3b7c3.jpeg?im_w=120"
  },
  {
    "id": 30,
    "author": "Shubham",
    "tenure": "10 years on Airbnb",
    "rating": 5,
    "date": "June 2026",
    "text": "Very nice property and stay",
    "response": null,
    "avatar": "https://a0.muscache.com/im/pictures/user/7c4ccba2-275d-46fc-be4c-e3c1389af041.jpg?im_w=120"
  },
  {
    "id": 31,
    "author": "Nishant",
    "tenure": "7 years on Airbnb",
    "rating": 5,
    "date": "June 2026",
    "text": "A perfect staycation spot with stunning views and a comfortable atmosphere.",
    "response": {
      "author": "Response from Gaurav",
      "date": "June 2026",
      "text": "Thanks for coming Nishant i am really greatfull to host u",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/b37d8ae7-933d-40b6-a45f-a01f184ef7ca.jpg?im_w=120"
  },
  {
    "id": 32,
    "author": "Shweta",
    "tenure": "4 months on Airbnb",
    "rating": 5,
    "date": "May 2026",
    "text": "he is very responsive and provide proper services",
    "response": {
      "author": "Response from Gaurav",
      "date": "May 2026",
      "text": "Thanku for coming shweta we r connect for future",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/Portrait/Avatars/v2/purple?im_w=120&im_t=S&im_s=43&im_f=AirbnbCerealLatinMedium.ttf&im_c=503eb2&script=latin"
  },
  {
    "id": 33,
    "author": "Siddhant",
    "tenure": "5 months on Airbnb",
    "rating": 5,
    "date": "May 2026",
    "text": "Very responsive host",
    "response": {
      "author": "Response from Gaurav",
      "date": "May 2026",
      "text": "Its my pleasure to host you sir",
      "avatar": "https://a0.muscache.com/im/pictures/user/User/original/a97a8c7e-0562-4ba9-a896-b41add5e39b2.jpeg?im_w=120"
    },
    "avatar": "https://a0.muscache.com/im/pictures/user/User/original/5a933af8-0b66-4092-870a-6bb5d58894e7.jpeg?im_w=120"
  }
];


  // ---- Inquiry Form with Validation & WhatsApp Fallback (Issues 23, 24) ----
  const inquiryFormEl = document.getElementById('inquiryForm');
  const inquiryFallbackEl = document.getElementById('inquiryFallback');
  if (inquiryFormEl) {
    inquiryFormEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('formName')?.value || '').trim();
      const phone = (document.getElementById('formPhone')?.value || '').trim();
      const checkin = document.getElementById('formCheckin')?.value || '';
      const checkout = document.getElementById('formCheckout')?.value || '';
      const datesText = (checkin && checkout) ? `${checkin} to ${checkout}` : (checkin || checkout || 'flexible dates');

      const message = `Hi Gaurav! I would like to inquire about booking Nevra Stays for ${name} (${datesText}). Contact: ${phone}`;
      const waUrl = `https://wa.me/919560023669?text=${encodeURIComponent(message)}`;

      const win = window.open(waUrl, '_blank', 'noopener,noreferrer');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        if (inquiryFallbackEl) {
          inquiryFallbackEl.style.display = 'block';
          const msgSpan = inquiryFallbackEl.querySelector('.fallback-msg-text');
          if (msgSpan) msgSpan.textContent = message;
        } else {
          alert(`WhatsApp popup was blocked. Please message or call host Gaurav directly at +91 95600 23669.\n\nYour inquiry: "${message}"`);
        }
      }
    });
  }

  // Footer Quick Inquiry Handler
  const footerInquiryBtn = document.getElementById('footerInquiryBtn');
  const footerInquiryInput = document.getElementById('footerInquiryInput');
  if (footerInquiryBtn && footerInquiryInput) {
    footerInquiryBtn.addEventListener('click', () => {
      const val = footerInquiryInput.value.trim();
      const msg = val ? `Hi Gaurav, I would like to inquire about booking Nevra Stays: ${val}` : 'Hi Gaurav, I would like to inquire about booking Nevra Stays!';
      window.open(`https://wa.me/919560023669?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    });
  }


  // ---- 1. Topbar Scroll Effect ----
  const topbar = document.getElementById('topbar');
  const handleScroll = () => {
    if (topbar) {
      topbar.classList.toggle('scrolled', window.scrollY > 40);
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---- 2. Mobile Drawer Navigation ----
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-cta');

  const closeDrawer = () => {
    if (hamburgerBtn) {
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      hamburgerBtn.classList.toggle('active', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', closeDrawer);
    }

    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  // ---- 3. Hero Bottom Teaser Cycling (MI-Travel Reference Feature) ----
  const teaserHighlights = [
    {
      tag: '32ND FLOOR SUNSET',
      title: 'Panoramic Balcony & Horizon',
      img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/fa25abe3-5b21-4876-9497-6ff8fcef6514.jpeg?im_w=240'
    },
    {
      tag: 'MASTER BEDROOM',
      title: 'King Suite Facing Skyline',
      img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/067d73cf-a690-46c7-94d0-356b97ed89d1.jpeg?im_w=240'
    },
    {
      tag: 'LIVING LOUNGE',
      title: 'Designer Seating & Decor',
      img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/67b5830d-e53a-4486-bab7-38f362916277.jpeg?im_w=240'
    }
  ];

  let currentTeaserIdx = 0;
  const teaserThumb = document.querySelector('.teaser-thumb img');
  const teaserTag = document.querySelector('.teaser-tag');
  const teaserTitle = document.querySelector('.teaser-title');
  const teaserPrev = document.getElementById('teaserPrev');
  const teaserNext = document.getElementById('teaserNext');

  function updateTeaser(idx) {
    currentTeaserIdx = (idx + teaserHighlights.length) % teaserHighlights.length;
    const item = teaserHighlights[currentTeaserIdx];
    if (teaserThumb) teaserThumb.src = item.img;
    if (teaserTag) teaserTag.textContent = item.tag;
    if (teaserTitle) teaserTitle.textContent = item.title;
  }

  if (teaserPrev && teaserNext) {
    teaserPrev.addEventListener('click', () => updateTeaser(currentTeaserIdx - 1));
    teaserNext.addEventListener('click', () => updateTeaser(currentTeaserIdx + 1));
  }

  // ---- 4. Gallery System (Categories & Aspect Ratio Filtering) ----
  const inspirationCards = Array.from(document.querySelectorAll('.inspiration-card'));
  const quoteCard = document.querySelector('.inspiration-quote-card');
  const navTabs = document.querySelectorAll('.nav-tab');
  const dimFilterPills = document.querySelectorAll('.dim-filter-pill');
  const emptyState = document.getElementById('galleryEmptyState');
  const resetBtn = document.getElementById('galleryResetBtn');

  let activeCategory = 'all';
  let activeOrientation = 'all';

  function filterGallery() {
    let visibleCount = 0;
    inspirationCards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      const matchCat = (activeCategory === 'all' || cardCat === activeCategory);

      if (matchCat) {
        card.classList.remove('is-hidden');
        card.style.display = '';
        visibleCount++;
      } else {
        card.classList.add('is-hidden');
        card.style.display = 'none';
      }
    });

    if (quoteCard) {
      quoteCard.style.display = (activeCategory === 'all') ? '' : 'none';
    }

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  
  // ---- Dynamic Tab & Review Counts (Issue 5) ----
  function updateTabCounts() {
    navTabs.forEach(tab => {
      const filter = tab.getAttribute('data-filter');
      const countEl = tab.querySelector('.nav-tab-count');
      if (!countEl) return;
      if (filter === 'all') {
        countEl.textContent = inspirationCards.length;
      } else {
        countEl.textContent = inspirationCards.filter(c => c.getAttribute('data-category') === filter).length;
      }
    });
  }
  updateTabCounts();

  // Dynamic review count display
  const openReviewsBtnEl = document.getElementById('openAllReviewsBtn');
  if (openReviewsBtnEl && typeof allReviewsData !== 'undefined') {
    openReviewsBtnEl.textContent = `Show all ${allReviewsData.length} reviews`;
  }

  // Category Tab Click
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      navTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-pressed', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-pressed', 'true');

      activeCategory = tab.getAttribute('data-filter') || 'all';
      filterGallery();
    });
  });

  // Dimension Pill Click
  dimFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      dimFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      activeOrientation = pill.getAttribute('data-orientation') || 'all';
      filterGallery();
    });
  });

  // Reset Button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeCategory = 'all';
      activeOrientation = 'all';

      navTabs.forEach(t => {
        const isAll = t.getAttribute('data-filter') === 'all';
        t.classList.toggle('active', isAll);
        t.setAttribute('aria-selected', isAll ? 'true' : 'false');
      });

      dimFilterPills.forEach(p => {
        p.classList.toggle('active', p.getAttribute('data-orientation') === 'all');
      });

      filterGallery();
    });
  }

  // ---- 5. Enhanced Fullscreen Lightbox Modal ----
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCat = document.getElementById('lightbox-cat');
  const lightboxDim = document.getElementById('lightbox-dim');
  const lightboxCounter = document.getElementById('lightbox-counter');

  let currentVisibleCards = [];
  let currentLightboxIdx = 0;

  function getVisibleCards() {
    return inspirationCards.filter(c => !c.classList.contains('is-hidden') && c.style.display !== 'none');
  }

  function updateLightbox(index) {
    currentVisibleCards = getVisibleCards();
    if (currentVisibleCards.length === 0) return;

    currentLightboxIdx = (index + currentVisibleCards.length) % currentVisibleCards.length;
    const card = currentVisibleCards[currentLightboxIdx];

    const src = card.getAttribute('data-src') || card.querySelector('img').src;
    const title = card.getAttribute('data-title') || 'Nevra Stays Room Perspective';
    const desc = card.getAttribute('data-desc') || '';
    const catName = card.getAttribute('data-catname') || 'Apartment Gallery';
    const dims = card.getAttribute('data-dims') || '';

    // Smooth image transition
    lightboxImg.style.opacity = '0.3';
    lightboxImg.style.transform = 'scale(0.98)';

    const tempImg = new Image();
    tempImg.onload = () => {
      lightboxImg.src = src;
      lightboxImg.alt = title;
      lightboxImg.style.opacity = '1';
      lightboxImg.style.transform = 'scale(1)';
    };
    tempImg.src = src;

    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxDesc) lightboxDesc.textContent = desc;
    if (lightboxCat) lightboxCat.textContent = catName;
    if (lightboxDim) lightboxDim.textContent = dims;
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentLightboxIdx + 1} / ${currentVisibleCards.length}`;
    }

    // Preload adjacent images
    if (currentVisibleCards.length > 1) {
      const nextIdx = (currentLightboxIdx + 1) % currentVisibleCards.length;
      const prevIdx = (currentLightboxIdx - 1 + currentVisibleCards.length) % currentVisibleCards.length;
      const nextImg = new Image();
      nextImg.src = currentVisibleCards[nextIdx].getAttribute('data-src');
      const prevImg = new Image();
      prevImg.src = currentVisibleCards[prevIdx].getAttribute('data-src');
    }
  }

  let lightboxTrigger = null;

  function openLightbox(card) {
    lightboxTrigger = document.activeElement;
    currentVisibleCards = getVisibleCards();
    const idx = currentVisibleCards.indexOf(card);
    if (idx !== -1) {
      updateLightbox(idx);
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (lightboxClose) lightboxClose.focus();
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      if (lightboxTrigger) {
        lightboxTrigger.focus();
        lightboxTrigger = null;
      }
    }
  }

  inspirationCards.forEach(card => {
    card.addEventListener('click', () => openLightbox(card));
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => updateLightbox(currentLightboxIdx - 1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => updateLightbox(currentLightboxIdx + 1));

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') updateLightbox(currentLightboxIdx - 1);
    if (e.key === 'ArrowRight') updateLightbox(currentLightboxIdx + 1);
  });

  // Touch Swipe for mobile lightbox
  let touchStartX = 0;
  let touchEndX = 0;

  if (lightbox) {
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) updateLightbox(currentLightboxIdx - 1);
        else updateLightbox(currentLightboxIdx + 1);
      }
    }, { passive: true });
  }

  // Smooth scroll for anchor links (respects prefers-reduced-motion)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = topbar ? topbar.offsetHeight + 10 : 80;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPos, behavior: scrollBehavior });
      }
    });
  });



  // ==========================================================================
  // AIRBNB 4.88 GUEST FAVOURITE REVIEWS & MODAL CONTROLLER
  // ==========================================================================
  // --- Showcase Card → Gallery Filter Navigation ---
  document.querySelectorAll('.showcase-card[data-gallery-filter]').forEach(card => {
    card.addEventListener('click', () => {
      const filter = card.getAttribute('data-gallery-filter');
      const tab = document.querySelector(`.nav-tab[data-filter="${filter}"]`);
      if (tab) tab.click();
      const gallery = document.getElementById('gallery');
      if (gallery) {
        const offset = topbar ? topbar.offsetHeight + 10 : 80;
        const targetPos = gallery.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPos, behavior: scrollBehavior });
      }
    });
  });

  // --- Hero Date Search → Airbnb URL Builder ---
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      const baseUrl = 'https://www.airbnb.co.uk/rooms/1645744603760645099';
      const params = new URLSearchParams();
      const checkin = document.getElementById('heroCheckin')?.value;
      const checkout = document.getElementById('heroCheckout')?.value;
      const guests = document.getElementById('heroGuests')?.value;
      if (checkin) params.set('check_in', checkin);
      if (checkout) params.set('check_out', checkout);
      if (guests) params.set('adults', guests);
      const url = params.toString() ? `${baseUrl}?${params}` : baseUrl;
      window.open(url, '_blank', 'noopener');
    });
  }



  const openModalBtn = document.getElementById('openAllReviewsBtn');
  const howReviewsWorkBtn = document.getElementById('howReviewsWorkTrigger');
  const reviewsModal = document.getElementById('reviewsModalOverlay');
  const closeModalBtn = document.getElementById('closeReviewsModalBtn');
  const modalScroll = document.getElementById('reviewsModalScroll');
  const modalReviewsList = document.getElementById('modalReviewsList');
  const modalReviewsCounter = document.getElementById('modalReviewsCounter');
  const modalSortSelect = document.getElementById('modalSortSelect');
  const modalSearchToggleBtn = document.getElementById('modalSearchToggleBtn');
  const modalSearchInputContainer = document.getElementById('modalSearchInputContainer');
  const modalSearchInput = document.getElementById('modalSearchInput');
  const modalSearchClearBtn = document.getElementById('modalSearchClearBtn');

  // Mention scroll tracks & navigation buttons
  const mentionsTrack = document.getElementById('mentionsTrack');
  const mentionsPrevBtn = document.getElementById('mentionsPrevBtn');
  const mentionsNextBtn = document.getElementById('mentionsNextBtn');

  const modalMentionsTrack = document.getElementById('modalMentionsTrack');
  const modalMentionsPrevBtn = document.getElementById('modalMentionsPrevBtn');
  const modalMentionsNextBtn = document.getElementById('modalMentionsNextBtn');

  let activeMentionFilter = null;
  let activeSearchQuery = '';
  let activeSortOrder = 'relevant';

  // Helper: Escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Helper: Render Stars
  function renderStars(rating) {
    let s = '';
    for (let i = 0; i < 5; i++) {
      s += i < rating ? '★' : '☆';
    }
    return s;
  }

  // Create Review Card DOM element or HTML
  function createReviewCardHTML(r) {
    const stars = renderStars(r.rating);
    const isLong = r.text && r.text.length > 200;
    const truncated = isLong ? r.text.substring(0, 195) + '...' : r.text;

    let responseHTML = '';
    if (r.response) {
      responseHTML = `
        <div class="host-response-box">
          <div class="host-response-header">
            <img src="${r.response.avatar}" alt="Gaurav" class="host-avatar" loading="lazy" />
            <div>
              <div class="host-name">${escapeHtml(r.response.author)}</div>
              <div class="host-date">${escapeHtml(r.response.date)}</div>
            </div>
          </div>
          <p class="host-text">${escapeHtml(r.response.text).replace(/\n/g, '<br/>')}</p>
        </div>
      `;
    }

    return `
      <article class="airbnb-review-card modal-review-item" data-review-id="${r.id}">
        <div class="reviewer-header">
          <img src="${r.avatar}" alt="${escapeHtml(r.author)}" class="reviewer-avatar" loading="lazy" onerror="this.src='https://a0.muscache.com/im/Portrait/Avatars/v2/blue?im_w=120&im_t=${encodeURIComponent(r.author[0])}&im_s=43&im_f=AirbnbCerealLatinMedium.ttf&im_c=0d4daa&script=latin';" />
          <div class="reviewer-meta">
            <h3 class="reviewer-name">${escapeHtml(r.author)}</h3>
            <div class="reviewer-tenure">${escapeHtml(r.tenure)}</div>
          </div>
        </div>
        <div class="review-rating-timeline">
          <span class="review-stars-airbnb">${stars}</span>
          <span class="timeline-dot">&middot;</span>
          <span class="review-timeline">${escapeHtml(r.date)}</span>
        </div>
        <div class="review-body">
          <p class="review-full-text" ${isLong ? 'data-full="' + escapeHtml(r.text) + '" data-truncated="' + escapeHtml(truncated) + '"' : ''}>
            ${escapeHtml(isLong ? truncated : r.text).replace(/\n/g, '<br/>')}
          </p>
          ${isLong ? '<button class="review-expand-btn" type="button">Show more &gt;</button>' : ''}
        </div>
        ${responseHTML}
      </article>
    `;
  }

  // Render Modal Reviews based on filter and search
  function renderModalReviews() {
    if (!modalReviewsList) return;

    let filtered = [...allReviewsData];

    // Filter by mention tag
    if (activeMentionFilter) {
      const q = activeMentionFilter.toLowerCase();
      filtered = filtered.filter(r => {
        const combined = (r.text + ' ' + (r.response ? r.response.text : '')).toLowerCase();
        if (q === 'hospitality') return combined.includes('host') || combined.includes('responsive') || combined.includes('help') || combined.includes('kind') || combined.includes('care');
        if (q === 'view') return combined.includes('view') || combined.includes('balcony') || combined.includes('sunset') || combined.includes('skyline');
        if (q === 'comfort') return combined.includes('comfort') || combined.includes('cozy') || combined.includes('bed') || combined.includes('relax');
        if (q === 'cleanliness') return combined.includes('clean') || combined.includes('hygiene') || combined.includes('maintain');
        if (q === 'accuracy') return combined.includes('accurate') || combined.includes('photo') || combined.includes('shown') || combined.includes('same');
        if (q === 'check-in') return combined.includes('check-in') || combined.includes('check in') || combined.includes('lock') || combined.includes('smooth');
        if (q === 'condition') return combined.includes('maintain') || combined.includes('condition') || combined.includes('apartment');
        if (q === 'amenities') return combined.includes('amenit') || combined.includes('kitchen') || combined.includes('wifi') || combined.includes('spices');
        if (q === 'decor') return combined.includes('decor') || combined.includes('beautiful') || combined.includes('vibe');
        if (q === 'indoor spaces') return combined.includes('space') || combined.includes('room') || combined.includes('apartment');
        return combined.includes(q);
      });
    }

    // Filter by search keyword
    if (activeSearchQuery.trim()) {
      const sq = activeSearchQuery.trim().toLowerCase();
      filtered = filtered.filter(r => {
        return (r.author && r.author.toLowerCase().includes(sq)) ||
               (r.text && r.text.toLowerCase().includes(sq)) ||
               (r.date && r.date.toLowerCase().includes(sq)) ||
               (r.response && r.response.text.toLowerCase().includes(sq));
      });
    }

    // Sort order
    if (activeSortOrder === 'newest') {
      // id 1 is the most recent
      filtered.sort((a, b) => a.id - b.id);
    } else if (activeSortOrder === 'highest') {
      filtered.sort((a, b) => b.rating - a.rating || a.id - b.id);
    } else if (activeSortOrder === 'lowest') {
      filtered.sort((a, b) => a.rating - b.rating || a.id - b.id);
    } else {
      // 'relevant': default curated Airbnb ranking
      filtered.sort((a, b) => a.id - b.id);
    }

    // Update Counter
    if (modalReviewsCounter) {
      if (activeSearchQuery.trim() || activeMentionFilter) {
        modalReviewsCounter.textContent = `${filtered.length} of 33 reviews`;
      } else {
        modalReviewsCounter.textContent = `33 reviews`;
      }
    }

    if (filtered.length === 0) {
      modalReviewsList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: #717171;">
          <p style="font-size: 1.1rem; font-weight: 600; color: #222; margin-bottom: 0.5rem;">No reviews matching "${escapeHtml(activeSearchQuery || activeMentionFilter)}"</p>
          <p style="font-size: 0.9rem;">Try clearing your filters or searching for another keyword.</p>
        </div>
      `;
      return;
    }

    modalReviewsList.innerHTML = filtered.map(r => createReviewCardHTML(r)).join('');
  }

  // Open Modal
  let reviewsModalTrigger = null;

  function openReviewsModal() {
    if (!reviewsModal) return;
    reviewsModalTrigger = document.activeElement;
    renderModalReviews();
    reviewsModal.classList.add('active');
    reviewsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeModalBtn) closeModalBtn.focus();
  }

  // Close Modal
  function closeReviewsModal() {
    if (!reviewsModal) return;
    reviewsModal.classList.remove('active');
    reviewsModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (reviewsModalTrigger) {
      reviewsModalTrigger.focus();
      reviewsModalTrigger = null;
    }
  }

  if (openModalBtn) {
    openModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openReviewsModal();
    });
  }
  if (howReviewsWorkBtn) {
    howReviewsWorkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openReviewsModal();
    });
  }
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeReviewsModal();
    });
  }

  // Close on backdrop click
  if (reviewsModal) {
    reviewsModal.addEventListener('click', (e) => {
      if (e.target === reviewsModal) {
        closeReviewsModal();
      }
    });
  }

  
  // Focus Trap for Lightbox Modal
  if (lightbox) {
    lightbox.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusable = lightbox.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  // Focus Trap for Reviews Modal
  if (reviewsModal) {
    reviewsModal.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusable = reviewsModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && reviewsModal && reviewsModal.classList.contains('active')) {
      closeReviewsModal();
    }
  });

  // Expand / collapse review text in both page grid and modal
  document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('review-expand-btn')) {
      const btn = e.target;
      const textEl = btn.previousElementSibling;
      if (!textEl) return;
      const full = textEl.getAttribute('data-full');
      const truncated = textEl.getAttribute('data-truncated');
      if (btn.textContent.includes('more')) {
        textEl.innerHTML = escapeHtml(full).replace(/\n/g, '<br/>');
        btn.textContent = 'Show less';
      } else {
        textEl.innerHTML = escapeHtml(truncated).replace(/\n/g, '<br/>');
        btn.textContent = 'Show more >';
      }
    }
  });

  // Mention Pills scroll navigation
  if (mentionsTrack && mentionsPrevBtn && mentionsNextBtn) {
    mentionsPrevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      mentionsTrack.scrollBy({ left: -280, behavior: 'smooth' });
    });
    mentionsNextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      mentionsTrack.scrollBy({ left: 280, behavior: 'smooth' });
    });
  }

  if (modalMentionsTrack && modalMentionsPrevBtn && modalMentionsNextBtn) {
    modalMentionsPrevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modalMentionsTrack.scrollBy({ left: -280, behavior: 'smooth' });
    });
    modalMentionsNextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modalMentionsTrack.scrollBy({ left: 280, behavior: 'smooth' });
    });
  }

  // Mention Pills Filtering (Sync between main page and modal)
  function handleMentionClick(pillBtn) {
    const mention = pillBtn.getAttribute('data-mention');
    const wasActive = pillBtn.classList.contains('active');

    // Remove active from all pills
    document.querySelectorAll('.mention-pill').forEach(p => p.classList.remove('active'));

    if (wasActive) {
      activeMentionFilter = null;
    } else {
      activeMentionFilter = mention;
      document.querySelectorAll(`.mention-pill[data-mention="${mention}"]`).forEach(p => p.classList.add('active'));
    }

    renderModalReviews();
  }

  document.querySelectorAll('.mention-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      handleMentionClick(pill);
      // If clicked on main page, open modal to show filtered results immediately!
      if (!reviewsModal.classList.contains('active')) {
        openReviewsModal();
      }
    });
  });

  // Modal Sort Select
  if (modalSortSelect) {
    modalSortSelect.addEventListener('change', (e) => {
      activeSortOrder = e.target.value;
      renderModalReviews();
    });
  }

  // Modal Search toggle and input
  if (modalSearchToggleBtn && modalSearchInputContainer && modalSearchInput) {
    modalSearchToggleBtn.addEventListener('click', () => {
      modalSearchInputContainer.classList.toggle('active');
      if (modalSearchInputContainer.classList.contains('active')) {
        modalSearchInput.focus();
      }
    });

    modalSearchInput.addEventListener('input', (e) => {
      activeSearchQuery = e.target.value;
      if (modalSearchClearBtn) {
        modalSearchClearBtn.classList.toggle('active', activeSearchQuery.length > 0);
      }
      renderModalReviews();
    });

    if (modalSearchClearBtn) {
      modalSearchClearBtn.addEventListener('click', () => {
        modalSearchInput.value = '';
        activeSearchQuery = '';
        modalSearchClearBtn.classList.remove('active');
        renderModalReviews();
      });
    }
  }

  // Initial render of modal list
  renderModalReviews();

  // ==========================================================================
  // AIRBNB-INSPIRED LOCATION MAP WITH PRECISE PINPOINT & EXPLORER
  // ==========================================================================
  const locationMapEl = document.getElementById('locationMap');
  function initLocationMap() {
    if (!locationMapEl || typeof L === 'undefined') {
      if (locationMapEl) {
        locationMapEl.innerHTML = `
          <div class="map-fallback-banner">
            <h3 style="font-size: 1.1rem; color: #1e293b; margin-bottom: 0.5rem;">Supernova, Sector 94, Noida</h3>
            <p style="color: #64748b; font-size: 0.9rem; margin-bottom: 1rem;">Interactive map preview is unavailable. Explore the exact coordinates on Google Maps.</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Supernova+Sector+94+Noida" target="_blank" rel="noopener" class="btn btn-teal">
              Open in Google Maps &nearr;
            </a>
          </div>
        `;
      }
      return;
    }
    // Exact pinpoint at Supernova, Sector 94, Noida
    const supernovaCoords = [28.54318, 77.3218];
    const map = L.map('locationMap', {
      center: supernovaCoords,
      zoom: 16,
      zoomControl: false,
      attributionControl: true,
      scrollWheelZoom: false
    });

    // Esri World Street Map (High Reliability, NO API Key, No Origin Blocking, No Watermarks)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: 'Tiles &copy; <a href="https://www.esri.com/" target="_blank" rel="noopener">Esri</a> &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, TomTom'
    }).addTo(map);

    // Invalidate size to guarantee tile loading on load and window resize
    setTimeout(() => { map.invalidateSize(); }, 200);
    setTimeout(() => { map.invalidateSize(); }, 600);
    window.addEventListener('resize', () => { map.invalidateSize(); });

    // Exact Airbnb Central House Pin
    const stayPinIcon = L.divIcon({
      className: 'airbnb-home-pin-wrap',
      html: `
        <div class="airbnb-home-pin" title="Nevra Stays — 32nd Floor, Supernova, Noida">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
      `,
      iconSize: [48, 48],
      iconAnchor: [24, 24]
    });

    const homeMarker = L.marker(supernovaCoords, { icon: stayPinIcon, zIndexOffset: 1000 }).addTo(map);
    homeMarker.bindPopup(`
      <div style="font-family: inherit; padding: 6px 4px; min-width: 170px;">
        <h4 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 700; color: #111;">Nevra Stays</h4>
        <p style="margin: 0; font-size: 12px; color: #555;">32nd Floor, Supernova, Sector 94, Noida</p>
        <div style="margin-top: 6px; font-size: 11px; font-weight: 700; color: #f26a5a;">★ 4.88 Airbnb Guest Favourite</div>
      </div>
    `);

    // Zoom Controls
    const zoomInBtn = document.getElementById('mapZoomInBtn');
    const zoomOutBtn = document.getElementById('mapZoomOutBtn');
    const fullscreenBtn = document.getElementById('mapFullscreenBtn');
    const mapWrapper = document.getElementById('mapWrapper');

    if (zoomInBtn) zoomInBtn.addEventListener('click', () => map.zoomIn());
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => map.zoomOut());

    if (fullscreenBtn && mapWrapper) {
      fullscreenBtn.addEventListener('click', () => {
        const isFs = mapWrapper.classList.toggle('is-fullscreen');
        document.body.style.overflow = isFs ? 'hidden' : '';
        setTimeout(() => map.invalidateSize(), 300);
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mapWrapper.classList.contains('is-fullscreen')) {
          mapWrapper.classList.remove('is-fullscreen');
          document.body.style.overflow = '';
          setTimeout(() => map.invalidateSize(), 300);
        }
      });
    }

    // POI Dataset for Local Exploration
    const neighborhoodPOIs = {
      restaurants: [
        { name: "Turban King Chaap", time: "2 min walk", dist: "150m", lat: 28.5442, lng: 77.3228, type: "North Indian Delicacies", color: "#f59e0b" },
        { name: "The Yellow Chilli", time: "7 min drive", dist: "2.8km", lat: 28.5480, lng: 77.3290, type: "Fine Dining by Sanjeev Kapoor", color: "#f59e0b" },
        { name: "Haldiram's Sector 18", time: "6 min drive", dist: "2.4km", lat: 28.5680, lng: 77.3220, type: "Indian Street & Sweets", color: "#f59e0b" },
        { name: "Imperfecto Gardens Galleria", time: "7 min drive", dist: "2.9km", lat: 28.5650, lng: 77.3245, type: "Rooftop Lounge & Bar", color: "#f59e0b" }
      ],
      groceries: [
        { name: "24SEVEN Convenience Store", time: "2 min walk", dist: "180m", lat: 28.5422, lng: 77.3212, type: "24/7 Essentials & Snacks", color: "#3b82f6" },
        { name: "Blinkit Fast Delivery Hub", time: "Instant delivery", dist: "Supernova", lat: 28.5435, lng: 77.3210, type: "10-Minute Dark Store", color: "#3b82f6" },
        { name: "Nature's Basket Gourmet", time: "5 min drive", dist: "1.8km", lat: 28.5550, lng: 77.3250, type: "Organic Produce & Import", color: "#3b82f6" }
      ],
      shopping: [
        { name: "DLF Mall of India", time: "7 min drive", dist: "2.9km", lat: 28.5685, lng: 77.3210, type: "Major Shopping Mall", color: "#0ea5e9" },
        { name: "Gardens Galleria Mall", time: "7 min drive", dist: "2.8km", lat: 28.5655, lng: 77.3235, type: "Fashion & Entertainment", color: "#0ea5e9" },
        { name: "Sector 18 Central Market", time: "6 min drive", dist: "2.3km", lat: 28.5695, lng: 77.3225, type: "Noida's Premier Market Hub", color: "#0ea5e9" }
      ],
      transport: [
        { name: "Okhla Bird Sanctuary Metro Station", time: "Nearby", dist: "~280m", lat: 28.5425, lng: 77.3240, type: "Magenta Line (Airport & South Delhi)", color: "#14b8a6" },
        { name: "Botanical Garden Metro Interchange", time: "5 min drive", dist: "1.9km", lat: 28.5630, lng: 77.3330, type: "Blue Line & Magenta Line Junction", color: "#14b8a6" },
        { name: "Noida-Greater Noida Expressway", time: "Direct Access", dist: "50m", lat: 28.5420, lng: 77.3205, type: "Signal-Free 6-Lane Expressway", color: "#14b8a6" }
      ],
      attractions: [
        { name: "Okhla Bird Sanctuary", time: "4 min walk", dist: "400m", lat: 28.5470, lng: 77.3160, type: "Serene Wetland & Bird Sanctuary", color: "#a855f7" },
        { name: "Worlds of Wonder", time: "7 min drive", dist: "2.7km", lat: 28.5640, lng: 77.3260, type: "Amusement & Water Park", color: "#a855f7" },
        { name: "Rashtriya Dalit Prerna Sthal", time: "5 min drive", dist: "2.0km", lat: 28.5520, lng: 77.3120, type: "Monumental Architecture & Green Lawns", color: "#a855f7" }
      ],
      cafe: [
        { name: "Starbucks Supernova", time: "1 min walk", dist: "Ground Floor", lat: 28.5430, lng: 77.3222, type: "Signature Coffees & Patio", color: "#d97706" },
        { name: "Chaayos Supernova", time: "2 min walk", dist: "120m", lat: 28.5434, lng: 77.3215, type: "Desi Chai & Light Bites", color: "#d97706" },
        { name: "Blue Tokai Coffee Roasters", time: "6 min drive", dist: "2.2km", lat: 28.5610, lng: 77.3280, type: "Artisan Roastery", color: "#d97706" }
      ]
    };

    const poiMarkers = [];
    const clearPOIs = () => {
      poiMarkers.forEach(m => map.removeLayer(m));
      poiMarkers.length = 0;
    };

    // Search Box & Category Explorer Dropdown (Image 4 Requirement)
    const mapSearchBox = document.getElementById('mapSearchBox');
    const searchInput = document.getElementById('mapLocalSearch');
    const searchClear = document.getElementById('mapSearchClear');
    const mapCategoryCard = document.getElementById('mapCategoryCard');
    const mapFloatingPanel = document.getElementById('mapFloatingPanel');

    function showMapDropdown() {
      if (mapCategoryCard) {
        mapCategoryCard.classList.add('is-visible');
      }
    }

    function hideMapDropdown() {
      if (mapCategoryCard) {
        mapCategoryCard.classList.remove('is-visible');
      }
    }

    if (searchInput) {
      searchInput.addEventListener('click', (e) => {
        e.stopPropagation();
        showMapDropdown();
      });
      searchInput.addEventListener('focus', () => {
        showMapDropdown();
      });
    }

    if (mapSearchBox) {
      mapSearchBox.addEventListener('click', (e) => {
        if (e.target !== searchClear) {
          showMapDropdown();
        }
      });
    }

    document.addEventListener('click', (e) => {
      if (mapFloatingPanel && !mapFloatingPanel.contains(e.target)) {
        hideMapDropdown();
      }
    });

    const catButtons = document.querySelectorAll('.map-cat-item');
    catButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cat = btn.getAttribute('data-category');
        const wasActive = btn.classList.contains('active');

        catButtons.forEach(b => b.classList.remove('active'));
        clearPOIs();

        if (!wasActive && neighborhoodPOIs[cat]) {
          btn.classList.add('active');
          const group = [];
          neighborhoodPOIs[cat].forEach(place => {
            const icon = L.divIcon({
              className: 'poi-pin-wrap',
              html: `<div class="poi-marker-pin" style="background:${place.color};" title="${place.name}">•</div>`,
              iconSize: [28, 28],
              iconAnchor: [14, 14]
            });

            const m = L.marker([place.lat, place.lng], { icon }).addTo(map);
            m.bindPopup(`
              <div style="font-family: inherit; padding: 4px; min-width: 140px;">
                <div style="font-weight: 700; font-size: 13px; color: #111;">${place.name}</div>
                <div style="font-size: 11px; color: #666; margin: 2px 0;">${place.type}</div>
                <div style="font-size: 11px; font-weight: 600; color: #14b8a6;">${place.time} (${place.dist})</div>
              </div>
            `);
            poiMarkers.push(m);
            group.push([place.lat, place.lng]);
          });

          group.push(supernovaCoords);
          const bounds = L.latLngBounds(group);
          map.fitBounds(bounds, { padding: [50, 50], maxZoom: 16 });

          if (searchInput) {
            const catLabel = btn.querySelector('.cat-label')?.textContent || cat;
            searchInput.value = catLabel;
          }
          if (searchClear) searchClear.classList.add('active');
        } else {
          map.setView(supernovaCoords, 16);
          if (searchInput) searchInput.value = '';
          if (searchClear) searchClear.classList.remove('active');
        }
      });
    });

    // Local Search Input Filter
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        showMapDropdown();
        const q = e.target.value.toLowerCase().trim();
        if (searchClear) searchClear.classList.toggle('active', q.length > 0);

        if (!q) {
          clearPOIs();
          map.setView(supernovaCoords, 16);
          return;
        }

        clearPOIs();
        catButtons.forEach(b => b.classList.remove('active'));

        const matches = [];
        Object.keys(neighborhoodPOIs).forEach(cat => {
          neighborhoodPOIs[cat].forEach(place => {
            if (place.name.toLowerCase().includes(q) || place.type.toLowerCase().includes(q)) {
              matches.push(place);
            }
          });
        });

        if (matches.length > 0) {
          const group = [];
          matches.forEach(place => {
            const icon = L.divIcon({
              className: 'poi-pin-wrap',
              html: `<div class="poi-marker-pin" style="background:#222;" title="${place.name}">•</div>`,
              iconSize: [28, 28],
              iconAnchor: [14, 14]
            });
            const m = L.marker([place.lat, place.lng], { icon }).addTo(map);
            m.bindPopup(`
              <div style="font-family: inherit; padding: 4px; min-width: 140px;">
                <div style="font-weight: 700; font-size: 13px; color: #111;">${place.name}</div>
                <div style="font-size: 11px; color: #666; margin: 2px 0;">${place.type}</div>
                <div style="font-size: 11px; font-weight: 600; color: #f26a5a;">${place.time} (${place.dist})</div>
              </div>
            `).openPopup();
            poiMarkers.push(m);
            group.push([place.lat, place.lng]);
          });
          group.push(supernovaCoords);
          map.fitBounds(L.latLngBounds(group), { padding: [50, 50], maxZoom: 17 });
        }
      });

      if (searchClear) {
        searchClear.addEventListener('click', (e) => {
          e.stopPropagation();
          searchInput.value = '';
          searchClear.classList.remove('active');
          clearPOIs();
          catButtons.forEach(b => b.classList.remove('active'));
          map.setView(supernovaCoords, 16);
        });
      }
    }
  }

  // Location Map Initialization Controller
  let mapInitialized = false;
  function safeInitLocationMap() {
    if (mapInitialized) return;
    mapInitialized = true;
    initLocationMap();
  }

  if (locationMapEl) {
    if ('IntersectionObserver' in window) {
      const mapObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          safeInitLocationMap();
          mapObserver.disconnect();
        }
      }, { rootMargin: '300px' });
      mapObserver.observe(locationMapEl);
    } else {
      safeInitLocationMap();
    }

    // Proactively initialize map after delay to ensure it is rendered and ready
    setTimeout(() => {
      safeInitLocationMap();
    }, 600);
  }
  
});
