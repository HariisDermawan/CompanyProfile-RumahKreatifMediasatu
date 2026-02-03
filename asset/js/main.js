AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    delay: 100,
    easing: 'ease-in-out',
    mirror: false
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    hamburger.classList.toggle('hamburger-active');
});
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburger.classList.remove('hamburger-active');
    });
});
let currentSlide = 0;
const teamCards = document.querySelectorAll('.team-card-new');
const totalCards = teamCards.length;
const carouselTrack = document.getElementById('team-carousel-track');
const prevButton = document.getElementById('prev-team');
const nextButton = document.getElementById('next-team');
const dotsContainer = document.getElementById('carousel-dots');
function getCardsPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}
function getTotalSlides() {
    const cardsPerView = getCardsPerView();
    return Math.max(totalCards - cardsPerView + 1, 1);
}
function updateCarousel() {
    const cardsPerView = getCardsPerView();
    const cardWidth = 100 / cardsPerView;
    const translateX = -currentSlide * cardWidth;
    carouselTrack.style.transform = `translateX(${translateX}%)`;
    updateDots();
}
function createDots() {
    dotsContainer.innerHTML = '';
    const totalSlides = getTotalSlides();

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (i === currentSlide) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentSlide = i;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    }
}
function updateDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
nextButton.addEventListener('click', () => {
    const totalSlides = getTotalSlides();
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateCarousel();
});
prevButton.addEventListener('click', () => {
    const totalSlides = getTotalSlides();
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    updateCarousel();
});
createDots();
updateCarousel();
window.addEventListener('resize', () => {
    const newCardsPerView = getCardsPerView();
    const oldCardsPerView = window.lastCardsPerView || 1;

    if (newCardsPerView !== oldCardsPerView) {
        currentSlide = Math.min(currentSlide, getTotalSlides() - 1);
        createDots();
        updateCarousel();
    }

    window.lastCardsPerView = newCardsPerView;
});
window.lastCardsPerView = getCardsPerView();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const modalActionBtn = document.getElementById('modal-action-btn');
const teamMembers = {
    1: {
        name: 'Jhondry Fernando',
        position: 'Creative Entrepreneur',
        experience: '3+ Tahun Pengalaman',
        email: 'Jhondryfernando90@icloud.com',
        description: 'Gue selaku Creative Entrepreneur dengan spesialisasi pengembangan brand dan manajemen tim kreatif. Dengan pengalaman selama 3 tahun, yang telah sukses memimpin berbagai proyek lintas disiplin bersama tim, mulai dari konten digital hingga produksi visual. Kini, melalui Rumah Kreatif Mediasatu, gue berkomitmen untuk terus berinovasi dan membantu bisnis berkembang lewat kekuatan storytelling dan desain yang autentik.',
        image: 'asset/tim/jhon.jpeg',
        skills: ['Creative Strategy', 'Brand Storytelling', 'Content Development', 'Team Leadership', 'Client Relations'],
        social: {
            linkedin: '#',
            tiktok: '#',
            instagram: 'https://www.instagram.com/jhondry_fernando'
        }
    },
    2: {
        name: 'Haris Darmawan',
        position: 'Web Developer',
        experience: 'Full Stack Developer',
        email: 'harisdermawaan.id@gmail.com',
        description: 'Fokus pada pembuatan solusi digital yang fungsional dan intuitif. Telah menyelesaikan banyak proyek software untuk klien di berbagai industri, termasuk company profile dan teknologi.',
        image: 'asset/tim/saa.png',
        skills: ['Laravel', 'ApiRest', 'php', 'Html', 'css', 'java script', 'tailwindcss', 'figma design'],
        social: {
            linkedin: 'https://www.linkedin.com/in/haris-darmawan-1285102a4/',
            tiktok: 'https://www.tiktok.com/@siletchiper',
            instagram: 'https://www.instagram.com/hariisdermawan_'
        }
    },
    3: {
        name: 'Muhammad Fadly',
        position: 'Videografer',
        experience: 'Videografer',
        email: 'fadlyasdki@gmail.com',
        description: 'Berpengalaman dalam videografi dan editing video dengan kemampuan teknis yang luar biasa. Terampil menggunakan berbagai software profesional untuk menghasilkan konten visual berkualitas tinggi.',
        image: 'asset/tim/tegay.jpeg',
        skills: ['Video Editing', 'Motion Graphics', 'Visual Effects'],
        social: {
            instagram: 'https://www.instagram.com/fadlyy_fad'
        }
    },
    4: {
        name: 'Muhammad Fahri Ramadhan',
        position: 'Videographer & Graphic Designer',
        experience: 'Videographer & Graphic Designer',
        email: 'mochfahriramadhanie@gmail.com',
        description: 'Berspesialisasi dalam mengubah ide menjadi visual yang berdampak, baik itu untuk branding, tata letak, atau konten digital. Dengan pikiran yang ingin tahu dan kecintaan pada tren visual, saya terus mencari cara baru untuk berkomunikasi melalui desain.',
        image: 'asset/tim/fahri.jpeg',
        skills: ['Social Media Strategy', 'Content Planning', 'Community Management', 'Analytics', 'Influencer Marketing'],
        social: {
            linkedin: '#',
            tiktok: '#',
            instagram: 'https://www.instagram.com/fahryrmdhnie'
        }
    },
    5: {
        name: 'Arfa Ardita',
        position: 'Content Creator',
        experience: 'Content creator / Talent',
        email: 'david@mediasphere.com',
        description: 'Halo! Gue Arfa ,Perjalanan gue sebagai konten kreator dan talent dimulai sejak 8 tahun lalu—zaman media sosial belum se-berisik sekarang. Selama hampir satu dekade ini, gue belajar kalau konten yang bagus itu bukan cuma soal tren, tapi soal authenticity.​I’ve evolved, my style has changed, but my passion for creating is still the same. Thanks for being part of my 8-year-long digital diary. Let’s see what else we can create in the years to come! 🚀',
        image: 'asset/tim/arfa.jpeg',
        skills: ['Audio Mixing', 'Mastering', 'Sound Design', 'Foley Recording', 'Audio Restoration'],
        social: {
            linkedin: '#',
            tiktok: '#',
            instagram: 'rumahkreatifmediasatu@gmail.com'
        }
    },
    6: {
        name: 'Keyla Melani Putri',
        position: 'Design graphic',
        experience: 'Design graphic',
        email: 'emma@mediasphere.com',
        description: 'Mengembangkan strategi konten untuk berbagai platform media. Berpengalaman dalam penelitian pasar dan analisis audiens. Membantu klien mengembangkan voice dan tone brand yang konsisten.',
        image: '#',
        skills: ['Content Strategy', 'Market Research', 'Audience Analysis', 'Brand Voice Development', 'Content Calendar'],
        social: {
            linkedin: '#',
            tiktok: '#',
            instagram: 'rumahkreatifmediasatu@gmail.com'
        }
    }
};

