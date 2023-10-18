const humbMenu = document.querySelector('.humb-menu');
const closeMenu = document.querySelector('.close-menu');

const showMenu = () => {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.remove('-translate-x-full');
};
const hideMenu = () => {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.add('-translate-x-full');
};

humbMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);

// ========>>>>> HEADER HERO SLIDER IMG <<<<<=====

// ========>>>>> HEADER HERO SLIDER IMG <<<<<=====
const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperSlide = document.querySelectorAll('.swiper-slide');

let currentIndex = 0;
let intervalId = null;

function moveSwiperWrapper() {
  const swiperSlideWidth = swiperSlide[currentIndex].offsetWidth;
  const offsets = -currentIndex * swiperSlideWidth;
  swiperWrapper.style.transform = `translateX(${offsets}px)`;
}

function starInterval() {
  intervalId = setInterval(() => {
    if (currentIndex < swiperSlide.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    moveSwiperWrapper();
  }, 5000);
}

starInterval();
// ========>>>>> END HEADER HERO SLIDER IMG <<<<<=====

// ========>>>>> BUTTON SLIDER CAR <<<<<=====
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const swiperWrapperCar = document.querySelector('.swiper-wrapper-car');
const swiperSlideCar = document.querySelectorAll('.swiper-slide-car');
const stepCardCars = document.querySelectorAll('.step-card-cars');
let indexSwiperSlidCar = 0;

const moveSlideCar = () => {
  const widthSwiperSlideCar = swiperSlideCar[indexSwiperSlidCar].offsetWidth;
  const offsets = -indexSwiperSlidCar * widthSwiperSlideCar;
  swiperWrapperCar.style.transform = `translateX(${offsets}px)`;
  if (indexSwiperSlidCar === 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'flex'; // atau 'inline-block' tergantung pada tata letak Anda
  }

  if (indexSwiperSlidCar === swiperSlideCar.length - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'flex'; // atau 'inline-block' tergantung pada tata letak Anda
  }

  stepCardCars.forEach((step, index) => {
    if (index === indexSwiperSlidCar) {
      step.classList.replace('opacity-20', 'opacity-100');
      step.classList.replace('bg-custom-silver', 'bg-custom-red');
      step.classList.replace('w-2', 'w-4');
    } else {
      step.classList.replace('opacity-100', 'opacity-20');
      step.classList.replace('bg-custom-red', 'bg-custom-silver');
      step.classList.replace('w-4', 'w-2');
    }
  });
};

moveSlideCar();

nextBtn.addEventListener('click', () => {
  if (indexSwiperSlidCar < swiperSlideCar.length - 1) {
    indexSwiperSlidCar++;
  } else {
    indexSwiperSlidCar = 0;
  }
  moveSlideCar();
});

prevBtn.addEventListener('click', () => {
  if (indexSwiperSlidCar > 0) {
    indexSwiperSlidCar--;
  } else {
    indexSwiperSlidCar = swiperSlideCar.length - 1;
  }
  moveSlideCar();
});
// ========>>>>> END BUTTON SLIDER CAR <<<<<=====

const cardLayanan = document.querySelector('.card-layanan');
const slideCards = document.querySelectorAll('.slide-card-layanan');
const stepCardLayanan = document.querySelectorAll('.step-card-layanan');

let i = 0;
const cardWidth = slideCards[0].offsetWidth;

cardLayanan.style.width = `${cardWidth * slideCards.length}px`;

// Memperbarui indikator langkah awal
updateStepIndicator();

cardLayanan.addEventListener('touchstart', handleTouchStart, false);
cardLayanan.addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  if (!startX) return;

  const currentX = event.touches[0].clientX;
  const diffX = startX - currentX;

  // Sesuaikan nilai ambang batas untuk dianggap sebagai swipe
  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      geserKiri();
    } else {
      geserKanan();
    }
    startX = null; // Reset nilai awal setelah swipe
  }
}

function geserKiri() {
  if (i < slideCards.length - 1) {
    i++;
    geserKeIndex();
    updateStepIndicator();
  }
}

function geserKanan() {
  if (i > 0) {
    i--;
    geserKeIndex();
    updateStepIndicator();
  }
}

function geserKeIndex() {
  const newPosition = -i * cardWidth;
  cardLayanan.style.transform = `translateX(${newPosition}px)`;
}

function updateStepIndicator() {
  // Reset semua langkah menjadi tidak aktif
  stepCardLayanan.forEach((step, index) => {
    if (index === i) {
      step.classList.replace('opacity-20', 'opacity-100');
      step.classList.replace('bg-custom-silver', 'bg-custom-red');
      step.classList.replace('w-2', 'w-4');
    } else {
      step.classList.replace('opacity-100', 'opacity-20');
      step.classList.replace('bg-custom-red', 'bg-custom-silver');
      step.classList.replace('w-4', 'w-2');
    }
  });
}
