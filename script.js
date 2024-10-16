function navigateTo(section) {
    const content = document.getElementById('content');
    switch(section) {
        case 'biodata':
            content.innerHTML = `
                <h1>Biodata</h1>
                <p>Nama: Kamal Abrar</p>
                <p>NIM: 123456789</p>
                <p>Agama: Islam</p>
                <p>Tanggal Lahir: 1 Januari 1999</p>
                <p>Tempat Lahir: Jakarta</p>
            `;
            break;
        case 'pendidikan':
            content.innerHTML = `
                <h1>Pendidikan</h1>
                <p>S1 Teknik Informatika - Universitas XYZ</p>
            `;
            break;
        case 'pengalaman':
            content.innerHTML = `
                <h1>Pengalaman</h1>
                <p>Magang di PT. ABC sebagai Web Developer</p>
                <p>Freelance Programmer selama 3 tahun</p>
            `;
            break;
        case 'keahlian':
            content.innerHTML = `
                <h1>Keahlian</h1>
                <p>HTML, CSS, JavaScript</p>
                <p>PHP, Laravel</p>
                <p>React.js, Node.js</p>
            `;
            break;
        case 'publikasi':
            content.innerHTML = `
                <h1>Publikasi</h1>
                <p>Artikel tentang Teknologi AI pada Majalah Komputasi</p>
                <p>Blog: "Programming with Passion"</p>
            `;
            break;
        default:
            content.innerHTML = `<h1>Biodata</h1>`;
    }
}
