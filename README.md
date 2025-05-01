# Smart Burme App - Payment Loader System

ဒီ App သည် Smart Burme App အတွင်းမှာ အသုံးပြုသူများအား ၅၀၀၀ ကျပ်ဖြင့် ရက် ၃၀ အသုံးပြုခွင့် ပေးရန် ရည်ရွယ်သည်။ Firebase Authentication နှင့် Payment Loader Logic ပါဝင်သည်။

---

## Features

- **Blue background Loader UI** (3-second animation)
- **မြန်မာစာ UI** – “5000 ကျပ်သွင်း၍ ရက် 30 အသုံးပြုနိုင်သည်”
- **Login & Pay Button** (Float3D style)
- **Firebase Integration** (auth + firestore ready)
- **Payment Success Page with redirect**
- **Mobile Responsive Design**

---

## Technologies Used

- HTML5, CSS3, JavaScript
- Firebase v9 (Modular SDK)
  - Authentication
  - Firestore (prepared for future use)
- Responsive Design (Mobile-first)

---

## File Structure
```
smart-burme-app/
├── index.html # Loader + Payment Button UI
├── paymentSuccess.html # After payment success
├── README.md
```
Project description
---

## Firebase Config
yml
```js
const firebaseConfig = {
  apiKey: "AIzaSyAr7Hv2ApKtNTxF11MhT5cuWeg_Dgsh0TY",
  authDomain: "smart-burme-app.firebaseapp.com",
  projectId: "smart-burme-app",
  storageBucket: "smart-burme-app.appspot.com",
  messagingSenderId: "851502425686",
  appId: "1:851502425686:web:f29e0e1dfa84794b4abdf7"
};
```

---

## ✅ Source Code

**`index.html`**
```html
<!-- Full source of index.html is same as provided in previous message -->
