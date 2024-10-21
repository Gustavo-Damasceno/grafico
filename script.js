const ctx = document.getElementById('socialChart').getContext('2d');

// Dados das redes sociais
const data = {
    labels: ['Facebook', 'YouTube', 'WhatsApp', 'Instagram', 'TikTok'],
    datasets: [{
        label: 'Bilhões de usuários ativos',
        data: [2900, 2500, 2000, 1500, 1000],
        backgroundColor: [
            'rgba(59, 89, 152, 0.8)', // Facebook
            'rgba(255, 0, 0, 0.8)',   // YouTube
            'rgba(37, 211, 102, 0.8)',// WhatsApp
            'rgba(225, 48, 108, 0.8)',// Instagram
            'rgba(0, 0, 0, 0.8)'      // TikTok
        ],
        borderColor: [
            'rgba(59, 89, 152, 1)',
            'rgba(255, 0, 0, 1)',
            'rgba(37, 211, 102, 1)',
            'rgba(225, 48, 108, 1)',
            'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        onClick: (e, activeEls) => {
            if (activeEls.length > 0) {
                const chartIndex = activeEls[0].index;
                const urls = [
                    'https://facebook.com',
                    'https://youtube.com',
                    'https://whatsapp.com',
                    'https://instagram.com',
                    'https://tiktok.com'
                ];
                // Redireciona para a rede social correspondente
                window.open(urls[chartIndex], '_blank');
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const socialChart = new Chart(ctx, config);

// Simular atualização em tempo real
setInterval(() => {
    const newData = [2900 + Math.random() * 10, 2500 + Math.random() * 10, 2000 + Math.random() * 10, 1500 + Math.random() * 10, 1000 + Math.random() * 10];
    socialChart.data.datasets[0].data = newData;
    socialChart.update();
}, 5000);
