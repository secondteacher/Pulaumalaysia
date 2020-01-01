var config = {
    style: 'mapbox://styles/shahadan/ck4ulk0n6aqrb1cms175eb96y',
    accessToken: 'pk.eyJ1Ijoic2hhaGFkYW4iLCJhIjoiY2s0MHlheHEyMDJ5eDNtcGsxMnFqMjVlNSJ9.AmWFbv3mw6Bo7aiJRBvVKQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'This Is What More Than A Century Of Wildfires In California Looks Like',
    subtitle: 'In the last two decades, 13 percent of the state has gone up in flames.',
    byline: 'By Chris D’Angelo. Map visualization by Lo Bénichou.',
    footer: 'The article was first published on <a href="https://www.huffpost.com/entry/california-wildfire-maps_n_5c23aeafe4b05c88b6fd04c1">Huffington Post</a></br>Source: California Department of Forestry and Fire Protection’s Fire and Resource Assessment Program or FRAP. (The dataset does not include information from years 1897, 1899, 1901, or 1904.) The FRAP dataset had incomplete data for 2018. 2018 was removed and replaced by data from the Geospatial Multi-Agency Coordination Wildland Fire Support database. We also intentionally left out 1878.',
    chapters: [
        {
            id: 'chap-1',
            title: '',
            image: 'https://raw.githubusercontent.com/secondteacher/Malaysia-Polygon-Map-with-State-geojson-file/master/testmap.png',
            description: '',
            location: {
              center: [106.10849, 4.63024],
              zoom: 5.60,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                  layer: 'fires',
                  opacity: 1
              },
              {
                  layer: 'satellite',
                  opacity: .5
              }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'chap-2',
            title: '',
            image: '',
            description: 'From 1895 to 2018, wildfires burned 35,437,560 acres of land. California measures nearly 105 million acres. In the past 123 years, wildfires have burned the equivalent of 33.8 percent of California.',
            location: {
              center: [99.68562, 6.29265],
              zoom: 10.70,
              pitch: 5.00,
              bearing: -16.00
            },
            onChapterEnter: [
              {
                  layer: 'fires',
                  opacity: 1
              },
              {
                  layer: 'satellite',
                  opacity: .5
              }
            ],
            onChapterExit: [
              {
                  layer: 'fires',
                  opacity: 0
              },
              {
                  layer: 'satellite',
                  opacity: 1
              }
            ]
        },
        {
            id: 'chap-3',
            title: '',
            image: '',
            description: 'To scale, it would look like this.',
            location: {
              center: [116.19323, 5.47252],
              zoom: 7.19,
              pitch: 4.50,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                  layer: 'Basic',
                  opacity: .8
              },
              {
                  layer: 'Basic-copy',
                  opacity: 1
              },
              {
                  layer: 'satellite',
                  opacity: .5
              }
            ],
            onChapterExit: [
              {
                  layer: 'Basic',
                  opacity: 0
              },
              {
                  layer: 'Basic-copy',
                  opacity: 0
              }
            ]
        },
        {
            id: 'chap-4',
            title: '',
            image: '',
            description: 'Almost 40 percent of the burned acreage caught fire in the last 20 years. It’s equivalent to 13 percent of California.',
            location: {
              center: [117.37992, 4.67889],
              zoom: 8.20,
              pitch: 4.50,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                  layer: 'california-14',
                  opacity: .8
              },
              {
                  layer: 'california-14-line',
                  opacity: 1
              },
              {
                  layer: 'satellite',
                  opacity: .5
              }
            ],
            onChapterExit: [
              {
                  layer: 'california-14',
                  opacity: 0
              },
              {
                  layer: 'california-14-line',
                  opacity: 0
              }
            ]
        },
        {
            id: 'chap-5',
            title: '',
            image: '',
            description: 'The three largest fires in the history of California happened in the last 20 years.',
            location: {
              center: [118.72426, 4.52681],
              zoom: 10.34,
              pitch: 4.50,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                  layer: 'thomas',
                  opacity: 1
              },
              {
                  layer: 'mendocino',
                  opacity: 1
              },
              {
                  layer: 'cedar',
                  opacity: 1
              },
              {
                  layer: 'satellite',
                  opacity: .5
              }
            ],
            onChapterExit: [
              {
                  layer: 'thomas',
                  opacity: 0
              },
              {
                  layer: 'mendocino',
                  opacity: 0
              },
              {
                  layer: 'cedar',
                  opacity: 0
              },
              {
                  layer: 'satellite',
                  opacity: .75
              }
            ]
        },
        {
            id: 'chap-6',
            title: '',
            image: '',
            description: "In 2003, the Cedar fire ripped through San Diego County, burning more than 273,000 acres and destroying 2,800 buildings. Thirteen civilians and one firefighter were killed, and another 104 firefighters were injured. The Cedar stands as the third-largest wildfire in California's history.",
            location: {
              center: [104.08811, 2.79830],
              zoom: 11.34,
              pitch: 4.50,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                  layer: 'cedar',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'cedar',
                  opacity: 0
              }
            ]
        },
        {
            id: 'chap-8',
            title: '',
            image: '',
            description: "In December 2017, the Thomas fire ― a rare winter inferno fueled by powerful Santa Ana winds ― burned more than 280,000 acres and forced hundreds of thousands of evacuations in Ventura and Santa Barbara counties. Two people died and more than 1,063 structures were destroyed. The Thomas stood as California’s largest recorded wildfire for less than a year.",
            location: {
              center: [104.14625, 2.81336],
              zoom: 14.59,
              pitch: 4.50,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                  layer: 'thomas',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'thomas',
                  opacity: 0
              }
            ]
        },
        {
            id: 'chap-9',
            title: '',
            image: '',
            description: "This summer, a combination of wildfires exploded north of San Francisco and quickly burned through an area larger than Los Angeles. By the time it was fully contained, the Mendocino Complex fire had blackened an astonishing 459,000 acres and destroyed 280 structures. One fatality is attributed to the fire.",
            location: {
              center: [102.73167, 5.90915],
              zoom: 13.93,
              pitch: 36.00,
              bearing: 34.40
            },
            onChapterEnter: [
              {
                  layer: 'mendocino',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'mendocino',
                  opacity: 0
              }
            ]
        }
    ]
};
