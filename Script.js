document.addEventListener('DOMContentLoaded', function () {
    const moviePosters = document.querySelectorAll('#movies .movie');
    const moviePhotosSection = document.getElementById('movie-photos');
    const moviesSection = document.getElementById('movies');
    const photosContainer = document.querySelector('.photos-container');
    const backButton = document.getElementById('back-button');

    // Movie photos object with placeholders for photos (add more as needed)
    const moviePhotos = {
        'NinnuChoodalani': [
            { src: 'NinnuChoodalani.jpg', downloads: 10 }, // Poster as first image
            { src: 'ninnu-pic1.jpg', downloads: 5 },
            { src: 'ninnu-pic2.jpg', downloads: 7 }
        ],
        'StudentNo1': [
            { src: 'StudentNo1.jpg', downloads: 15 }, // Poster as first image
            { src: 'studentno1-pic1.jpg', downloads: 8 },
            { src: 'studentno1-pic2.jpg', downloads: 4 }
        ],
        'Subbu': [
            { src: 'Subbu.jpg', downloads: 10 }, // Poster
            { src: 'subbu-pic1.jpg', downloads: 6 },
            { src: 'subbu-pic2.jpg', downloads: 8 }
        ],
        'Aadi': [
            { src: 'Aadi.jpg', downloads: 9 },
            { src: 'aadi-pic1.jpg', downloads: 4 },
            { src: 'aadi-pic2.jpg', downloads: 3 }
        ],
        'AllariRamudu': [
            { src: 'AllariRamudu.jpg', downloads: 6 },
            { src: 'allari-pic1.jpg', downloads: 5 },
            { src: 'allari-pic2.jpg', downloads: 8 }
        ],
        'Naaga': [
            { src: 'Naaga.jpg', downloads: 14 },
            { src: 'naaga-pic1.jpg', downloads: 3 },
            { src: 'naaga-pic2.jpg', downloads: 2 }
        ],
        'Simhadri': [
            { src: 'Simhadri.jpg', downloads: 20 },
            { src: 'simhadri-pic1.jpg', downloads: 7 },
            { src: 'simhadri-pic2.jpg', downloads: 6 }
        ],
        'Andhrawala': [
            { src: 'Andhrawala.jpg', downloads: 8 },
            { src: 'andhrawala-pic1.jpg', downloads: 5 },
            { src: 'andhrawala-pic2.jpg', downloads: 3 }
        ],
        'Samba': [
            { src: 'Samba.jpg', downloads: 12 },
            { src: 'samba-pic1.jpg', downloads: 6 },
            { src: 'samba-pic2.jpg', downloads: 4 }
        ],
        'NaaAlludu': [
            { src: 'NaaAlludu.jpg', downloads: 11 },
            { src: 'naaalludu-pic1.jpg', downloads: 8 },
            { src: 'naaalludu-pic2.jpg', downloads: 7 }
        ],
        'Narasimhudu': [
            { src: 'Narasimhudu.jpg', downloads: 13 },
            { src: 'narasimhudu-pic1.jpg', downloads: 4 },
            { src: 'narasimhudu-pic2.jpg', downloads: 5 }
        ],
        'Ashok': [
            { src: 'Ashok.jpg', downloads: 14 },
            { src: 'ashok-pic1.jpg', downloads: 6 },
            { src: 'ashok-pic2.jpg', downloads: 8 }
        ],
        'Rakhi': [
            { src: 'Rakhi.jpg', downloads: 17 },
            { src: 'rakhi-pic1.jpg', downloads: 3 },
            { src: 'rakhi-pic2.jpg', downloads: 5 }
        ],
        'Yamadonga': [
            { src: 'Yamadonga.jpg', downloads: 19 },
            { src: 'yamadonga-pic1.jpg', downloads: 6 },
            { src: 'yamadonga-pic2.jpg', downloads: 9 }
        ],
        'Kantri': [
            { src: 'Kantri.jpg', downloads: 8 },
            { src: 'kantri-pic1.jpg', downloads: 2 },
            { src: 'kantri-pic2.jpg', downloads: 3 }
        ],
        'Adhurs': [
            { src: 'Adhurs.jpg', downloads: 13 },
            { src: 'adhurs-pic1.jpg', downloads: 5 },
            { src: 'adhurs-pic2.jpg', downloads: 7 }
        ],
        'Brindavanam': [
            { src: 'Brindavanam.jpg', downloads: 12 },
            { src: 'brindavanam-pic1.jpg', downloads: 6 },
            { src: 'brindavanam-pic2.jpg', downloads: 4 }
        ],
        'Sakthi': [
            { src: 'Sakthi.jpg', downloads: 7 },
            { src: 'sakthi-pic1.jpg', downloads: 4 },
            { src: 'sakthi-pic2.jpg', downloads: 2 }
        ],
        'Oosaravelli': [
            { src: 'Oosaravelli.jpg', downloads: 11 },
            { src: 'oosaravelli-pic1.jpg', downloads: 6 },
            { src: 'oosaravelli-pic2.jpg', downloads: 3 }
        ],
        'Dammu': [
            { src: 'Dammu.jpg', downloads: 9 },
            { src: 'dammu-pic1.jpg', downloads: 7 },
            { src: 'dammu-pic2.jpg', downloads: 4 }
        ],
        'Baadshah': [
            { src: 'Baadshah.jpg', downloads: 18 },
            { src: 'baadshah-pic1.jpg', downloads: 5 },
            { src: 'baadshah-pic2.jpg', downloads: 6 }
        ],
        'RamayyaVasthavayya': [
            { src: 'RamayyaVasthavayya.jpg', downloads: 10 },
            { src: 'ramayya-pic1.jpg', downloads: 4 },
            { src: 'ramayya-pic2.jpg', downloads: 3 }
        ],
        'Rabhasa': [
            { src: 'Rabhasa.jpg', downloads: 16 },
            { src: 'rabhasa-pic1.jpg', downloads: 4 },
            { src: 'rabhasa-pic2.jpg', downloads: 2 }
        ],
        'Temper': [
            { src: 'Temper.jpg', downloads: 20 },
            { src: 'temper-pic1.jpg', downloads: 8 },
            { src: 'temper-pic2.jpg', downloads: 7 }
        ],
        'NannakuPrematho': [
            { src: 'NannakuPrematho.jpg', downloads: 19 },
            { src: 'nannaku-pic1.jpg', downloads: 6 },
            { src: 'nannaku-pic2.jpg', downloads: 5 }
        ],
        'JanathaGarage': [
            { src: 'JanathaGarage.jpg', downloads: 17 },
            { src: 'janatha-pic1.jpg', downloads: 4 },
            { src: 'janatha-pic2.jpg', downloads: 6 }
        ],
        'JaiLavaKusa': [
            { src: 'JaiLavaKusa.jpg', downloads: 21 },
            { src: 'jailava-pic1.jpg', downloads: 7 },
            { src: 'jailava-pic2.jpg', downloads: 3 }
        ],
        'AravindaSamethaVeeraRaghava': [
            { src: 'AravindaSamethaVeeraRaghava.jpg', downloads: 15 },
            { src: 'aravinda-pic1.jpg', downloads: 4 },
            { src: 'aravinda-pic2.jpg', downloads: 5 }
        ],
        'RRR': [
            { src: 'RRR.jpg', downloads: 25 },
            { src: 'rrr-pic1.jpg', downloads: 8 },
            { src: 'rrr-pic2.jpg', downloads: 10 }
        ],
        'DevaraPart1': [
            { src: 'DevaraPart1.jpg', downloads: 22 },
            { src: 'devara-pic1.jpg', downloads: 5 },
            { src: 'devara-pic2.jpg', downloads: 7 }
        ]
    };

    // Function to show movie photos
    function showMoviePhotos(movieId) {
        // Clear previous photos
        photosContainer.innerHTML = '';

        // Add movie photos
        if (moviePhotos[movieId]) {
            moviePhotos[movieId].forEach(photo => {
                const photoDiv = document.createElement('div');
                photoDiv.classList.add('photo');

                // Create img element
                const img = document.createElement('img');
                img.src = photo.src;

                // Create download info div
                const downloadInfoDiv = document.createElement('div');
                downloadInfoDiv.classList.add('download-info');
                const downloadSpan = document.createElement('span');
                downloadSpan.textContent = 'Download';
                const countSpan = document.createElement('span');
                countSpan.textContent = `${photo.downloads} Downloads`;

                downloadInfoDiv.appendChild(downloadSpan);
                downloadInfoDiv.appendChild(countSpan);

                // Add event listener for download
                downloadSpan.addEventListener('click', function () {
                    photo.downloads += 1;
                    countSpan.textContent = `${photo.downloads} Downloads`;
                });

                photoDiv.appendChild(img);
                photoDiv.appendChild(downloadInfoDiv);
                photosContainer.appendChild(photoDiv);
            });

            // Hide movies section and show movie photos section
            moviesSection.style.display = 'none';
            moviePhotosSection.style.display = 'grid';
        }
    }

    // Add event listeners to all movie posters
    moviePosters.forEach(poster => {
        poster.addEventListener('click', function () {
            const movieId = this.getAttribute('data-movie');
            showMoviePhotos(movieId);
        });
    });

    // Back button to return to the main movies page
    backButton.addEventListener('click', function () {
        moviePhotosSection.style.display = 'none';
        moviesSection.style.display = 'grid';
    });
});
