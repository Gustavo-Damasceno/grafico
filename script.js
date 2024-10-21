function fetchSocialMediaData() {
    return fetch('https://api.exemplo.com/social-media')
        .then(response => response.json())
        .then(data => {
            return {
                labels: data.labels,  // Labels vindo da API
                datasets: [{
                    label: 'Usuários em milhões',
                    data: data.values,  // Valores vindo da API
                    backgroundColor: [
                        'rgba(0, 255, 255, 0.6)',
                        'rgba(255, 0, 255, 0.6)',
                        'rgba(0, 255, 132, 0.6)',
                        'rgba(255, 255, 0, 0.6)',
                        'rgba(132, 0, 255, 0.6)'
                    ],
                    borderColor: [
                        'rgba(0, 255, 255, 1)',
                        'rgba(255, 0, 255, 1)',
                        'rgba(0, 255, 132, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(132, 0, 255, 1)'
                    ],
                    borderWidth: 2
                }]
            };
        })
        .catch(error => {
            console.error('Erro ao buscar dados da API:', error);
        });
}