document.querySelectorAll('.team-social a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.stopPropagation(); 
        if (this.href && this.href !== '#') {
            window.open(this.href, '_blank');
        }
    });
});

function showTeamModal(teamId) {
    const member = teamMembers[teamId];
    if (!member) return;

    modalTitle.textContent = `${member.name} - ${member.position}`;

    const content = `
        <div class="space-y-4 sm:space-y-6">
            <div class="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                <div class="md:w-1/3">
                    <img src="${member.image}" alt="${member.name}" class="rounded-xl sm:rounded-2xl w-full shadow-lg">
                </div>
                <div class="md:w-2/3 space-y-3 sm:space-y-4">
                    <div>
                        <h3 class="text-xl sm:text-2xl font-bold">${member.name}</h3>
                        <p class="text-primary font-medium text-sm sm:text-base">${member.position}</p>
                        <p class="text-gray-600 text-sm sm:text-base">${member.experience}</p>
                    </div>

                    <div class="flex items-center text-gray-600 text-sm sm:text-base">
                        <i class="fas fa-envelope mr-2 sm:mr-3"></i>
                        <span>${member.email}</span>
                    </div>

                    <div class="flex space-x-3 sm:space-x-4">
                        ${Object.entries(member.social).map(([platform, url]) => `
                            <a href="${url}" target="_blank" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                <i class="fab fa-${platform} text-xs sm:text-sm"></i>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="space-y-3 sm:space-y-4">
                <div>
                    <h4 class="font-bold text-base sm:text-lg mb-1 sm:mb-2">Profil Profesional</h4>
                    <p class="text-gray-600 text-sm sm:text-base">${member.description}</p>
                </div>

                <div class="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 sm:p-6">
                    <h4 class="font-bold mb-3 sm:mb-4 text-gray-800 text-base sm:text-lg">Keahlian & Spesialisasi:</h4>
                    <div class="flex flex-wrap gap-1 sm:gap-2">
                        ${member.skills.map(skill => `
                            <span class="px-2 py-1 sm:px-3 sm:py-1 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full">${skill}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    modalContent.innerHTML = content;
    modalActionBtn.textContent = 'Tutup';
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}


function hideModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}
modalClose.addEventListener('click', hideModal);
modalActionBtn.addEventListener('click', hideModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        hideModal();
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        hideModal();
    }
});
document.querySelectorAll('.team-card-new').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        const teamId = card.getAttribute('data-team');
        showTeamModal(teamId);
    });
});
window.addEventListener('resize', function () {
    AOS.refresh();
});

const filterButtons = document.querySelectorAll(".filter-btn");
const contentCards = document.querySelectorAll(".content-card");
const toggleShowBtn = document.getElementById("toggle-show-btn");

let currentFilter = "all";
let showAllMode = false;
const defaultLimit = 8;

function applyFilterAndLimit() {
    let filteredCards = [];

    contentCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        const match = (currentFilter === "all" || category === currentFilter);

        if (match) {
            filteredCards.push(card);
        } else {
            card.style.display = "none";
        }
    });

    // Kalau mode "lebih sedikit" = tampil 6
    if (!showAllMode) {
        filteredCards.forEach((card, index) => {
            card.style.display = (index < defaultLimit) ? "block" : "none";
        });

        // Kalau card <= 6, tombol disembunyikan
        if (filteredCards.length <= defaultLimit) {
            toggleShowBtn.style.display = "none";
        } else {
            toggleShowBtn.style.display = "inline-flex";
            toggleShowBtn.innerText = "Tampilkan Semua";
        }
    } else {
        // Mode tampil semua
        filteredCards.forEach((card) => {
            card.style.display = "block";
        });

        // tombol muncul kalau card lebih dari 6
        if (filteredCards.length <= defaultLimit) {
            toggleShowBtn.style.display = "none";
        } else {
            toggleShowBtn.style.display = "inline-flex";
            toggleShowBtn.innerText = "Tampilkan Lebih Sedikit";
        }
    }
}

function setActiveButton(activeBtn) {
    filterButtons.forEach((b) => b.classList.remove("active-filter"));
    if (activeBtn) activeBtn.classList.add("active-filter");
}

// Default: tampil 6 pertama
applyFilterAndLimit();

// Klik filter category
filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentFilter = btn.getAttribute("data-filter");
        showAllMode = false; // reset ke mode 6 lagi saat filter berubah
        setActiveButton(btn);
        applyFilterAndLimit();
    });
});

// Toggle show more / less
toggleShowBtn.addEventListener("click", () => {
    showAllMode = !showAllMode;
    applyFilterAndLimit();
});
