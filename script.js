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


  // ---- Hero Cursor-Reactive Wave Canvas (Smooth Light Wind Drift & Soft Cursor Airflow) ----
  function initHeroWavesCanvas() {
    const canvas = document.getElementById('heroWavesCanvas');
    const hero = document.getElementById('hero');
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let targetMouseX = -1000;
    let targetMouseY = -1000;
    let mouseX = -1000;
    let mouseY = -1000;
    let isMouseOver = false;

    function resize() {
      // Calculate true layout width accommodating body zoom: 0.9
      const fullWidth = Math.ceil(Math.max(
        hero.offsetWidth,
        canvas.offsetWidth,
        document.documentElement.clientWidth,
        window.innerWidth / 0.9
      ));
      const fullHeight = Math.ceil(Math.max(
        hero.offsetHeight,
        canvas.offsetHeight,
        hero.clientHeight,
        700
      ));

      width = fullWidth;
      height = fullHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      // Do NOT set style.width in pixels! Keep 100% so it always fills the container edge-to-edge
      canvas.style.width = '100%';
      canvas.style.height = '100%';

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      // Adjust cursor position for zoom
      targetMouseX = (e.clientX - rect.left) / 0.9;
      targetMouseY = (e.clientY - rect.top) / 0.9;
      isMouseOver = true;
    }, { passive: true });

    hero.addEventListener('mouseleave', () => {
      isMouseOver = false;
    }, { passive: true });

    let time = 0;
    // Reduced spacing between waves for a tighter, refined topographic texture (24px)
    const lineSpacing = 24;
    const radius = 260; // Gentle radius of cursor airflow influence

    function renderWaves() {
      const isNight = document.documentElement.classList.contains('theme-night') || document.body.classList.contains('theme-night');
      
      // In Day Mode, completely remove waves as per Reference Image 1
      if (!isNight) {
        ctx.clearRect(0, 0, width, height);
        requestAnimationFrame(renderWaves);
        return;
      }

      // Graceful, serene slowed pace for calming cinematic drift in Night Mode
      time += 0.0035;

      if (isMouseOver) {
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;
      } else {
        targetMouseX = -1000;
        targetMouseY = -1000;
        mouseX += (targetMouseX - mouseX) * 0.03;
        mouseY += (targetMouseY - mouseY) * 0.03;
      }

      ctx.clearRect(0, 0, width, height);

      // Start lines well above top and extend generously below bottom so hero is completely filled
      const numLines = Math.ceil(height / lineSpacing) + 8;
      ctx.lineWidth = 1.0;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';

      for (let i = -4; i < numLines; i++) {
        const baseY = i * lineSpacing;
        ctx.beginPath();

        const stepX = 6; // Ultra-smooth line curve
        const startX = -100;
        const endX = width + 120; // Extends well past the right corners

        for (let x = startX; x <= endX; x += stepX) {
          // Slowed, elegant flowing waves with graceful peaks and valleys
          const windFlow = time * 0.30;
          const primaryWave = Math.sin(x * 0.0075 - windFlow + i * 0.25) * 22.0;
          const secondaryWave = Math.sin(x * 0.0042 - windFlow * 0.75 + i * 0.16) * 9.0;
          const microWave = Math.sin(x * 0.014 - windFlow * 1.3 + i * 0.28) * 3.5;
          const ambientWave = primaryWave + secondaryWave + microWave;

          // Light cursor airflow: soft, gentle deflection around pointer
          let cursorEffect = 0;
          if (mouseX > -500) {
            const dx = x - mouseX;
            const dy = baseY - mouseY;
            const dist = Math.hypot(dx, dy);

            if (dist < radius) {
              const norm = 1 - dist / radius;
              const factor = norm * norm * (3 - 2 * norm); // Smooth Hermite curve
              const ripple = Math.sin(dist * 0.03 - time * 1.0) * 4.5 * factor;
              const repel = (dy / (dist + 40)) * 6.5 * factor;
              cursorEffect = ripple + repel;
            }
          }

          const currentY = baseY + ambientWave + cursorEffect;

          if (x === startX) {
            ctx.moveTo(x, currentY);
          } else {
            ctx.lineTo(x, currentY);
          }
        }

        ctx.stroke();
      }

      requestAnimationFrame(renderWaves);
    }

    requestAnimationFrame(renderWaves);
  }

  initHeroWavesCanvas();

  // ---- Floating 3D Isometric Room Slider (Directly Matching Reference UI) ----
  function initIsometricRoomSlider() {
    const panCanvas = document.getElementById('isometricPanCanvas');
    const countBadge = document.getElementById('slideCountBadge');
    const titleEl = document.getElementById('slideTitle');
    const descEl = document.getElementById('slideDesc');
    const pauseBtn = document.getElementById('sliderPauseBtn');
    const pauseBars = document.getElementById('pauseBarsIcon');
    const playTriangle = document.getElementById('playTriangleIcon');
    const dashes = document.querySelectorAll('.slider-dash');
    const clockEl = document.getElementById('sliderClock');
    const modePill = document.getElementById('sliderModePill');
    const viewport = document.getElementById('isometricViewport');
    const showcase = document.getElementById('heroIsometricShowcase');

    if (!panCanvas || !dashes.length) return;

    // 5 Distinct Architectural Spaces with Cinematic 3D Camera Focus Coordinates
    const slidesData = [
      {
        count: '01',
        total: '/05',
        title: 'Studio Suite',
        desc: 'Full 32nd-floor 3D architectural cutaway',
        transform: 'scale(1) translate(0%, 0%)'
      },
      {
        count: '02',
        total: '/05',
        title: 'Master Bedroom',
        desc: 'King bed, ambient lighting & work desk',
        transform: 'scale(2.05) translate(-5%, 19%)'
      },
      {
        count: '03',
        total: '/05',
        title: 'Living Lounge',
        desc: 'Designer couch, coffee table & heart-pattern rug',
        transform: 'scale(2.15) translate(-11%, -6%)'
      },
      {
        count: '04',
        total: '/05',
        title: 'Gourmet Kitchen',
        desc: 'Black marble countertop, induction hob & cookware',
        transform: 'scale(2.15) translate(19%, -2%)'
      },
      {
        count: '05',
        total: '/05',
        title: 'Skyline Balcony',
        desc: 'Sunset terrace, outdoor seating & open sky',
        transform: 'scale(2.25) translate(0%, 39%)'
      }
    ];

    let currentIndex = 0;
    let isPaused = false;
    let timer = null;
    const duration = 3800; // 3.8 seconds per space

    function goToSlide(index) {
      if (index < 0 || index >= slidesData.length) return;
      currentIndex = index;
      const data = slidesData[currentIndex];

      // Smooth camera glide to the focused 3D architectural space
      panCanvas.style.transform = data.transform;

      // Update caption text with gentle micro-transition
      if (titleEl && descEl && countBadge) {
        titleEl.style.opacity = '0';
        descEl.style.opacity = '0';
        titleEl.style.transform = 'translateY(4px)';
        descEl.style.transform = 'translateY(4px)';

        setTimeout(() => {
          countBadge.innerHTML = `${data.count}<span class="count-total">${data.total}</span>`;
          titleEl.textContent = data.title;
          descEl.textContent = data.desc;
          titleEl.style.opacity = '1';
          descEl.style.opacity = '1';
          titleEl.style.transform = 'translateY(0)';
          descEl.style.transform = 'translateY(0)';
        }, 150);
      }

      // Update active dash with animation restart
      dashes.forEach((dash, i) => {
        dash.classList.remove('active', 'paused');
        const fill = dash.querySelector('.dash-fill');
        if (fill) {
          fill.style.animation = 'none';
          // Trigger reflow to restart CSS keyframe
          void fill.offsetWidth;
          fill.style.animation = '';
        }

        if (i === currentIndex) {
          dash.classList.add('active');
          if (isPaused) {
            dash.classList.add('paused');
          }
        }
      });
    }

    function startTimer() {
      stopTimer();
      if (isPaused) return;
      timer = setInterval(() => {
        const next = (currentIndex + 1) % slidesData.length;
        goToSlide(next);
      }, duration);
    }

    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function setPaused(paused) {
      isPaused = paused;
      if (pauseBars && playTriangle) {
        pauseBars.style.display = isPaused ? 'none' : 'flex';
        playTriangle.style.display = isPaused ? 'flex' : 'none';
      }

      const activeDash = document.querySelector('.slider-dash.active');
      if (activeDash) {
        if (isPaused) {
          activeDash.classList.add('paused');
        } else {
          activeDash.classList.remove('paused');
        }
      }

      if (isPaused) {
        stopTimer();
      } else {
        startTimer();
      }
    }

    // Toggle pause/play on pause button click
    if (pauseBtn) {
      pauseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setPaused(!isPaused);
      });
    }

    // Click on progress dash jumps to that space
    dashes.forEach((dash) => {
      dash.addEventListener('click', (e) => {
        e.stopPropagation();
        const slideIdx = parseInt(dash.getAttribute('data-slide'), 10);
        if (!isNaN(slideIdx)) {
          goToSlide(slideIdx);
          if (!isPaused) {
            startTimer();
          }
        }
      });
    });

    // Real-Time Local Clock (Noida/Delhi IST)
    function updateLiveClock() {
      if (!clockEl) return;
      try {
        const now = new Date();
        const timeFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });

        clockEl.textContent = `${timeFormatter.format(now)} \u2022 Noida`;
      } catch (err) {
        // Fallback for environments with basic Intl
        const now = new Date();
        clockEl.textContent = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')} \u2022 Noida`;
      }
    }

    updateLiveClock();
    setInterval(updateLiveClock, 10000);

    // Subtle 3D perspective tilt on hover over viewport
    if (viewport && !window.matchMedia('(max-width: 992px)').matches) {
      viewport.addEventListener('mousemove', (e) => {
        const rect = viewport.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotX = (y / (rect.height / 2)) * -4;
        const rotY = (x / (rect.width / 2)) * 4;
        viewport.style.transform = `perspective(800px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
      });

      viewport.addEventListener('mouseleave', () => {
        viewport.style.transform = '';
      });

      viewport.style.cursor = 'pointer';
      viewport.setAttribute('title', 'Click to tour next room space');
      viewport.addEventListener('click', () => {
        const next = (currentIndex + 1) % slidesData.length;
        goToSlide(next);
        if (!isPaused) {
          startTimer();
        }
      });
    }

    // Initialize first slide and launch timer
    goToSlide(0);
    startTimer();
  }

  initIsometricRoomSlider();

  // ---- Hero Date Inputs Auto-Initialization ----
  function initHeroDates() {
    const checkin = document.getElementById('heroCheckin');
    const checkout = document.getElementById('heroCheckout');
    if (!checkin || !checkout) return;

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const format = (d) => d.toISOString().split('T')[0];
    checkin.min = format(today);
    checkout.min = format(today);

    if (!checkin.value) checkin.value = format(today);
    if (!checkout.value) checkout.value = format(tomorrow);

    checkin.addEventListener('change', () => {
      if (checkin.value) {
        const nextDay = new Date(checkin.value);
        nextDay.setDate(nextDay.getDate() + 1);
        checkout.min = format(nextDay);
        if (checkout.value && new Date(checkout.value) <= new Date(checkin.value)) {
          checkout.value = format(nextDay);
        }
      }
    });
  }

  initHeroDates();

  // ---- 1. Topbar Scroll Effect & Butter-Smooth Hero Minimization ----
  const topbar = document.getElementById('topbar');
  const heroSection = document.getElementById('hero');
  let isTicking = false;
  let isMinimized = false;

  const updateNavbarScroll = () => {
    if (!topbar) return;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const heroHeight = heroSection ? heroSection.offsetHeight : 650;

    // Hysteresis buffer (80px) to completely eliminate jitter and flickering
    const minimizeThreshold = Math.max(300, heroHeight - 140);
    const expandThreshold = Math.max(180, heroHeight - 220);

    if (!isMinimized && scrollY > minimizeThreshold) {
      isMinimized = true;
      topbar.classList.add('is-minimized');
    } else if (isMinimized && scrollY < expandThreshold) {
      isMinimized = false;
      topbar.classList.remove('is-minimized');
    }

    topbar.classList.toggle('scrolled', scrollY > 40);
    isTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(updateNavbarScroll);
      isTicking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    if (!isTicking) {
      window.requestAnimationFrame(updateNavbarScroll);
      isTicking = true;
    }
  }, { passive: true });

  updateNavbarScroll();

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

  // ==========================================================================
  // AUTHENTIC STUDIO APARTMENT GALLERY DATASET (22 Real Photos)
  // ==========================================================================
  const residenceItems = [
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/c04582ca-1798-4e2c-b8cf-902747939167.jpeg?im_w=960',
      title: '32nd Floor Skyline Horizon',
      tag: 'Skyline & Balcony',
      desc: 'Unmatched panoramic vistas over Noida from the 32nd floor of Supernova'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/fa25abe3-5b21-4876-9497-6ff8fcef6514.jpeg?im_w=960',
      title: 'Golden Hour Sunset View',
      tag: 'Skyline & Balcony',
      desc: 'Breathtaking golden light streaming through the floor-to-ceiling glass'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/297a72e1-97bd-4519-8681-61f09cd7c048.jpeg?im_w=960',
      title: 'Glittering Night Cityscape',
      tag: 'Skyline & Balcony',
      desc: 'The vibrant Noida skyline illuminated after dusk'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/936dfe43-7801-4b57-8096-3cfd5576f5d3.jpeg?im_w=960',
      title: 'Private High-Rise Balcony',
      tag: 'Skyline & Balcony',
      desc: 'Step outside into the fresh open sky on your private terrace'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/3d0d9a10-5fc9-42aa-a4e9-88d4d0e12f9a.jpeg?im_w=960',
      title: 'Balcony Overlook & Railing',
      tag: 'Skyline & Balcony',
      desc: 'Spectacular bird-eye view of Supernova grounds and highway'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/5622b9b5-22c1-4eaa-8df5-415154c97b6c.jpeg?im_w=960',
      title: 'Master Bedroom Suite (Wide)',
      tag: 'Bedroom Suite',
      desc: 'Spacious king-size bed arrangement with premium designer headboard'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/067d73cf-a690-46c7-94d0-356b97ed89d1.jpeg?im_w=960',
      title: 'Luxury Bedroom & Window View',
      tag: 'Bedroom Suite',
      desc: 'Plush bedding positioned directly facing the panoramic skyline'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/34d3aebf-6d45-49e8-989c-8e1d6b0b7922.jpeg?im_w=960',
      title: 'Warm Ambient Suite Lighting',
      tag: 'Bedroom Suite',
      desc: 'Curated mood lighting for a cozy and relaxing evening retreat'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/5ca8f7b2-a43a-41a2-bac8-cc7908fe7a0c.jpeg?im_w=960',
      title: 'Cozy Bed & Fluffy Linens',
      tag: 'Bedroom Suite',
      desc: 'Ultra-soft cushions and hotel-grade fresh sheets for restful sleep'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/1f2de06f-66f5-4258-88e0-a18eca8f4895.jpeg?im_w=960',
      title: 'Bedroom Comfort Details',
      tag: 'Bedroom Suite',
      desc: 'Detailed view of comfortable pillows and luxury texture fabrics'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/e4dbe06c-0e85-41df-80d5-b507003385cd.png?im_w=960',
      title: 'Panoramic Suite Perspective',
      tag: 'Studio Layout',
      desc: 'Wide view showing natural architectural flow between bed and windows'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/55c14974-44f7-4566-934d-9ad0c4c0a57c.jpeg?im_w=960',
      title: 'Designer Bedroom Corner',
      tag: 'Bedroom Suite',
      desc: 'Harmonious interior styling with modern aesthetic touches'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/67b5830d-e53a-4486-bab7-38f362916277.jpeg?im_w=960',
      title: 'Designer Lounge & Velvet Seating',
      tag: 'Living Lounge',
      desc: 'Vibrant plush armchairs and curated art pieces'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/65500336-4972-48c4-9320-a214b8df0693.jpeg?im_w=960',
      title: 'Cozy Living Space',
      tag: 'Living Lounge',
      desc: 'Wide relaxation zone with comfortable sofa and coffee table'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/4dae3cde-cba4-4222-b128-10dafec3671b.jpeg?im_w=960',
      title: 'Artistic Decor & Throw Pillows',
      tag: 'Living Lounge',
      desc: 'Boutique apartment aesthetic with custom textured textile art'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/79f65965-7408-49d5-a112-0b679c0e84f3.jpeg?im_w=960',
      title: 'Reading Nook & Side Table',
      tag: 'Living Lounge',
      desc: 'Perfect spot for your morning espresso or evening novel'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/3316e428-bc8e-4b34-9867-04d18295f5a6.jpeg?im_w=960',
      title: 'Full Modular Kitchen',
      tag: 'Kitchen & Dining',
      desc: 'Contemporary matte cabinetry with sleek cooktop and exhaust'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/2bb109e8-6977-4ff9-ba25-93f6c73bfbc9.jpeg?im_w=960',
      title: 'Kitchen Countertop & Appliances',
      tag: 'Kitchen & Dining',
      desc: 'Equipped with microwave, induction hob, kettle, and cookware'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/3b3f64d8-1d85-4cf5-a233-543b49b9332c.jpeg?im_w=960',
      title: 'Kitchen Prep Station',
      tag: 'Kitchen & Dining',
      desc: 'Clean granite sink and preparation area with filtered water'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/505bd2a0-cc11-4209-a32d-0f17800e8a4c.jpeg?im_w=960',
      title: 'Organized Cutlery Drawer',
      tag: 'Kitchen & Dining',
      desc: 'Full set of silverware, knives, forks, and cooking utensils'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/ceafd429-8430-42f0-93e2-497bad46c7c6.jpeg?im_w=960',
      title: 'Coffee & Tea Amenities',
      tag: 'Kitchen & Dining',
      desc: 'Glassware, mugs, and complimentary beverage essentials'
    },
    {
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645744603760645099/original/890cbb77-5967-4063-8df9-bd7771145ca7.jpeg?im_w=960',
      title: 'Illuminated Vanity & Bathroom',
      tag: 'Luxury Bathroom',
      desc: 'Backlit smart mirror, modern fixtures, and hotel-quality towels'
    }
  ];

  // Dynamic review count display
  const openReviewsBtnEl = document.getElementById('openAllReviewsBtn');
  if (openReviewsBtnEl && typeof allReviewsData !== 'undefined') {
    openReviewsBtnEl.textContent = `Show all ${allReviewsData.length} reviews`;
  }

  // ==========================================================================
  // 3D DEPTH CAROUSEL SHOWCASE CONTROLLER (RoomShowcase / DepthCarousel)
  // ==========================================================================
  function initDepthCarousel() {
    const stage = document.getElementById('depthCarouselStage');
    const carouselEl = document.getElementById('depthCarousel');
    const prevBtn = document.getElementById('depthPrevBtn');
    const nextBtn = document.getElementById('depthNextBtn');
    const indicatorsWrap = document.getElementById('depthIndicators');
    const captionTag = document.getElementById('depthCaptionTag');
    const captionTitle = document.getElementById('depthCaptionTitle');
    const captionDesc = document.getElementById('depthCaptionDesc');
    const expandBtn = document.getElementById('depthExpandBtn');

    if (!stage || !carouselEl || residenceItems.length === 0) return;

    let activeIndex = 0;
    const total = residenceItems.length;
    let autoplayTimer = null;
    let isInteracting = false;

    // Create cards inside stage
    stage.innerHTML = '';
    const cards = residenceItems.map((item, idx) => {
      const card = document.createElement('div');
      card.className = 'depth-card';
      card.setAttribute('role', 'group');
      card.setAttribute('aria-label', `${item.title} (${idx + 1} of ${total})`);
      card.setAttribute('data-index', idx);

      const img = document.createElement('img');
      img.className = 'depth-card__img';
      img.src = item.image;
      img.alt = item.title;
      img.loading = idx < 6 ? 'eager' : 'lazy';

      const tint = document.createElement('div');
      tint.className = 'depth-card__tint';

      card.appendChild(img);
      card.appendChild(tint);
      stage.appendChild(card);

      // Card click interaction:
      // Clicking active center card -> opens full-resolution lightbox
      // Clicking side cards -> rotates and centers that card!
      card.addEventListener('click', () => {
        let diff = (idx - activeIndex) % total;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        if (diff === 0) {
          openLightbox(activeIndex);
        } else {
          goToIndex(idx);
        }
      });

      return { el: card, tintEl: tint };
    });

    // Create pagination indicators
    if (indicatorsWrap) {
      indicatorsWrap.innerHTML = '';
      residenceItems.forEach((item, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'depth-indicator' + (idx === 0 ? ' is-active' : '');
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Go to slide ${idx + 1}: ${item.title}`);
        dot.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
        dot.addEventListener('click', () => goToIndex(idx));
        indicatorsWrap.appendChild(dot);
      });
    }

    // Dynamic horizontal spread to complete both sides of the website
    function getSpread() {
      const width = carouselEl.offsetWidth || window.innerWidth;
      if (width >= 1400) return 126;
      if (width >= 1100) return 110;
      if (width >= 850) return 90;
      if (width >= 600) return 70;
      return 48;
    }

    // Main 3D update function
    function updateStage() {
      const spread = getSpread();
      const currentItem = residenceItems[activeIndex];

      // Update caption bar
      if (captionTag) captionTag.textContent = currentItem.tag || '32nd Floor Studio';
      if (captionTitle) captionTitle.textContent = currentItem.title;
      if (captionDesc) captionDesc.textContent = currentItem.desc;

      // Update pagination indicators
      if (indicatorsWrap) {
        const dots = indicatorsWrap.querySelectorAll('.depth-indicator');
        dots.forEach((d, i) => {
          const isActive = (i === activeIndex);
          d.classList.toggle('is-active', isActive);
          d.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
      }

      // Position each card in 3D depth space
      cards.forEach((itemObj, i) => {
        const card = itemObj.el;
        const tint = itemObj.tintEl;

        // Circular shortest offset from activeIndex
        let diff = (i - activeIndex) % total;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        const absDiff = Math.abs(diff);

        // Visible cards: 11 cards total (-5 to +5: 5 on left, 1 center, 5 on right)
        if (absDiff > 5) {
          card.style.opacity = '0';
          card.style.visibility = 'hidden';
          card.style.pointerEvents = 'none';
          card.classList.remove('is-active');
          card.setAttribute('aria-hidden', 'true');
          return;
        }

        // Visible card setup
        card.style.visibility = 'visible';
        card.style.pointerEvents = 'auto';
        card.setAttribute('aria-hidden', 'false');

        const isActive = (diff === 0);
        card.classList.toggle('is-active', isActive);

        // 1. Horizontal spread: diff * spread
        const translateX = diff * spread;

        // 2. Depth falloff down to -260px at diff = 5
        const depthRatio = Math.pow(absDiff / 5, 0.95);
        const translateZ = -depthRatio * 260;

        // 3. Tilt direction from both sides (Left and Right inward tilt):
        // Left cards (diff < 0) tilt inward toward center: +18deg
        // Right cards (diff > 0) tilt inward toward center: -18deg
        // Center card (diff === 0): 0deg
        const rotateY = diff > 0 ? -18 : (diff < 0 ? 18 : 0);

        // 4. Subtle scale falloff
        const scale = Math.max(0.72, 1 - absDiff * 0.042);

        // 5. Stacking z-index: center is highest (100)
        const zIndex = 100 - absDiff;

        // 6. Darkening tint falloff (pure GPU opacity)
        const tintOpacity = Math.min(0.68, absDiff * 0.15);
        tint.style.opacity = tintOpacity.toFixed(2);

        // Apply hardware-accelerated 3D transform
        card.style.transform = `translate3d(${translateX.toFixed(1)}px, 0, ${translateZ.toFixed(1)}px) rotateY(${rotateY}deg) scale(${scale.toFixed(3)})`;
        card.style.zIndex = zIndex;
        card.style.opacity = absDiff === 5 ? '0.45' : '1';
      });
    }

    function goToIndex(newIndex) {
      activeIndex = (newIndex + total) % total;
      updateStage();
      resetAutoplayTimer();
    }

    function nextSlide() {
      goToIndex(activeIndex + 1);
    }

    function prevSlide() {
      goToIndex(activeIndex - 1);
    }

    // Button controls
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (expandBtn) expandBtn.addEventListener('click', () => openLightbox(activeIndex));

    // Autoplay Timer (4000ms delay as requested)
    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(() => {
        if (!isInteracting && (!lightbox || !lightbox.classList.contains('active'))) {
          nextSlide();
        }
      }, 4000);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    function resetAutoplayTimer() {
      startAutoplay();
    }

    // Pause on hover
    carouselEl.addEventListener('mouseenter', () => {
      isInteracting = true;
      stopAutoplay();
    });

    carouselEl.addEventListener('mouseleave', () => {
      isInteracting = false;
      startAutoplay();
    });

    // Touch & Swipe gestures
    let touchStartX = 0;
    let touchStartY = 0;

    carouselEl.addEventListener('touchstart', (e) => {
      isInteracting = true;
      stopAutoplay();
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    carouselEl.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX;
      const deltaY = e.changedTouches[0].clientY - touchStartY;

      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      isInteracting = false;
      startAutoplay();
    }, { passive: true });

    // Keyboard navigation when focused
    carouselEl.setAttribute('tabindex', '0');
    carouselEl.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
    });

    // Resize listener for responsive spread
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => updateStage(), 60);
    });

    // Page Visibility API
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });

    // Expose carousel controller on window for external triggers
    window.depthCarouselController = {
      goToIndex,
      nextSlide,
      prevSlide,
      getActiveIndex: () => activeIndex
    };

    // Initial render and start autoplay
    updateStage();
    startAutoplay();
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

  let currentLightboxIdx = 0;

  function updateLightbox(index) {
    if (residenceItems.length === 0) return;

    currentLightboxIdx = (index + residenceItems.length) % residenceItems.length;
    const item = residenceItems[currentLightboxIdx];

    // Smooth image transition
    if (lightboxImg) {
      lightboxImg.style.opacity = '0.3';
      lightboxImg.style.transform = 'scale(0.98)';

      const tempImg = new Image();
      tempImg.onload = () => {
        lightboxImg.src = item.image;
        lightboxImg.alt = item.title;
        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
      };
      tempImg.src = item.image;
    }

    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = item.desc;
    if (lightboxCat) lightboxCat.textContent = item.tag || 'Apartment Gallery';
    if (lightboxDim) lightboxDim.textContent = '32nd Floor · Supernova Studio';
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentLightboxIdx + 1} / ${residenceItems.length}`;
    }

    // Preload adjacent images
    if (residenceItems.length > 1) {
      const nextIdx = (currentLightboxIdx + 1) % residenceItems.length;
      const prevIdx = (currentLightboxIdx - 1 + residenceItems.length) % residenceItems.length;
      const nextImg = new Image();
      nextImg.src = residenceItems[nextIdx].image;
      const prevImg = new Image();
      prevImg.src = residenceItems[prevIdx].image;
    }

    // Sync carousel active index
    if (window.depthCarouselController) {
      window.depthCarouselController.goToIndex(currentLightboxIdx);
    }
  }

  let lightboxTrigger = null;

  function openLightbox(idx) {
    lightboxTrigger = document.activeElement;
    updateLightbox(idx);
    if (lightbox) {
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

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => updateLightbox(currentLightboxIdx - 1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => updateLightbox(currentLightboxIdx + 1));

  // Initialize the 3D Depth Carousel
  initDepthCarousel();

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

  // ---- 5b. Walkthrough Fullscreen Video Lightbox Modal ----
  const tourVideoCard = document.getElementById('tourVideoCard');
  const videoLightbox = document.getElementById('videoLightbox');
  const videoLightboxClose = document.getElementById('videoLightboxClose');
  const videoLightboxBackdrop = document.getElementById('videoLightboxBackdrop');
  const walkthroughVideo = document.getElementById('walkthroughVideo');
  let videoTrigger = null;

  function openVideoModal() {
    if (!videoLightbox) return;
    videoTrigger = document.activeElement;
    videoLightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (walkthroughVideo) {
      walkthroughVideo.currentTime = 0;
      walkthroughVideo.play().catch(() => {});
    }
    if (videoLightboxClose) videoLightboxClose.focus();
  }

  function closeVideoModal() {
    if (!videoLightbox) return;
    videoLightbox.classList.remove('active');
    document.body.style.overflow = '';
    if (walkthroughVideo) {
      walkthroughVideo.pause();
    }
    if (videoTrigger) {
      videoTrigger.focus();
      videoTrigger = null;
    }
  }

  window.openVideoModal = openVideoModal;
  window.closeVideoModal = closeVideoModal;

  if (tourVideoCard) {
    tourVideoCard.addEventListener('click', (e) => {
      e.preventDefault();
      openVideoModal();
    });
  }

  if (videoLightboxClose) videoLightboxClose.addEventListener('click', closeVideoModal);
  if (videoLightboxBackdrop) videoLightboxBackdrop.addEventListener('click', closeVideoModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoLightbox && videoLightbox.classList.contains('active')) {
      closeVideoModal();
    }
  });

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
        <div style="margin-top: 6px; font-size: 11px; font-weight: 700; color: #7c3aed;">★ 4.88 Airbnb Guest Favourite</div>
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
        { name: "Turban King Chaap", time: "2 min walk", dist: "150m", lat: 28.5442, lng: 77.3228, type: "North Indian Delicacies", color: "#7c3aed" },
        { name: "The Yellow Chilli", time: "7 min drive", dist: "2.8km", lat: 28.5480, lng: 77.3290, type: "Fine Dining by Sanjeev Kapoor", color: "#7c3aed" },
        { name: "Haldiram's Sector 18", time: "6 min drive", dist: "2.4km", lat: 28.5680, lng: 77.3220, type: "Indian Street & Sweets", color: "#7c3aed" },
        { name: "Imperfecto Gardens Galleria", time: "7 min drive", dist: "2.9km", lat: 28.5650, lng: 77.3245, type: "Rooftop Lounge & Bar", color: "#7c3aed" }
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
                <div style="font-size: 11px; font-weight: 600; color: #7c3aed;">${place.time} (${place.dist})</div>
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

  // ---- Day / Night Theme Management Controller ----
  function initThemeManager() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const sliderModePill = document.getElementById('sliderModePill');
    const drawerThemeBtn = document.getElementById('drawerThemeBtn');
    const drawerThemeIcon = document.getElementById('drawerThemeIcon');
    const drawerThemeText = document.getElementById('drawerThemeText');

    function getInitialTheme() {
      try {
        const stored = localStorage.getItem('nevra_theme');
        if (stored === 'night' || stored === 'day') return stored;
      } catch (e) {}

      // Default: check time of day (18:00 - 06:00 is night) or default to night
      try {
        const hr = new Date().getHours();
        return (hr >= 18 || hr < 6) ? 'night' : 'day';
      } catch (e) {
        return 'night';
      }
    }

    function applyTheme(theme, persist = false) {
      const isNight = theme === 'night';

      if (isNight) {
        document.documentElement.classList.add('theme-night');
        document.documentElement.setAttribute('data-theme', 'night');
        document.body.classList.add('theme-night');
      } else {
        document.documentElement.classList.remove('theme-night');
        document.documentElement.setAttribute('data-theme', 'day');
        document.body.classList.remove('theme-night');
      }

      // Update navbar toggle button
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', isNight ? 'Switch to Day mode' : 'Switch to Night mode');
        themeToggleBtn.setAttribute('title', isNight ? 'Switch to Day mode' : 'Switch to Night mode');
      }

      // Update slider status pill
      if (sliderModePill) {
        const icon = sliderModePill.querySelector('.mode-icon');
        const txt = sliderModePill.querySelector('.mode-text');
        if (icon) icon.textContent = isNight ? '🌙' : '☀️';
        if (txt) txt.textContent = isNight ? 'Night' : 'Day';
        sliderModePill.setAttribute('title', isNight ? 'Switch to Day mode' : 'Switch to Night mode');
      }

      // Update drawer theme button
      if (drawerThemeIcon) drawerThemeIcon.textContent = isNight ? '🌙' : '☀️';
      if (drawerThemeText) drawerThemeText.textContent = isNight ? 'Night Mode (Active)' : 'Day Mode (Active)';

      if (persist) {
        try {
          localStorage.setItem('nevra_theme', theme);
        } catch (e) {}
      }
    }

    function toggleTheme() {
      const isNight = document.documentElement.classList.contains('theme-night') || document.body.classList.contains('theme-night');
      const nextTheme = isNight ? 'day' : 'night';
      applyTheme(nextTheme, true);
    }

    // Apply initial theme
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme, false);

    // Event listeners
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleTheme();
      });
    }

    if (sliderModePill) {
      sliderModePill.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleTheme();
      });
    }

    if (drawerThemeBtn) {
      drawerThemeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleTheme();
      });
    }

    // Handle cross-tab storage changes
    window.addEventListener('storage', (e) => {
      if (e.key === 'nevra_theme' && (e.newValue === 'night' || e.newValue === 'day')) {
        applyTheme(e.newValue, false);
      }
    });
  }

  initThemeManager();
  
});
