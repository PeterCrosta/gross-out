const sampleData = [
    {
        maker: 'Piss in a Bottle',
        varietal: 'chardonnay',
        year: 2020,
        type: 'white',
        price: 600, //use cents and convert on front end
        dateTasted: '1/22/2022',
        imageUrl: 'http://decanter.media.ipcdigital.co.uk/11150/000001005/7855/chardonnay.jpg',
        reviews: [
            {
                name: 'Peter Crosta',
                review: 'Tasted as advertised'
            },
            {
                name: 'Morgan Crosta',
                review: 'I liked it, but I like the tast of chilled piss'
            }
        ]
    },
    {
        maker: 'Period Blood',
        varietal: 'Pinot Noir',
        year: 2019,
        type: 'red',
        price: 799,
        dateTasted: '1/28/2022',
        imageUrl: 'https://www.ferrantewinery.com/wp-content/uploads/2019/05/DSC_1675.jpg',
        reviews: [
            {
                name: 'Peter Crosta',
                review: 'kinda metallic'
            },
            {
                name: 'Morgan Crosta',
                review: 'tastes like Brodie\'s period blood'
            }
        ]
    }
]

export default sampleData