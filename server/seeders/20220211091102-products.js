'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var data = [], masterdata = [], raw_data = [
      {
          product: "ROUND TUBES",
          productId: '1',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "1.25MM-18G",
                  size: [
                      {
                          size: "15NB/21.3MM-0.75INCH",
                          weight: 3.6,
                          price: 81
                      },
                      {
                          size: "20NB/26.9MM-1INCH",
                          weight: 4.6,
                          price: 80
                      },
                      {
                          size: "25NB/33.7MM-1.25INCH",
                          weight: 5.8,
                          price: 80
                      },
                      {
                          size: "32NB/42.4MM-1.5INCH",
                          weight: 7.3,
                          price: 80
                      },
                      {
                          size: "40NB/48.3MM-2INCH",
                          weight: 8.4,
                          price: 80
                      },
                      {
                          size: "50NB/60.3.7MM-2.5INCH",
                          weight: 10.5,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "1.6MM-16G",
                  size: [
                      {
                          size: "15NB/21.3MM-0.75INCH",
                          weight: 4.7,
                          price: 81
                      },
                      {
                          size: "20NB/26.9MM-1INCH",
                          weight: 6,
                          price: 80
                      },
                      {
                          size: "25NB/33.7MM-1.25INCH",
                          weight: 7.6,
                          price: 80
                      },
                      {
                          size: "32NB/42.4MM-1.5INCH",
                          weight: 9.7,
                          price: 80
                      },
                      {
                          size: "40NB/48.3MM-2INCH",
                          weight: 11.1,
                          price: 80
                      },
                      {
                          size: "50NB/60.3.7MM-2.5INCH",
                          weight: 13.9,
                          price: 80
                      },
                      {
                          size: "65NB/76.1MM-3INCH",
                          weight: 17.6,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2MM-14G",
                  size: [
                      {
                          size: "15NB/21.3MM-0.75INCH",
                          weight: 5.7,
                          price: 81
                      },
                      {
                          size: "20NB/26.9MM-1INCH",
                          weight: 7.4,
                          price: 80
                      },
                      {
                          size: "25NB/33.7MM-1.25INCH",
                          weight: 9.4,
                          price: 80
                      },
                      {
                          size: "32NB/42.4MM-1.5INCH",
                          weight: 12,
                          price: 80
                      },
                      {
                          size: "40NB/48.3MM-2INCH",
                          weight: 13.7,
                          price: 80
                      },
                      {
                          size: "50NB/60.3.7MM-2.5INCH",
                          weight: 17.2,
                          price: 80
                      },
                      {
                          size: "65NB/76.1MM-3INCH",
                          weight: 21.9,
                          price: 80
                      },
                      {
                          size: "80NB/88.9MM-3.5INCH",
                          weight: 25.7,
                          price: 80
                      },
                      {
                          size: "90NB/101.6MM-4INCH",
                          weight: 29.5,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.5MM-13G",
                  size: [
                      {
                          size: "15NB/21.3MM-0.75INCH",
                          weight: 7,
                          price: 81
                      },
                      {
                          size: "20NB/26.9MM-1INCH",
                          weight: 9,
                          price: 80
                      },
                      {
                          size: "25NB/33.7MM-1.25INCH",
                          weight: 11.5,
                          price: 80
                      },
                      {
                          size: "32NB/42.4MM-1.5INCH",
                          weight: 14.5,
                          price: 80
                      },
                      {
                          size: "40NB/48.3MM-2INCH",
                          weight: 17,
                          price: 80
                      },
                      {
                          size: "50NB/60.3.7MM-2.5INCH",
                          weight: 22,
                          price: 80
                      },
                      {
                          size: "65NB/76.1MM-3INCH",
                          weight: 27.5,
                          price: 80
                      },
                      {
                          size: "80NB/88.9MM-3.5INCH",
                          weight: 32,
                          price: 80
                      },
                      {
                          size: "90NB/101.6MM-4INCH",
                          weight: 37,
                          price: 80
                      },
                      {
                          size: "100NB/114.3MM-4.5INCH",
                          weight: 41.5,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.9MM-11G",
                  size: [
                      {
                          size: "15NB/21.3MM-0.75INCH",
                          weight: 7.9,
                          price: 81
                      },
                      {
                          size: "20NB/26.9MM-1INCH",
                          weight: 10.3,
                          price: 80
                      },
                      {
                          size: "25NB/33.7MM-1.25INCH",
                          weight: 13.2,
                          price: 80
                      },
                      {
                          size: "32NB/42.4MM-1.5INCH",
                          weight: 17,
                          price: 80
                      },
                      {
                          size: "40NB/48.3MM-2INCH",
                          weight: 19.5,
                          price: 80
                      },
                      {
                          size: "50NB/60.3.7MM-2.5INCH",
                          weight: 25,
                          price: 80
                      },
                      {
                          size: "65NB/76.1MM-3INCH",
                          weight: 31.5,
                          price: 80
                      },
                      {
                          size: "80NB/88.9MM-3.5INCH",
                          weight: 37,
                          price: 80
                      },
                      {
                          size: "90NB/101.6MM-4INCH",
                          weight: 42.5,
                          price: 80
                      },
                      {
                          size: "100NB/114.3MM-4.5INCH",
                          weight: 48,
                          price: 80
                      },
                  ]
              },
          ]
      },
      {
          product: "SQUARE TUBES",
          productId: '2',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "1.25MM-18G",
                  size: [
                      {
                          size: "21MM X 21MM-(0.75 X 0.75)INCH",
                          weight: 4.5,
                          price: 81
                      },
                      {
                          size: "25MM X 25MM-(1 X 1)INCH",
                          weight: 5.6,
                          price: 80
                      },
                      {
                          size: "30MM X 30MM-(1.25 X 1.25)INCH",
                          weight: 7,
                          price: 80
                      },
                      {
                          size: "38MM X 38MM-(1.5 X 1.5)INCH",
                          weight: 8.4,
                          price: 80
                      },
                      {
                          size: "50MM X 50MM-(2 X 2)INCH",
                          weight: 11.1,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "1.6MM-16G",
                  size: [
                      {
                          size: "21MM X 21MM-(0.75 X 0.75)INCH",
                          weight: 5.9,
                          price: 81
                      },
                      {
                          size: "25MM X 25MM-(1 X 1)INCH",
                          weight: 7.4,
                          price: 80
                      },
                      {
                          size: "30MM X 30MM-(1.25 X 1.25)INCH",
                          weight: 9.2,
                          price: 80
                      },
                      {
                          size: "38MM X 38MM-(1.5 X 1.5)INCH",
                          weight: 11,
                          price: 80
                      },
                      {
                          size: "50MM X 50MM-(2 X 2)INCH",
                          weight: 14.6,
                          price: 80
                      },
                      {
                          size: "60MM X 60MM-(2.5 X 2.5)INCH",
                          weight: 17.7,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2MM-14G",
                  size: [
                      {
                          size: "21MM X 21MM-(0.75 X 0.75)INCH",
                          weight: 7.3,
                          price: 81
                      },
                      {
                          size: "25MM X 25MM-(1 X 1)INCH",
                          weight: 9.2,
                          price: 80
                      },
                      {
                          size: "30MM X 30MM-(1.25 X 1.25)INCH",
                          weight: 11.4,
                          price: 80
                      },
                      {
                          size: "38MM X 38MM-(1.5 X 1.5)INCH",
                          weight: 13.7,
                          price: 80
                      },
                      {
                          size: "50MM X 50MM-(2 X 2)INCH",
                          weight: 18.2,
                          price: 80
                      },
                      {
                          size: "60MM X 60MM-(2.5 X 2.5)INCH",
                          weight: 22,
                          price: 80
                      },
                      {
                          size: "72MM X 72MM-(3 X 3)INCH",
                          weight: 26.5,
                          price: 80
                      },
                      {
                          size: "80MM X 80MM-(3.2 X 3.2)INCH",
                          weight: 33.6,
                          price: 80
                      },
                      {
                          size: "91MM X 91MM-(3.5 X 3.5)INCH",
                          weight: 37,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.5MM-13G",
                  size: [
                      {
                          size: "21MM X 21MM-(0.75 X 0.75)INCH",
                          weight: 8.5,
                          price: 81
                      },
                      {
                          size: "25MM X 25MM-(1 X 1)INCH",
                          weight: 11,
                          price: 80
                      },
                      {
                          size: "30MM X 30MM-(1.25 X 1.25)INCH",
                          weight: 13,
                          price: 80
                      },
                      {
                          size: "38MM X 38MM-(1.5 X 1.5)INCH",
                          weight: 17,
                          price: 80
                      },
                      {
                          size: "50MM X 50MM-(2 X 2)INCH",
                          weight: 23,
                          price: 80
                      },
                      {
                          size: "60MM X 60MM-(2.5 X 2.5)INCH",
                          weight: 28,
                          price: 80
                      },
                      {
                          size: "72MM X 72MM-(3 X 3)INCH",
                          weight: 32,
                          price: 80
                      },
                      {
                          size: "80MM X 80MM-(3.2 X 3.2)INCH",
                          weight: 37,
                          price: 80
                      },
                      {
                          size: "91MM X 91MM-(3.5 X 3.5)INCH",
                          weight: 42,
                          price: 80
                      },
                      {
                          size: "100MM X 100MM-(4 X 4)INCH",
                          weight: 46,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.9MM-11G",
                  size: [
                      {
                          size: "21MM X 21MM-(0.75 X 0.75)INCH",
                          weight: 10.2,
                          price: 81
                      },
                      {
                          size: "25MM X 25MM-(1 X 1)INCH",
                          weight: 12.4,
                          price: 80
                      },
                      {
                          size: "30MM X 30MM-(1.25 X 1.25)INCH",
                          weight: 15.1,
                          price: 80
                      },
                      {
                          size: "38MM X 38MM-(1.5 X 1.5)INCH",
                          weight: 19.5,
                          price: 80
                      },
                      {
                          size: "50MM X 50MM-(2 X 2)INCH",
                          weight: 26,
                          price: 80
                      },
                      {
                          size: "60MM X 60MM-(2.5 X 2.5)INCH",
                          weight: 31.4,
                          price: 80
                      },
                      {
                          size: "72MM X 72MM-(3 X 3)INCH",
                          weight: 38,
                          price: 80
                      },
                      {
                          size: "80MM X 80MM-(3.2 X 3.2)INCH",
                          weight: 42.3,
                          price: 80
                      },
                      {
                          size: "91MM X 91MM-(3.5 X 3.5)INCH",
                          weight: 48.3,
                          price: 80
                      },
                      {
                          size: "100MM X 100MM-(4 X 4)INCH",
                          weight: 53.2,
                          price: 80
                      },
                  ]
              },
          ]
      },
      {
          product: "RECTANGLE TUBES",
          productId: '3',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "1.25MM-18G",
                  size: [
                      {
                          size: "40MM X 20MM-(0.75 X 1.5)INCH",
                          weight: 6.5,
                          price: 81
                      },
                      {
                          size: "50MM X 25MM-(2 X 1)INCH",
                          weight: 8.2,
                          price: 80
                      },
                      {
                          size: "60MM X 40MM-(2.5 X 1.5)INCH",
                          weight: 11.1,
                          price: 80
                      },
                      {
                          size: "75MM x 25MM-(3 X 1)INCH",
                          weight: 11.1,
                          price: 80
                      },
                      {
                          size: "80MM X 40MM-(3 X 1.5)INCH",
                          weight: 13.3,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "1.6MM-16G",
                  size: [
                      {
                          size: "40MM X 20MM-(0.75 X 1.5)INCH",
                          weight: 8.6,
                          price: 81
                      },
                      {
                          size: "50MM X 25MM-(2 X 1)INCH",
                          weight: 10.9,
                          price: 80
                      },
                      {
                          size: "60MM X 40MM-(2.5 X 1.5)INCH",
                          weight: 14.6,
                          price: 80
                      },
                      {
                          size: "75MM x 25MM-(3 X 1)INCH",
                          weight: 15,
                          price: 80
                      },
                      {
                          size: "80MM X 40MM-(3 X 1.5)INCH",
                          weight: 17.7,
                          price: 80
                      },
                      {
                          size: "96MM X 48MM-(4 X 2)INCH",
                          weight: 21.3,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2MM-14G",
                  size: [
                      {
                          size: "40MM X 20MM-(0.75 X 1.5)INCH",
                          weight: 10.7,
                          price: 81
                      },
                      {
                          size: "50MM X 25MM-(2 X 1)INCH",
                          weight: 13.5,
                          price: 80
                      },
                      {
                          size: "60MM X 40MM-(2.5 X 1.5)INCH",
                          weight: 18.2,
                          price: 80
                      },
                      {
                          size: "75MM x 25MM-(3 X 1)INCH",
                          weight: 18.2,
                          price: 80
                      },
                      {
                          size: "80MM X 40MM-(3 X 1.5)INCH",
                          weight: 22,
                          price: 80
                      },
                      {
                          size: "96MM X 48MM-(4 X 2)INCH",
                          weight: 26.5,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.5MM-13G",
                  size: [
                      {
                          size: "40MM X 20MM-(0.75 X 1.5)INCH",
                          weight: 13.2,
                          price: 81
                      },
                      {
                          size: "50MM X 25MM-(2 X 1)INCH",
                          weight: 17,
                          price: 80
                      },
                      {
                          size: "60MM X 40MM-(2.5 X 1.5)INCH",
                          weight: 22.6,
                          price: 80
                      },
                      {
                          size: "75MM x 25MM-(3 X 1)INCH",
                          weight: 22.6,
                          price: 80
                      },
                      {
                          size: "80MM X 40MM-(3 X 1.5)INCH",
                          weight: 27.3,
                          price: 80
                      },
                      {
                          size: "96MM X 48MM-(4 X 2)INCH",
                          weight: 32,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.9MM-11G",
                  size: [
                      {
                          size: "40MM X 20MM-(0.75 X 1.5)INCH",
                          weight: 15.1,
                          price: 81
                      },
                      {
                          size: "50MM X 25MM-(2 X 1)INCH",
                          weight: 19.2,
                          price: 80
                      },
                      {
                          size: "60MM X 40MM-(2.5 X 1.5)INCH",
                          weight: 26,
                          price: 80
                      },
                      {
                          size: "75MM x 25MM-(3 X 1)INCH",
                          weight: 26,
                          price: 80
                      },
                      {
                          size: "80MM X 40MM-(3 X 1.5)INCH",
                          weight: 31.4,
                          price: 80
                      },
                      {
                          size: "96MM X 48MM-(4 X 2)INCH",
                          weight: 38,
                          price: 80
                      },
                  ]
              },
          ]
      },
      {
          product: "CR ROUND",
          productId: '4',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "0.8MM-21G",
                  size: [
                      {
                          size: "19.05MM-0.75inch",
                          weight: 2.2,
                          price: 81
                      },
                      {
                          size: "25.45MM-1.0inch",
                          weight: 2.9,
                          price: 80
                      },
                      {
                          size: "31.75MM-1.25inch",
                          weight: 3.7,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "1MM-19G",
                  size: [
                      {
                          size: "19.05MM-0.75inch",
                          weight: 2.7,
                          price: 80
                      },
                      {
                          size: "25.45MM-1.0inch",
                          weight: 3.6,
                          price: 79
                      },
                      {
                          size: "31.75MM-1.25inch",
                          weight: 4.5,
                          price: 79
                      },
                      {
                          size: "38.1MM-1.5inch",
                          weight: 5.5,
                          price: 79
                      },
                  ]
              },
              {
                  guage: "1.2MM-18G",
                  size: [
                      {
                          size: "19.05MM-0.75inch",
                          weight: 3.3,
                          price: 79
                      },
                      {
                          size: "25.45MM-1.0inch",
                          weight: 4.5,
                          price: 78
                      },
                      {
                          size: "31.75MM-1.25inch",
                          weight: 5.6,
                          price: 78
                      },
                      {
                          size: "38.1MM-1.5inch",
                          weight: 6.8,
                          price: 78
                      },
                      {
                          size: "50.8MM-2inch",
                          weight: 9.2,
                          price: 78
                      },
                  ]
              },
              {
                  guage: "1.6MM-16G",
                  size: [
                      {
                          size: "19.05MM-0.75inch",
                          weight: 4.1,
                          price: 78
                      },
                      {
                          size: "25.45MM-1.0inch",
                          weight: 5.6,
                          price: 77
                      },
                      {
                          size: "31.75MM-1.25inch",
                          weight: 7.1,
                          price: 77
                      },
                      {
                          size: "38.1MM-1.5inch",
                          weight: 8.6,
                          price: 77
                      },
                      {
                          size: "50.8MM-2inch",
                          weight: 11.6,
                          price: 77
                      },
                      {
                          size: "63.5MM-2.5inch",
                          weight: 14.6,
                          price: 77
                      },
                      {
                          size: "76.2MM-3inch",
                          weight: 17.7,
                          price: 77
                      }
                  ]
              },
              {
                  guage: "2.0MM-14G",
                  size: [
                      {
                          size: "19.05MM-0.75inch",
                          weight: 5,
                          price: 77
                      },
                      {
                          size: "25.45MM-1.0inch",
                          weight: 6.9,
                          price: 76
                      },
                      {
                          size: "31.75MM-1.25inch",
                          weight: 8.8,
                          price: 76
                      },
                      {
                          size: "38.1MM-1.5inch",
                          weight: 10.7,
                          price: 76
                      },
                      {
                          size: "50.8MM-2inch",
                          weight: 14.4,
                          price: 76
                      },
                      {
                          size: "63.5MM-2.5inch",
                          weight: 18.2,
                          price: 76
                      },
                      {
                          size: "76.2MM-3inch",
                          weight: 22,
                          price: 76
                      }
                  ]
              },
              {
                  guage: "2.6MM-12G",
                  size: [
                      {
                          size: "19.05MM-0.75inch",
                          weight: 5.1,
                          price: 77
                      },
                      {
                          size: "25.45MM-1.0inch",
                          weight: 8.9,
                          price: 76
                      },
                      {
                          size: "31.75MM-1.25inch",
                          weight: 11.4,
                          price: 76
                      },
                      {
                          size: "38.1MM-1.5inch",
                          weight: 13.9,
                          price: 76
                      },
                      {
                          size: "50.8MM-2inch",
                          weight: 18.9,
                          price: 76
                      },
                      {
                          size: "63.5MM-2.5inch",
                          weight: 23.9,
                          price: 76
                      },
                      {
                          size: "76.2MM-3inch",
                          weight: 28.8,
                          price: 76
                      }
                  ]
              }
          ]
      },
      {
          product: "CR SQUARE TUBES",
          productId: '5',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "0.8MM-21G",
                  size: [
                      {
                          size: "19.05MM-0.75inch",
                          weight: 2.8,
                          price: 81
                      },
                      {
                          size: "25.45MM-1.0inch",
                          weight: 3.7,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "1MM-19G",
                  size: [
                      {
                          size: "19.05MM-0.75inch",
                          weight: 3.4,
                          price: 80
                      },
                      {
                          size: "25.45MM-1.0inch",
                          weight: 4.5,
                          price: 79
                      },
                      {
                          size: "31.75MM-1.25inch",
                          weight: 5.5,
                          price: 79
                      },
                      {
                          size: "38.1MM-1.5inch",
                          weight: 7,
                          price: 79
                      },
                  ]
              },
              {
                  guage: "1.2MM-18G",
                  size: [
                      {
                          size: "19.05MM-0.75inch",
                          weight: 4.2,
                          price: 79
                      },
                      {
                          size: "25.45MM-1.0inch",
                          weight: 5.6,
                          price: 78
                      },
                      {
                          size: "31.75MM-1.25inch",
                          weight: 6.8,
                          price: 78
                      },
                      {
                          size: "38.1MM-1.5inch",
                          weight: 8.7,
                          price: 78
                      },
                      {
                          size: "50.8MM-2inch",
                          weight: 11.5,
                          price: 78
                      },
                  ]
              },
              {
                  guage: "1.6MM-16G",
                  size: [
                      {
                          size: "19.05MM-0.75inch",
                          weight: 5.3,
                          price: 78
                      },
                      {
                          size: "25.45MM-1.0inch",
                          weight: 7.1,
                          price: 77
                      },
                      {
                          size: "31.75MM-1.25inch",
                          weight: 8.6,
                          price: 77
                      },
                      {
                          size: "38.1MM-1.5inch",
                          weight: 11,
                          price: 77
                      },
                      {
                          size: "50.8MM-2inch",
                          weight: 14.6,
                          price: 77
                      },
                      {
                          size: "63.5MM-2.5inch",
                          weight: 17.7,
                          price: 77
                      },
                      {
                          size: "76.2MM-3inch",
                          weight: 22.2,
                          price: 77
                      }
                  ]
              },
              {
                  guage: "2.0MM-14G",
                  size: [
                      {
                          size: "19.05MM-0.75inch",
                          weight: 6.5,
                          price: 77
                      },
                      {
                          size: "25.45MM-1.0inch",
                          weight: 8.8,
                          price: 76
                      },
                      {
                          size: "31.75MM-1.25inch",
                          weight: 10.7,
                          price: 76
                      },
                      {
                          size: "38.1MM-1.5inch",
                          weight: 13.7,
                          price: 76
                      },
                      {
                          size: "50.8MM-2inch",
                          weight: 18.2,
                          price: 76
                      },
                      {
                          size: "63.5MM-2.5inch",
                          weight: 22,
                          price: 76
                      },
                      {
                          size: "76.2MM-3inch",
                          weight: 27.6,
                          price: 76
                      }
                  ]
              },
              {
                  guage: "2.6MM-12G",
                  size: [
                      {
                          size: "19.05MM-0.75inch",
                          weight: 7.2,
                          price: 77
                      },
                      {
                          size: "25.45MM-1.0inch",
                          weight: 11.4,
                          price: 76
                      },
                      {
                          size: "31.75MM-1.25inch",
                          weight: 13.9,
                          price: 76
                      },
                      {
                          size: "38.1MM-1.5inch",
                          weight: 17.9,
                          price: 76
                      },
                      {
                          size: "50.8MM-2inch",
                          weight: 23.9,
                          price: 76
                      },
                      {
                          size: "63.5MM-2.5inch",
                          weight: 28.8,
                          price: 76
                      },
                      {
                          size: "76.2MM-3inch",
                          weight: 36.3,
                          price: 76
                      }
                  ]
              }
          ]
      },
      {
          product: "CR RECTANGLE TUBES",
          productId: '6',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "0.8MM-21G",
                  size: [
                  // {
                  //     size: "(40mm X 20mm)-(1.5inch X 0.75inch)",
                  //     weight: 2.8,
                  //     price: 81
                  // },
                  // {
                  //     size: "(50MM X 25MM)-(2inch X 1inch)",
                  //     weight: 3.7,
                  //     price: 80
                  // },
                  // {
                  //     size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                  //     weight: 3.7,
                  //     price: 80
                  // },
                  // {
                  //     size: "(80MM X 40MM)-(3inch X 1.5inch)",
                  //     weight:2.9,
                  //     price: 80
                  // },
                  // {
                  //     size: "(100MM X 25MM)-(4inch X 1inch)",
                  //     weight:2.9,
                  //     price: 80
                  // },
                  // {
                  //     size: "(100MM X 50MM)-(4inch X 2inch)",
                  //     weight:2.9,
                  //     price: 80
                  // }
                  ]
              },
              {
                  guage: "1MM-19G",
                  size: [
                      {
                          size: "(40mm X 20mm)-(1.5inch X 0.75inch)",
                          weight: 5.5,
                          price: 80
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 6.9,
                          price: 79
                      },
                  ]
              },
              {
                  guage: "1.2MM-18G",
                  size: [
                      {
                          size: "(40mm X 20mm)-(1.5inch X 0.75inch)",
                          weight: 6.8,
                          price: 79
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 8.6,
                          price: 78
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 11.5,
                          price: 78
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 13.9,
                          price: 78
                      },
                      {
                          size: "(100MM X 25MM)-(4inch X 1inch)",
                          weight: 13.9,
                          price: 78
                      },
                  ]
              },
              {
                  guage: "1.6MM-16G",
                  size: [
                      {
                          size: "(40mm X 20mm)-(1.5inch X 0.75inch)",
                          weight: 8.6,
                          price: 78
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 10.9,
                          price: 77
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 14.6,
                          price: 77
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 17.7,
                          price: 77
                      },
                      {
                          size: "(100MM X 25MM)-(4inch X 1inch)",
                          weight: 17.7,
                          price: 77
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 22.2,
                          price: 77
                      }
                  ]
              },
              {
                  guage: "2.0MM-14G",
                  size: [
                      {
                          size: "(40mm X 20mm)-(1.5inch X 0.75inch)",
                          weight: 10.7,
                          price: 77
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 13.5,
                          price: 76
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 18.2,
                          price: 76
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 22,
                          price: 76
                      },
                      {
                          size: "(100MM X 25MM)-(4inch X 1inch)",
                          weight: 22,
                          price: 76
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 27.6,
                          price: 76
                      }
                  ]
              },
              {
                  guage: "2.6MM-12G",
                  size: [
                      {
                          size: "(40mm X 20mm)-(1.5inch X 0.75inch)",
                          weight: 13.9,
                          price: 77
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 17.6,
                          price: 76
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 23.9,
                          price: 76
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 28.8,
                          price: 76
                      },
                      {
                          size: "(100MM X 25MM)-(4inch X 1inch)",
                          weight: 28.8,
                          price: 76
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 88,
                          price: 76
                      }
                  ]
              }
          ]
      },
      {
          product: "HR ROUND TUBES",
          productId: '7',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "1.25MM-18G",
                  size: [
                      {
                          size: "(15NB / 21.3MM) - 0.75inch",
                          weight: 3.6,
                          price: 81
                      },
                      {
                          size: "(20NB / 26.9MM) - 1inch",
                          weight: 4.6,
                          price: 80
                      },
                      {
                          size: "(25NB / 33.7MM) - 1.25inch",
                          weight: 5.8,
                          price: 80
                      },
                      {
                          size: "(32NB / 42.4MM) - 1.5inch",
                          weight: 7.3,
                          price: 80
                      },
                      {
                          size: "(40NB / 48.3MM) - 2inch",
                          weight: 8.4,
                          price: 80
                      },
                      {
                          size: "(50NB / 60.3MM) - 2.5inch",
                          weight: 10.5,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "1.6MM-16G",
                  size: [
                      {
                          size: "(15NB / 21.3MM) - 0.75inch",
                          weight: 4.7,
                          price: 81
                      },
                      {
                          size: "(20NB / 26.9MM) - 1inch",
                          weight: 6,
                          price: 80
                      },
                      {
                          size: "(25NB / 33.7MM) - 1.25inch",
                          weight: 7.6,
                          price: 80
                      },
                      {
                          size: "(32NB / 42.4MM) - 1.5inch",
                          weight: 9.7,
                          price: 80
                      },
                      {
                          size: "(40NB / 48.3MM) - 2inch",
                          weight: 11.1,
                          price: 80
                      },
                      {
                          size: "(50NB / 60.3MM) - 2.5inch",
                          weight: 13.9,
                          price: 80
                      },
                      {
                          size: "(65NB / 76.1MM) - 3inch",
                          weight: 17.6,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2MM-14G",
                  size: [
                      {
                          size: "(15NB / 21.3MM) - 0.75inch",
                          weight: 5.7,
                          price: 81
                      },
                      {
                          size: "(20NB / 26.9MM) - 1inch",
                          weight: 7.4,
                          price: 80
                      },
                      {
                          size: "(25NB / 33.7MM) - 1.25inch",
                          weight: 9.4,
                          price: 80
                      },
                      {
                          size: "(32NB / 42.4MM) - 1.5inch",
                          weight: 12,
                          price: 80
                      },
                      {
                          size: "(40NB / 48.3MM) - 2inch",
                          weight: 13.7,
                          price: 80
                      },
                      {
                          size: "(50NB / 60.3MM) - 2.5inch",
                          weight: 17.2,
                          price: 80
                      },
                      {
                          size: "(65NB / 76.1MM) - 3inch",
                          weight: 21.9,
                          price: 80
                      },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 25.7,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 29.5,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.5MM-13G",
                  size: [
                      {
                          size: "(15NB / 21.3MM) - 0.75inch",
                          weight: 7,
                          price: 81
                      },
                      {
                          size: "(20NB / 26.9MM) - 1inch",
                          weight: 9,
                          price: 80
                      },
                      {
                          size: "(25NB / 33.7MM) - 1.25inch",
                          weight: 11.5,
                          price: 80
                      },
                      {
                          size: "(32NB / 42.4MM) - 1.5inch",
                          weight: 14.5,
                          price: 80
                      },
                      {
                          size: "(40NB / 48.3MM) - 2inch",
                          weight: 17,
                          price: 80
                      },
                      {
                          size: "(50NB / 60.3MM) - 2.5inch",
                          weight: 22,
                          price: 80
                      },
                      {
                          size: "(65NB / 76.1MM) - 3inch",
                          weight: 27.5,
                          price: 80
                      },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 32,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 37,
                          price: 80
                      },
                      {
                          size: "(100NB / 114.3MM) - 4.5inch",
                          weight: 41.5,
                          price: 80
                      },
                      {
                          size: "(110NB / 127MM) - 5inch",
                          weight: 46,
                          price: 80
                      },
                      {
                          size: "(125NB / 139.7MM) - 5.5inch",
                          weight: 51,
                          price: 80
                      },
                      {
                          size: "(135NB / 152.4MM) - 6inch",
                          weight: 55,
                          price: 80
                      },
                      {
                          size: "(150NB / 165.1MM) - 6.5inch",
                          weight: 60,
                          price: 80
                      },
                      {
                          size: "(165NB / 172MM) - 6.75inch",
                          weight: 63,
                          price: 80
                      },
                      {
                          size: "(175NB / 193.7MM) - 7.75inch",
                          weight: 70,
                          price: 80
                      },
                      {
                          size: "(200NB / 219.1MM) - 8.75inch",
                          weight: 80,
                          price: 80
                      },
                      {
                          size: "(225NB / 244.5MM) - 9.75inch",
                          weight: 88,
                          price: 80
                      },
                      {
                          size: "(250NB / 273MM) - 10.75inch",
                          weight: 98,
                          price: 80
                      },
                      {
                          size: "(300NB / 323.9MM) - 12.75inch",
                          weight: 117,
                          price: 80
                      },
                      {
                          size: "(350NB / 355.6MM) - 145inch",
                          weight: 128,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.65MM-12G",
                  size: [
                      {
                          size: "(15NB / 21.3MM) - 0.75inch",
                          weight: 7.3,
                          price: 81
                      },
                      {
                          size: "(20NB / 26.9MM) - 1inch",
                          weight: 9.3,
                          price: 80
                      },
                      {
                          size: "(25NB / 33.7MM) - 1.25inch",
                          weight: 12,
                          price: 80
                      },
                      {
                          size: "(32NB / 42.4MM) - 1.5inch",
                          weight: 15.3,
                          price: 80
                      },
                      {
                          size: "(40NB / 48.3MM) - 2inch",
                          weight: 18,
                          price: 80
                      },
                      {
                          size: "(50NB / 60.3MM) - 2.5inch",
                          weight: 22.2,
                          price: 80
                      },
                      {
                          size: "(65NB / 76.1MM) - 3inch",
                          weight: 28.3,
                          price: 80
                      },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 33.2,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 38.1,
                          price: 80
                      },
                      {
                          size: "(100NB / 114.3MM) - 4.5inch",
                          weight: 43,
                          price: 80
                      },
                      {
                          size: "(110NB / 127MM) - 5inch",
                          weight: 48,
                          price: 80
                      },
                      {
                          size: "(125NB / 139.7MM) - 5.5inch",
                          weight: 53,
                          price: 80
                      },
                      {
                          size: "(135NB / 152.4MM) - 6inch",
                          weight: 58,
                          price: 80
                      },
                      {
                          size: "(150NB / 165.1MM) - 6.5inch",
                          weight: 63,
                          price: 80
                      },
                      {
                          size: "(165NB / 172MM) - 6.75inch",
                          weight: 65,
                          price: 80
                      },
                      {
                          size: "(175NB / 193.7MM) - 7.75inch",
                          weight: 73.5,
                          price: 80
                      },
                      {
                          size: "(200NB / 219.1MM) - 8.75inch",
                          weight: 83.2,
                          price: 80
                      },
                      {
                          size: "(225NB / 244.5MM) - 9.75inch",
                          weight: 93,
                          price: 80
                      },
                      {
                          size: "(250NB / 273MM) - 10.75inch",
                          weight: 104,
                          price: 80
                      },
                      {
                          size: "(300NB / 323.9MM) - 12.75inch",
                          weight: 124,
                          price: 80
                      },
                      {
                          size: "(350NB / 355.6MM) - 145inch",
                          weight: 136,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.9MM-11G",
                  size: [
                      {
                          size: "(15NB / 21.3MM) - 0.75inch",
                          weight: 7.9,
                          price: 81
                      },
                      {
                          size: "(20NB / 26.9MM) - 1inch",
                          weight: 10.3,
                          price: 80
                      },
                      {
                          size: "(25NB / 33.7MM) - 1.25inch",
                          weight: 13.2,
                          price: 80
                      },
                      {
                          size: "(32NB / 42.4MM) - 1.5inch",
                          weight: 17,
                          price: 80
                      },
                      {
                          size: "(40NB / 48.3MM) - 2inch",
                          weight: 19.5,
                          price: 80
                      },
                      {
                          size: "(50NB / 60.3MM) - 2.5inch",
                          weight: 25,
                          price: 80
                      },
                      {
                          size: "(65NB / 76.1MM) - 3inch",
                          weight: 31.5,
                          price: 80
                      },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 37,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 42.5,
                          price: 80
                      },
                      {
                          size: "(100NB / 114.3MM) - 4.5inch",
                          weight: 48,
                          price: 80
                      },
                      {
                          size: "(110NB / 127MM) - 5inch",
                          weight: 53.5,
                          price: 80
                      },
                      {
                          size: "(125NB / 139.7MM) - 5.5inch",
                          weight: 59,
                          price: 80
                      },
                      {
                          size: "(135NB / 152.4MM) - 6inch",
                          weight: 64,
                          price: 80
                      },
                      {
                          size: "(150NB / 165.1MM) - 6.5inch",
                          weight: 70,
                          price: 80
                      },
                      {
                          size: "(165NB / 172MM) - 6.75inch",
                          weight: 73,
                          price: 80
                      },
                      {
                          size: "(175NB / 193.7MM) - 7.75inch",
                          weight: 82,
                          price: 80
                      },
                      {
                          size: "(200NB / 219.1MM) - 8.75inch",
                          weight: 93,
                          price: 80
                      },
                      {
                          size: "(225NB / 244.5MM) - 9.75inch",
                          weight: 104,
                          price: 80
                      },
                      {
                          size: "(250NB / 273MM) - 10.75inch",
                          weight: 116,
                          price: 80
                      },
                      {
                          size: "(300NB / 323.9MM) - 12.75inch",
                          weight: 138,
                          price: 80
                      },
                      {
                          size: "(350NB / 355.6MM) - 145inch",
                          weight: 151.5,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "3.25MM-10G",
                  size: [
                      {
                          size: "(15NB / 21.3MM) - 0.75inch",
                          weight: 8.6,
                          price: 81
                      },
                      {
                          size: "(20NB / 26.9MM) - 1inch",
                          weight: 11.2,
                          price: 80
                      },
                      {
                          size: "(25NB / 33.7MM) - 1.25inch",
                          weight: 14.4,
                          price: 80
                      },
                      {
                          size: "(32NB / 42.4MM) - 1.5inch",
                          weight: 19,
                          price: 80
                      },
                      {
                          size: "(40NB / 48.3MM) - 2inch",
                          weight: 21.3,
                          price: 80
                      },
                      {
                          size: "(50NB / 60.3MM) - 2.5inch",
                          weight: 27,
                          price: 80
                      },
                      {
                          size: "(65NB / 76.1MM) - 3inch",
                          weight: 35,
                          price: 80
                      },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 41,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 47,
                          price: 80
                      },
                      {
                          size: "(100NB / 114.3MM) - 4.5inch",
                          weight: 53,
                          price: 80
                      },
                      {
                          size: "(110NB / 127MM) - 5inch",
                          weight: 59,
                          price: 80
                      },
                      {
                          size: "(125NB / 139.7MM) - 5.5inch",
                          weight: 65,
                          price: 80
                      },
                      {
                          size: "(135NB / 152.4MM) - 6inch",
                          weight: 71,
                          price: 80
                      },
                      {
                          size: "(150NB / 165.1MM) - 6.5inch",
                          weight: 77,
                          price: 80
                      },
                      {
                          size: "(165NB / 172MM) - 6.75inch",
                          weight: 81,
                          price: 80
                      },
                      {
                          size: "(175NB / 193.7MM) - 7.75inch",
                          weight: 90,
                          price: 80
                      },
                      {
                          size: "(200NB / 219.1MM) - 8.75inch",
                          weight: 102,
                          price: 80
                      },
                      {
                          size: "(225NB / 244.5MM) - 9.75inch",
                          weight: 114,
                          price: 80
                      },
                      {
                          size: "(250NB / 273MM) - 10.75inch",
                          weight: 128,
                          price: 80
                      },
                      {
                          size: "(300NB / 323.9MM) - 12.75inch",
                          weight: 152,
                          price: 80
                      },
                      {
                          size: "(350NB / 355.6MM) - 145inch",
                          weight: 167,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "3.6MM-9G",
                  size: [
                      {
                          size: "(15NB / 21.3MM) - 0.75inch",
                          weight: 9.5,
                          price: 81
                      },
                      {
                          size: "(20NB / 26.9MM) - 1inch",
                          weight: 12.5,
                          price: 80
                      },
                      {
                          size: "(25NB / 33.7MM) - 1.25inch",
                          weight: 16,
                          price: 80
                      },
                      {
                          size: "(32NB / 42.4MM) - 1.5inch",
                          weight: 21,
                          price: 80
                      },
                      {
                          size: "(40NB / 48.3MM) - 2inch",
                          weight: 24,
                          price: 80
                      },
                      {
                          size: "(50NB / 60.3MM) - 2.5inch",
                          weight: 30.2,
                          price: 80
                      },
                      {
                          size: "(65NB / 76.1MM) - 3inch",
                          weight: 38.6,
                          price: 80
                      },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 45.4,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 52.2,
                          price: 80
                      },
                      {
                          size: "(100NB / 114.3MM) - 4.5inch",
                          weight: 59,
                          price: 80
                      },
                      {
                          size: "(110NB / 127MM) - 5inch",
                          weight: 66,
                          price: 80
                      },
                      {
                          size: "(125NB / 139.7MM) - 5.5inch",
                          weight: 72.5,
                          price: 80
                      },
                      {
                          size: "(135NB / 152.4MM) - 6inch",
                          weight: 79.2,
                          price: 80
                      },
                      {
                          size: "(150NB / 165.1MM) - 6.5inch",
                          weight: 86,
                          price: 80
                      },
                      {
                          size: "(165NB / 172MM) - 6.75inch",
                          weight: 90,
                          price: 80
                      },
                      {
                          size: "(175NB / 193.7MM) - 7.75inch",
                          weight: 101,
                          price: 80
                      },
                      {
                          size: "(200NB / 219.1MM) - 8.75inch",
                          weight: 115,
                          price: 80
                      },
                      {
                          size: "(225NB / 244.5MM) - 9.75inch",
                          weight: 128,
                          price: 80
                      },
                      {
                          size: "(250NB / 273MM) - 10.75inch",
                          weight: 144,
                          price: 80
                      },
                      {
                          size: "(300NB / 323.9MM) - 12.75inch",
                          weight: 171,
                          price: 80
                      },
                      {
                          size: "(350NB / 355.6MM) - 145inch",
                          weight: 187.5,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "4MM-8G",
                  size: [
                      {
                          size: "(15NB / 21.3MM) - 0.75inch",
                          weight: 10.5,
                          price: 81
                      },
                      {
                          size: "(20NB / 26.9MM) - 1inch",
                          weight: 13.5,
                          price: 80
                      },
                      {
                          size: "(25NB / 33.7MM) - 1.25inch",
                          weight: 17.5,
                          price: 80
                      },
                      {
                          size: "(32NB / 42.4MM) - 1.5inch",
                          weight: 23,
                          price: 80
                      },
                      {
                          size: "(40NB / 48.3MM) - 2inch",
                          weight: 26.2,
                          price: 80
                      },
                      {
                          size: "(50NB / 60.3MM) - 2.5inch",
                          weight: 33.3,
                          price: 80
                      },
                      {
                          size: "(65NB / 76.1MM) - 3inch",
                          weight: 43,
                          price: 80
                      },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 50.2,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 58,
                          price: 80
                      },
                      {
                          size: "(100NB / 114.3MM) - 4.5inch",
                          weight: 65.3,
                          price: 80
                      },
                      {
                          size: "(110NB / 127MM) - 5inch",
                          weight: 73,
                          price: 80
                      },
                      {
                          size: "(125NB / 139.7MM) - 5.5inch",
                          weight: 80.5,
                          price: 80
                      },
                      {
                          size: "(135NB / 152.4MM) - 6inch",
                          weight: 88,
                          price: 80
                      },
                      {
                          size: "(150NB / 165.1MM) - 6.5inch",
                          weight: 95.3,
                          price: 80
                      },
                      {
                          size: "(165NB / 172MM) - 6.75inch",
                          weight: 100,
                          price: 80
                      },
                      {
                          size: "(175NB / 193.7MM) - 7.75inch",
                          weight: 112.2,
                          price: 80
                      },
                      {
                          size: "(200NB / 219.1MM) - 8.75inch",
                          weight: 127.3,
                          price: 80
                      },
                      {
                          size: "(225NB / 244.5MM) - 9.75inch",
                          weight: 142.3,
                          price: 80
                      },
                      {
                          size: "(250NB / 273MM) - 10.75inch",
                          weight: 159.2,
                          price: 80
                      },
                      {
                          size: "(300NB / 323.9MM) - 12.75inch",
                          weight: 189,
                          price: 80
                      },
                      {
                          size: "(350NB / 355.6MM) - 145inch",
                          weight: 208,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "4.5MM-7.5G",
                  size: [
                      // {
                      //     size: "(15NB / 21.3MM) - 0.75inch",
                      //     weight: 10.5,
                      //     price: 81
                      // },
                      // {
                      //     size: "(20NB / 26.9MM) - 1inch",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(25NB / 33.7MM) - 1.25inch",
                      //     weight: 17.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(32NB / 42.4MM) - 1.5inch",
                      //     weight: 23,
                      //     price: 80
                      // },
                      {
                          size: "(40NB / 48.3MM) - 2inch",
                          weight: 29.2,
                          price: 80
                      },
                      {
                          size: "(50NB / 60.3MM) - 2.5inch",
                          weight: 37.2,
                          price: 80
                      },
                      {
                          size: "(65NB / 76.1MM) - 3inch",
                          weight: 48,
                          price: 80
                      },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 56.2,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 64.6,
                          price: 80
                      },
                      {
                          size: "(100NB / 114.3MM) - 4.5inch",
                          weight: 73.5,
                          price: 80
                      },
                      {
                          size: "(110NB / 127MM) - 5inch",
                          weight: 82,
                          price: 80
                      },
                      {
                          size: "(125NB / 139.7MM) - 5.5inch",
                          weight: 90,
                          price: 80
                      },
                      {
                          size: "(135NB / 152.4MM) - 6inch",
                          weight: 98.5,
                          price: 80
                      },
                      {
                          size: "(150NB / 165.1MM) - 6.5inch",
                          weight: 107,
                          price: 80
                      },
                      {
                          size: "(165NB / 172MM) - 6.75inch",
                          weight: 112,
                          price: 80
                      },
                      {
                          size: "(175NB / 193.7MM) - 7.75inch",
                          weight: 126,
                          price: 80
                      },
                      {
                          size: "(200NB / 219.1MM) - 8.75inch",
                          weight: 143,
                          price: 80
                      },
                      {
                          size: "(225NB / 244.5MM) - 9.75inch",
                          weight: 160,
                          price: 80
                      },
                      {
                          size: "(250NB / 273MM) - 10.75inch",
                          weight: 179,
                          price: 80
                      },
                      {
                          size: "(300NB / 323.9MM) - 12.75inch",
                          weight: 213,
                          price: 80
                      },
                      {
                          size: "(350NB / 355.6MM) - 145inch",
                          weight: 234,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "4.85MM-7G",
                  size: [
                      // {
                      //     size: "(15NB / 21.3MM) - 0.75inch",
                      //     weight: 10.5,
                      //     price: 81
                      // },
                      // {
                      //     size: "(20NB / 26.9MM) - 1inch",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(25NB / 33.7MM) - 1.25inch",
                      //     weight: 17.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(32NB / 42.4MM) - 1.5inch",
                      //     weight: 23,
                      //     price: 80
                      // },
                      {
                          size: "(40NB / 48.3MM) - 2inch",
                          weight: 31,
                          price: 80
                      },
                      {
                          size: "(50NB / 60.3MM) - 2.5inch",
                          weight: 40,
                          price: 80
                      },
                      {
                          size: "(65NB / 76.1MM) - 3inch",
                          weight: 51,
                          price: 80
                      },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 60,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 69,
                          price: 80
                      },
                      {
                          size: "(100NB / 114.3MM) - 4.5inch",
                          weight: 78,
                          price: 80
                      },
                      {
                          size: "(110NB / 127MM) - 5inch",
                          weight: 87,
                          price: 80
                      },
                      {
                          size: "(125NB / 139.7MM) - 5.5inch",
                          weight: 96,
                          price: 80
                      },
                      {
                          size: "(135NB / 152.4MM) - 6inch",
                          weight: 106,
                          price: 80
                      },
                      {
                          size: "(150NB / 165.1MM) - 6.5inch",
                          weight: 115,
                          price: 80
                      },
                      {
                          size: "(165NB / 172MM) - 6.75inch",
                          weight: 120,
                          price: 80
                      },
                      {
                          size: "(175NB / 193.7MM) - 7.75inch",
                          weight: 134,
                          price: 80
                      },
                      {
                          size: "(200NB / 219.1MM) - 8.75inch",
                          weight: 152,
                          price: 80
                      },
                      {
                          size: "(225NB / 244.5MM) - 9.75inch",
                          weight: 172,
                          price: 80
                      },
                      {
                          size: "(250NB / 273MM) - 10.75inch",
                          weight: 193,
                          price: 80
                      },
                      {
                          size: "(300NB / 323.9MM) - 12.75inch",
                          weight: 229,
                          price: 80
                      },
                      {
                          size: "(350NB / 355.6MM) - 145inch",
                          weight: 252,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "5MM-6G",
                  size: [
                      // {
                      //     size: "(15NB / 21.3MM) - 0.75inch",
                      //     weight: 10.5,
                      //     price: 81
                      // },
                      // {
                      //     size: "(20NB / 26.9MM) - 1inch",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(25NB / 33.7MM) - 1.25inch",
                      //     weight: 17.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(32NB / 42.4MM) - 1.5inch",
                      //     weight: 23,
                      //     price: 80
                      // },
                      {
                          size: "(40NB / 48.3MM) - 2inch",
                          weight: 32,
                          price: 80
                      },
                      {
                          size: "(50NB / 60.3MM) - 2.5inch",
                          weight: 41,
                          price: 80
                      },
                      {
                          size: "(65NB / 76.1MM) - 3inch",
                          weight: 53,
                          price: 80
                      },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 62.5,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 71.5,
                          price: 80
                      },
                      {
                          size: "(100NB / 114.3MM) - 4.5inch",
                          weight: 81,
                          price: 80
                      },
                      {
                          size: "(110NB / 127MM) - 5inch",
                          weight: 90.5,
                          price: 80
                      },
                      {
                          size: "(125NB / 139.7MM) - 5.5inch",
                          weight: 100,
                          price: 80
                      },
                      {
                          size: "(135NB / 152.4MM) - 6inch",
                          weight: 118.5,
                          price: 80
                      },
                      {
                          size: "(150NB / 165.1MM) - 6.5inch",
                          weight: 124.5,
                          price: 80
                      },
                      {
                          size: "(165NB / 172MM) - 6.75inch",
                          weight: 140,
                          price: 80
                      },
                      {
                          size: "(175NB / 193.7MM) - 7.75inch",
                          weight: 158.5,
                          price: 80
                      },
                      {
                          size: "(200NB / 219.1MM) - 8.75inch",
                          weight: 158.5,
                          price: 80
                      },
                      {
                          size: "(225NB / 244.5MM) - 9.75inch",
                          weight: 177.1,
                          price: 80
                      },
                      {
                          size: "(250NB / 273MM) - 10.75inch",
                          weight: 198.2,
                          price: 80
                      },
                      {
                          size: "(300NB / 323.9MM) - 12.75inch",
                          weight: 236,
                          price: 80
                      },
                      {
                          size: "(350NB / 355.6MM) - 145inch",
                          weight: 260,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "5.5MM-5G",
                  size: [
                      // {
                      //     size: "(15NB / 21.3MM) - 0.75inch",
                      //     weight: 10.5,
                      //     price: 81
                      // },
                      // {
                      //     size: "(20NB / 26.9MM) - 1inch",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(25NB / 33.7MM) - 1.25inch",
                      //     weight: 17.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(32NB / 42.4MM) - 1.5inch",
                      //     weight: 23,
                      //     price: 80
                      // },
                      // {
                      //     size: "(40NB / 48.3MM) - 2inch",
                      //     weight: 32,
                      //     price: 80
                      // },
                      // {
                      //     size: "(50NB / 60.3MM) - 2.5inch",
                      //     weight: 41,
                      //     price: 80
                      // },
                      // {
                      //     size: "(65NB / 76.1MM) - 3inch",
                      //     weight: 53,
                      //     price: 80
                      // },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 69,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 80,
                          price: 80
                      },
                      {
                          size: "(100NB / 114.3MM) - 4.5inch",
                          weight: 89,
                          price: 80
                      },
                      {
                          size: "(110NB / 127MM) - 5inch",
                          weight: 101,
                          price: 80
                      },
                      {
                          size: "(125NB / 139.7MM) - 5.5inch",
                          weight: 110,
                          price: 80
                      },
                      {
                          size: "(135NB / 152.4MM) - 6inch",
                          weight: 120,
                          price: 80
                      },
                      {
                          size: "(150NB / 165.1MM) - 6.5inch",
                          weight: 130,
                          price: 80
                      },
                      {
                          size: "(165NB / 172MM) - 6.75inch",
                          weight: 139,
                          price: 80
                      },
                      {
                          size: "(175NB / 193.7MM) - 7.75inch",
                          weight: 153,
                          price: 80
                      },
                      {
                          size: "(200NB / 219.1MM) - 8.75inch",
                          weight: 174,
                          price: 80
                      },
                      {
                          size: "(225NB / 244.5MM) - 9.75inch",
                          weight: 195,
                          price: 80
                      },
                      {
                          size: "(250NB / 273MM) - 10.75inch",
                          weight: 218,
                          price: 80
                      },
                      {
                          size: "(300NB / 323.9MM) - 12.75inch",
                          weight: 259,
                          price: 80
                      },
                      {
                          size: "(350NB / 355.6MM) - 145inch",
                          weight: 285,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "6MM-4.5G",
                  size: [
                      // {
                      //     size: "(15NB / 21.3MM) - 0.75inch",
                      //     weight: 10.5,
                      //     price: 81
                      // },
                      // {
                      //     size: "(20NB / 26.9MM) - 1inch",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(25NB / 33.7MM) - 1.25inch",
                      //     weight: 17.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(32NB / 42.4MM) - 1.5inch",
                      //     weight: 23,
                      //     price: 80
                      // },
                      // {
                      //     size: "(40NB / 48.3MM) - 2inch",
                      //     weight: 32,
                      //     price: 80
                      // },
                      // {
                      //     size: "(50NB / 60.3MM) - 2.5inch",
                      //     weight: 41,
                      //     price: 80
                      // },
                      // {
                      //     size: "(65NB / 76.1MM) - 3inch",
                      //     weight: 53,
                      //     price: 80
                      // },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 74,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 85,
                          price: 80
                      },
                      {
                          size: "(100NB / 114.3MM) - 4.5inch",
                          weight: 96,
                          price: 80
                      },
                      {
                          size: "(110NB / 127MM) - 5inch",
                          weight: 118,
                          price: 80
                      },
                      {
                          size: "(125NB / 139.7MM) - 5.5inch",
                          weight: 119,
                          price: 80
                      },
                      {
                          size: "(135NB / 152.4MM) - 6inch",
                          weight: 130,
                          price: 80
                      },
                      {
                          size: "(150NB / 165.1MM) - 6.5inch",
                          weight: 141,
                          price: 80
                      },
                      {
                          size: "(165NB / 172MM) - 6.75inch",
                          weight: 148,
                          price: 80
                      },
                      {
                          size: "(175NB / 193.7MM) - 7.75inch",
                          weight: 167,
                          price: 80
                      },
                      {
                          size: "(200NB / 219.1MM) - 8.75inch",
                          weight: 189,
                          price: 80
                      },
                      {
                          size: "(225NB / 244.5MM) - 9.75inch",
                          weight: 211,
                          price: 80
                      },
                      {
                          size: "(250NB / 273MM) - 10.75inch",
                          weight: 237,
                          price: 80
                      },
                      {
                          size: "(300NB / 323.9MM) - 12.75inch",
                          weight: 282,
                          price: 80
                      },
                      {
                          size: "(350NB / 355.6MM) - 145inch",
                          weight: 310,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "6.3MM-4G",
                  size: [
                      // {
                      //     size: "(15NB / 21.3MM) - 0.75inch",
                      //     weight: 10.5,
                      //     price: 81
                      // },
                      // {
                      //     size: "(20NB / 26.9MM) - 1inch",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(25NB / 33.7MM) - 1.25inch",
                      //     weight: 17.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(32NB / 42.4MM) - 1.5inch",
                      //     weight: 23,
                      //     price: 80
                      // },
                      // {
                      //     size: "(40NB / 48.3MM) - 2inch",
                      //     weight: 32,
                      //     price: 80
                      // },
                      // {
                      //     size: "(50NB / 60.3MM) - 2.5inch",
                      //     weight: 41,
                      //     price: 80
                      // },
                      // {
                      //     size: "(65NB / 76.1MM) - 3inch",
                      //     weight: 53,
                      //     price: 80
                      // },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 77,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 89,
                          price: 80
                      },
                      {
                          size: "(100NB / 114.3MM) - 4.5inch",
                          weight: 101,
                          price: 80
                      },
                      {
                          size: "(110NB / 127MM) - 5inch",
                          weight: 113,
                          price: 80
                      },
                      {
                          size: "(125NB / 139.7MM) - 5.5inch",
                          weight: 125,
                          price: 80
                      },
                      {
                          size: "(135NB / 152.4MM) - 6inch",
                          weight: 137,
                          price: 80
                      },
                      {
                          size: "(150NB / 165.1MM) - 6.5inch",
                          weight: 148,
                          price: 80
                      },
                      {
                          size: "(165NB / 172MM) - 6.75inch",
                          weight: 156,
                          price: 80
                      },
                      {
                          size: "(175NB / 193.7MM) - 7.75inch",
                          weight: 175,
                          price: 80
                      },
                      {
                          size: "(200NB / 219.1MM) - 8.75inch",
                          weight: 198,
                          price: 80
                      },
                      {
                          size: "(225NB / 244.5MM) - 9.75inch",
                          weight: 222,
                          price: 80
                      },
                      {
                          size: "(250NB / 273MM) - 10.75inch",
                          weight: 249,
                          price: 80
                      },
                      {
                          size: "(300NB / 323.9MM) - 12.75inch",
                          weight: 296,
                          price: 80
                      },
                      {
                          size: "(350NB / 355.6MM) - 145inch",
                          weight: 326,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "7.1MM-3G",
                  size: [
                      // {
                      //     size: "(15NB / 21.3MM) - 0.75inch",
                      //     weight: 10.5,
                      //     price: 81
                      // },
                      // {
                      //     size: "(20NB / 26.9MM) - 1inch",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(25NB / 33.7MM) - 1.25inch",
                      //     weight: 17.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(32NB / 42.4MM) - 1.5inch",
                      //     weight: 23,
                      //     price: 80
                      // },
                      // {
                      //     size: "(40NB / 48.3MM) - 2inch",
                      //     weight: 32,
                      //     price: 80
                      // },
                      // {
                      //     size: "(50NB / 60.3MM) - 2.5inch",
                      //     weight: 41,
                      //     price: 80
                      // },
                      // {
                      //     size: "(65NB / 76.1MM) - 3inch",
                      //     weight: 53,
                      //     price: 80
                      // },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 86,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 100,
                          price: 80
                      },
                      {
                          size: "(100NB / 114.3MM) - 4.5inch",
                          weight: 113,
                          price: 80
                      },
                      {
                          size: "(110NB / 127MM) - 5inch",
                          weight: 126,
                          price: 80
                      },
                      {
                          size: "(125NB / 139.7MM) - 5.5inch",
                          weight: 140,
                          price: 80
                      },
                      {
                          size: "(135NB / 152.4MM) - 6inch",
                          weight: 155,
                          price: 80
                      },
                      {
                          size: "(150NB / 165.1MM) - 6.5inch",
                          weight: 166,
                          price: 80
                      },
                      {
                          size: "(165NB / 172MM) - 6.75inch",
                          weight: 175,
                          price: 80
                      },
                      {
                          size: "(175NB / 193.7MM) - 7.75inch",
                          weight: 196,
                          price: 80
                      },
                      {
                          size: "(200NB / 219.1MM) - 8.75inch",
                          weight: 223,
                          price: 80
                      },
                      {
                          size: "(225NB / 244.5MM) - 9.75inch",
                          weight: 250,
                          price: 80
                      },
                      {
                          size: "(250NB / 273MM) - 10.75inch",
                          weight: 280,
                          price: 80
                      },
                      {
                          size: "(300NB / 323.9MM) - 12.75inch",
                          weight: 333,
                          price: 80
                      },
                      {
                          size: "(350NB / 355.6MM) - 145inch",
                          weight: 366,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "8MM-2G",
                  size: [
                      // {
                      //     size: "(15NB / 21.3MM) - 0.75inch",
                      //     weight: 10.5,
                      //     price: 81
                      // },
                      // {
                      //     size: "(20NB / 26.9MM) - 1inch",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(25NB / 33.7MM) - 1.25inch",
                      //     weight: 17.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(32NB / 42.4MM) - 1.5inch",
                      //     weight: 23,
                      //     price: 80
                      // },
                      // {
                      //     size: "(40NB / 48.3MM) - 2inch",
                      //     weight: 32,
                      //     price: 80
                      // },
                      // {
                      //     size: "(50NB / 60.3MM) - 2.5inch",
                      //     weight: 41,
                      //     price: 80
                      // },
                      // {
                      //     size: "(65NB / 76.1MM) - 3inch",
                      //     weight: 53,
                      //     price: 80
                      // },
                      {
                          size: "(80NB / 88.9MM) - 3.5inch",
                          weight: 96,
                          price: 80
                      },
                      {
                          size: "(90NB / 101.6MM) - 4inch",
                          weight: 111,
                          price: 80
                      },
                      {
                          size: "(100NB / 114.3MM) - 4.5inch",
                          weight: 126,
                          price: 80
                      },
                      {
                          size: "(110NB / 127MM) - 5inch",
                          weight: 141,
                          price: 80
                      },
                      {
                          size: "(125NB / 139.7MM) - 5.5inch",
                          weight: 156,
                          price: 80
                      },
                      {
                          size: "(135NB / 152.4MM) - 6inch",
                          weight: 186,
                          price: 80
                      },
                      {
                          size: "(150NB / 165.1MM) - 6.5inch",
                          weight: 196,
                          price: 80
                      },
                      {
                          size: "(165NB / 172MM) - 6.75inch",
                          weight: 198,
                          price: 80
                      },
                      {
                          size: "(175NB / 193.7MM) - 7.75inch",
                          weight: 220,
                          price: 80
                      },
                      {
                          size: "(200NB / 219.1MM) - 8.75inch",
                          weight: 250,
                          price: 80
                      },
                      {
                          size: "(225NB / 244.5MM) - 9.75inch",
                          weight: 280,
                          price: 80
                      },
                      {
                          size: "(250NB / 273MM) - 10.75inch",
                          weight: 314,
                          price: 80
                      },
                      {
                          size: "(300NB / 323.9MM) - 12.75inch",
                          weight: 374,
                          price: 80
                      },
                      {
                          size: "(350NB / 355.6MM) - 145inch",
                          weight: 412,
                          price: 80
                      },
                  ]
              },
          ]
      },
      {
          product: "HR SQUARE TUBES",
          productId: '8',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "1.25MM-18G",
                  size: [
                      {
                          size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                          weight: 4.5,
                          price: 81
                      },
                      {
                          size: "(25MM X 26MM)-(1inch X 1inch)",
                          weight: 5.6,
                          price: 80
                      },
                      {
                          size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                          weight: 7,
                          price: 80
                      },
                      {
                          size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                          weight: 8.4,
                          price: 80
                      },
                      {
                          size: "(50MM X 50MM)-(2inch X 2inch)",
                          weight: 11.1,
                          price: 80
                      },
                      // {
                      //     size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      // {
                      //     size: "(72MM X 72MM)-(3inch X 3inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 38.1,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "1.6MM-16G",
                  size: [
                      {
                          size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                          weight: 5.9,
                          price: 81
                      },
                      {
                          size: "(25MM X 26MM)-(1inch X 1inch)",
                          weight: 7.4,
                          price: 80
                      },
                      {
                          size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                          weight: 9.2,
                          price: 80
                      },
                      {
                          size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                          weight: 11,
                          price: 80
                      },
                      {
                          size: "(50MM X 50MM)-(2inch X 2inch)",
                          weight: 14.6,
                          price: 80
                      },
                      {
                          size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                          weight: 17.1,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2MM-14G",
                  size: [
                      {
                          size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                          weight: 7.3,
                          price: 81
                      },
                      {
                          size: "(25MM X 26MM)-(1inch X 1inch)",
                          weight: 9.2,
                          price: 80
                      },
                      {
                          size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                          weight: 11.4,
                          price: 80
                      },
                      {
                          size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                          weight: 13.7,
                          price: 80
                      },
                      {
                          size: "(50MM X 50MM)-(2inch X 2inch)",
                          weight: 18.2,
                          price: 80
                      },
                      {
                          size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                          weight: 22,
                          price: 80
                      },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 26.5,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 33.6,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 37,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.5MM-13G",
                  size: [
                      {
                          size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                          weight: 8.5,
                          price: 81
                      },
                      {
                          size: "(25MM X 26MM)-(1inch X 1inch)",
                          weight: 11,
                          price: 80
                      },
                      {
                          size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                          weight: 13,
                          price: 80
                      },
                      {
                          size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                          weight: 17,
                          price: 80
                      },
                      {
                          size: "(50MM X 50MM)-(2inch X 2inch)",
                          weight: 23,
                          price: 80
                      },
                      {
                          size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                          weight: 28,
                          price: 80
                      },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 32,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 37,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 42,
                          price: 80
                      },
                      {
                          size: "(100MM X 100MM)-(4inch X 4inch)",
                          weight: 46,
                          price: 80
                      },
                      {
                          size: "(113MM X 113MM)-(4.5inch X 4.5inch)",
                          weight: 51,
                          price: 80
                      },
                      {
                          size: "(132MM X 132MM)-(5inch X 5inch)",
                          weight: 62,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.65MM-12G",
                  size: [
                      {
                          size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                          weight: 9.3,
                          price: 81
                      },
                      {
                          size: "(25MM X 26MM)-(1inch X 1inch)",
                          weight: 11.2,
                          price: 80
                      },
                      {
                          size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                          weight: 13.7,
                          price: 80
                      },
                      {
                          size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                          weight: 17.6,
                          price: 80
                      },
                      {
                          size: "(50MM X 50MM)-(2inch X 2inch)",
                          weight: 23.4,
                          price: 80
                      },
                      {
                          size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                          weight: 28.3,
                          price: 80
                      },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 34.2,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 38.1,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 43.4,
                          price: 80
                      },
                      {
                          size: "(100MM X 100MM)-(4inch X 4inch)",
                          weight: 47.8,
                          price: 80
                      },
                      {
                          size: "(113MM X 113MM)-(4.5inch X 4.5inch)",
                          weight: 54.2,
                          price: 80
                      },
                      {
                          size: "(132MM X 132MM)-(5inch X 5inch)",
                          weight: 63.5,
                          price: 80
                      },
                      {
                          size: "(150MM X 500MM)-(6inch X 6inch)",
                          weight: 72.3,
                          price: 80
                      },
                      {
                          size: "(180MM X 180MM)-(7inch X 7inch)",
                          weight: 86.9,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.9MM-11G",
                  size: [
                      {
                          size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                          weight: 10.2,
                          price: 81
                      },
                      {
                          size: "(25MM X 26MM)-(1inch X 1inch)",
                          weight: 12.4,
                          price: 80
                      },
                      {
                          size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                          weight: 15.1,
                          price: 80
                      },
                      {
                          size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                          weight: 19.5,
                          price: 80
                      },
                      {
                          size: "(50MM X 50MM)-(2inch X 2inch)",
                          weight: 26,
                          price: 80
                      },
                      {
                          size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                          weight: 31.4,
                          price: 80
                      },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 38,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 42.3,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 48.3,
                          price: 80
                      },
                      {
                          size: "(100MM X 100MM)-(4inch X 4inch)",
                          weight: 53.2,
                          price: 80
                      },
                      {
                          size: "(113MM X 113MM)-(4.5inch X 4.5inch)",
                          weight: 60.3,
                          price: 80
                      },
                      {
                          size: "(132MM X 132MM)-(5inch X 5inch)",
                          weight: 70.7,
                          price: 80
                      },
                      {
                          size: "(150MM X 500MM)-(6inch X 6inch)",
                          weight: 80.5,
                          price: 80
                      },
                      {
                          size: "(180MM X 180MM)-(7inch X 7inch)",
                          weight: 96.8,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "3.25MM-10G",
                  size: [
                      {
                          size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                          weight: 11.1,
                          price: 81
                      },
                      {
                          size: "(25MM X 26MM)-(1inch X 1inch)",
                          weight: 13.5,
                          price: 80
                      },
                      {
                          size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                          weight: 16.5,
                          price: 80
                      },
                      {
                          size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                          weight: 21.3,
                          price: 80
                      },
                      {
                          size: "(50MM X 50MM)-(2inch X 2inch)",
                          weight: 28.5,
                          price: 80
                      },
                      {
                          size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                          weight: 34.6,
                          price: 80
                      },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 41.8,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 46.6,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 53.2,
                          price: 80
                      },
                      {
                          size: "(100MM X 100MM)-(4inch X 4inch)",
                          weight: 58.6,
                          price: 80
                      },
                      {
                          size: "(113MM X 113MM)-(4.5inch X 4.5inch)",
                          weight: 66.4,
                          price: 80
                      },
                      {
                          size: "(132MM X 132MM)-(5inch X 5inch)",
                          weight: 77.8,
                          price: 80
                      },
                      {
                          size: "(150MM X 500MM)-(6inch X 6inch)",
                          weight: 88.7,
                          price: 80
                      },
                      {
                          size: "(180MM X 180MM)-(7inch X 7inch)",
                          weight: 107,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "3.6MM-9G",
                  size: [
                      // {
                      //     size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                      //     weight: 11.1,
                      //     price: 81
                      // },
                      // {
                      //     size: "(25MM X 26MM)-(1inch X 1inch)",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      {
                          size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                          weight: 18.4,
                          price: 80
                      },
                      {
                          size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                          weight: 23.8,
                          price: 80
                      },
                      {
                          size: "(50MM X 50MM)-(2inch X 2inch)",
                          weight: 31.9,
                          price: 80
                      },
                      {
                          size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                          weight: 38.7,
                          price: 80
                      },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 46.8,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 52.2,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 59.6,
                          price: 80
                      },
                      {
                          size: "(100MM X 100MM)-(4inch X 4inch)",
                          weight: 65.7,
                          price: 80
                      },
                      {
                          size: "(113MM X 113MM)-(4.5inch X 4.5inch)",
                          weight: 74.5,
                          price: 80
                      },
                      {
                          size: "(132MM X 132MM)-(5inch X 5inch)",
                          weight: 87.4,
                          price: 80
                      },
                      {
                          size: "(150MM X 500MM)-(6inch X 6inch)",
                          weight: 99.5,
                          price: 80
                      },
                      {
                          size: "(180MM X 180MM)-(7inch X 7inch)",
                          weight: 119.8,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "4MM-8G",
                  size: [
                      // {
                      //     size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                      //     weight: 11.1,
                      //     price: 81
                      // },
                      // {
                      //     size: "(25MM X 26MM)-(1inch X 1inch)",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      {
                          size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                          weight: 20.2,
                          price: 80
                      },
                      {
                          size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                          weight: 26.2,
                          price: 80
                      },
                      {
                          size: "(50MM X 50MM)-(2inch X 2inch)",
                          weight: 35.2,
                          price: 80
                      },
                      {
                          size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                          weight: 42.7,
                          price: 80
                      },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 51.7,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 57.7,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 66,
                          price: 80
                      },
                      {
                          size: "(100MM X 100MM)-(4inch X 4inch)",
                          weight: 72.8,
                          price: 80
                      },
                      {
                          size: "(113MM X 113MM)-(4.5inch X 4.5inch)",
                          weight: 82.5,
                          price: 80
                      },
                      {
                          size: "(132MM X 132MM)-(5inch X 5inch)",
                          weight: 96.8,
                          price: 80
                      },
                      {
                          size: "(150MM X 500MM)-(6inch X 6inch)",
                          weight: 110.3,
                          price: 80
                      },
                      {
                          size: "(180MM X 180MM)-(7inch X 7inch)",
                          weight: 132,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "4.5MM-7.5G",
                  size: [
                      // {
                      //     size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                      //     weight: 11.1,
                      //     price: 81
                      // },
                      // {
                      //     size: "(25MM X 26MM)-(1inch X 1inch)",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      {
                          size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                          weight: 26,
                          price: 80
                      },
                      {
                          size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                          weight: 29,
                          price: 80
                      },
                      {
                          size: "(50MM X 50MM)-(2inch X 2inch)",
                          weight: 40,
                          price: 80
                      },
                      {
                          size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                          weight: 48,
                          price: 80
                      },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 57.9,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 64.6,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 73.9,
                          price: 80
                      },
                      {
                          size: "(100MM X 100MM)-(4inch X 4inch)",
                          weight: 81.5,
                          price: 80
                      },
                      {
                          size: "(113MM X 113MM)-(4.5inch X 4.5inch)",
                          weight: 92.5,
                          price: 80
                      },
                      {
                          size: "(132MM X 132MM)-(5inch X 5inch)",
                          weight: 109,
                          price: 80
                      },
                      {
                          size: "(150MM X 500MM)-(6inch X 6inch)",
                          weight: 124,
                          price: 80
                      },
                      {
                          size: "(180MM X 180MM)-(7inch X 7inch)",
                          weight: 149,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "4.85MM-7G",
                  size: [
                      // {
                      //     size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                      //     weight: 11.1,
                      //     price: 81
                      // },
                      // {
                      //     size: "(25MM X 26MM)-(1inch X 1inch)",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      {
                          size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                          weight: 27,
                          price: 80
                      },
                      {
                          size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                          weight: 33,
                          price: 80
                      },
                      {
                          size: "(50MM X 50MM)-(2inch X 2inch)",
                          weight: 42,
                          price: 80
                      },
                      {
                          size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                          weight: 52,
                          price: 80
                      },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 62.1,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 69.4,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 79.4,
                          price: 80
                      },
                      {
                          size: "(100MM X 100MM)-(4inch X 4inch)",
                          weight: 88,
                          price: 80
                      },
                      {
                          size: "(113MM X 113MM)-(4.5inch X 4.5inch)",
                          weight: 100,
                          price: 80
                      },
                      {
                          size: "(132MM X 132MM)-(5inch X 5inch)",
                          weight: 117,
                          price: 80
                      },
                      {
                          size: "(150MM X 500MM)-(6inch X 6inch)",
                          weight: 133,
                          price: 80
                      },
                      {
                          size: "(180MM X 180MM)-(7inch X 7inch)",
                          weight: 161,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "5MM-6G",
                  size: [
                      // {
                      //     size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                      //     weight: 11.1,
                      //     price: 81
                      // },
                      // {
                      //     size: "(25MM X 26MM)-(1inch X 1inch)",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      {
                          size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                          weight: 28,
                          price: 80
                      },
                      {
                          size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                          weight: 34,
                          price: 80
                      },
                      {
                          size: "(50MM X 50MM)-(2inch X 2inch)",
                          weight: 43,
                          price: 80
                      },
                      {
                          size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                          weight: 53,
                          price: 80
                      },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 62,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 72,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 81,
                          price: 80
                      },
                      {
                          size: "(100MM X 100MM)-(4inch X 4inch)",
                          weight: 90.2,
                          price: 80
                      },
                      {
                          size: "(113MM X 113MM)-(4.5inch X 4.5inch)",
                          weight: 102.4,
                          price: 80
                      },
                      {
                          size: "(132MM X 132MM)-(5inch X 5inch)",
                          weight: 120.3,
                          price: 80
                      },
                      {
                          size: "(150MM X 500MM)-(6inch X 6inch)",
                          weight: 137.2,
                          price: 80
                      },
                      {
                          size: "(180MM X 180MM)-(7inch X 7inch)",
                          weight: 165.4,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "5.5MM-5G",
                  size: [
                      // {
                      //     size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                      //     weight: 11.1,
                      //     price: 81
                      // },
                      // {
                      //     size: "(25MM X 26MM)-(1inch X 1inch)",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                      //     weight: 28,
                      //     price: 80
                      // },
                      // {
                      //     size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                      //     weight: 34,
                      //     price: 80
                      // },
                      // {
                      //     size: "(50MM X 50MM)-(2inch X 2inch)",
                      //     weight: 43,
                      //     price: 80
                      // },
                      // {
                      //     size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                      //     weight: 53,
                      //     price: 80
                      // },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 69,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 80,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 90,
                          price: 80
                      },
                      {
                          size: "(100MM X 100MM)-(4inch X 4inch)",
                          weight: 100,
                          price: 80
                      },
                      {
                          size: "(113MM X 113MM)-(4.5inch X 4.5inch)",
                          weight: 111,
                          price: 80
                      },
                      {
                          size: "(132MM X 132MM)-(5inch X 5inch)",
                          weight: 132,
                          price: 80
                      },
                      {
                          size: "(150MM X 500MM)-(6inch X 6inch)",
                          weight: 156,
                          price: 80
                      },
                      {
                          size: "(180MM X 180MM)-(7inch X 7inch)",
                          weight: 182,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "6MM-4.5G",
                  size: [
                      // {
                      //     size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                      //     weight: 11.1,
                      //     price: 81
                      // },
                      // {
                      //     size: "(25MM X 26MM)-(1inch X 1inch)",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                      //     weight: 28,
                      //     price: 80
                      // },
                      // {
                      //     size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                      //     weight: 34,
                      //     price: 80
                      // },
                      // {
                      //     size: "(50MM X 50MM)-(2inch X 2inch)",
                      //     weight: 43,
                      //     price: 80
                      // },
                      // {
                      //     size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                      //     weight: 53,
                      //     price: 80
                      // },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 74,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 85,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 96,
                          price: 80
                      },
                      {
                          size: "(100MM X 100MM)-(4inch X 4inch)",
                          weight: 107,
                          price: 80
                      },
                      {
                          size: "(113MM X 113MM)-(4.5inch X 4.5inch)",
                          weight: 119,
                          price: 80
                      },
                      {
                          size: "(132MM X 132MM)-(5inch X 5inch)",
                          weight: 141,
                          price: 80
                      },
                      {
                          size: "(150MM X 500MM)-(6inch X 6inch)",
                          weight: 167,
                          price: 80
                      },
                      {
                          size: "(180MM X 180MM)-(7inch X 7inch)",
                          weight: 189,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "6.3MM-4G",
                  size: [
                      // {
                      //     size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                      //     weight: 11.1,
                      //     price: 81
                      // },
                      // {
                      //     size: "(25MM X 26MM)-(1inch X 1inch)",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                      //     weight: 28,
                      //     price: 80
                      // },
                      // {
                      //     size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                      //     weight: 34,
                      //     price: 80
                      // },
                      // {
                      //     size: "(50MM X 50MM)-(2inch X 2inch)",
                      //     weight: 43,
                      //     price: 80
                      // },
                      // {
                      //     size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                      //     weight: 53,
                      //     price: 80
                      // },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 77,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 89,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 101,
                          price: 80
                      },
                      {
                          size: "(100MM X 100MM)-(4inch X 4inch)",
                          weight: 113,
                          price: 80
                      },
                      {
                          size: "(113MM X 113MM)-(4.5inch X 4.5inch)",
                          weight: 124,
                          price: 80
                      },
                      {
                          size: "(132MM X 132MM)-(5inch X 5inch)",
                          weight: 148,
                          price: 80
                      },
                      {
                          size: "(150MM X 500MM)-(6inch X 6inch)",
                          weight: 175,
                          price: 80
                      },
                      {
                          size: "(180MM X 180MM)-(7inch X 7inch)",
                          weight: 207,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "7.1MM-3G",
                  size: [
                      // {
                      //     size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                      //     weight: 11.1,
                      //     price: 81
                      // },
                      // {
                      //     size: "(25MM X 26MM)-(1inch X 1inch)",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                      //     weight: 28,
                      //     price: 80
                      // },
                      // {
                      //     size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                      //     weight: 34,
                      //     price: 80
                      // },
                      // {
                      //     size: "(50MM X 50MM)-(2inch X 2inch)",
                      //     weight: 43,
                      //     price: 80
                      // },
                      // {
                      //     size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                      //     weight: 53,
                      //     price: 80
                      // },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 86,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 99,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 113,
                          price: 80
                      },
                      {
                          size: "(100MM X 100MM)-(4inch X 4inch)",
                          weight: 126,
                          price: 80
                      },
                      {
                          size: "(113MM X 113MM)-(4.5inch X 4.5inch)",
                          weight: 140,
                          price: 80
                      },
                      {
                          size: "(132MM X 132MM)-(5inch X 5inch)",
                          weight: 166,
                          price: 80
                      },
                      {
                          size: "(150MM X 500MM)-(6inch X 6inch)",
                          weight: 196,
                          price: 80
                      },
                      {
                          size: "(180MM X 180MM)-(7inch X 7inch)",
                          weight: 133,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "8MM-2G",
                  size: [
                      // {
                      //     size: "(21MM X 21MM)-(0.75inch X 0.75inch)",
                      //     weight: 11.1,
                      //     price: 81
                      // },
                      // {
                      //     size: "(25MM X 26MM)-(1inch X 1inch)",
                      //     weight: 13.5,
                      //     price: 80
                      // },
                      // {
                      //     size: "(30MM X 32MM)-(1.25inch X 1.25inch)",
                      //     weight: 28,
                      //     price: 80
                      // },
                      // {
                      //     size: "(38MM X 38MM)-(1.5inch X 1.5inch)",
                      //     weight: 34,
                      //     price: 80
                      // },
                      // {
                      //     size: "(50MM X 50MM)-(2inch X 2inch)",
                      //     weight: 43,
                      //     price: 80
                      // },
                      // {
                      //     size: "(60MM X 60MM)-(2.5inch X 2.5inch)",
                      //     weight: 53,
                      //     price: 80
                      // },
                      {
                          size: "(72MM X 72MM)-(3inch X 3inch)",
                          weight: 96,
                          price: 80
                      },
                      {
                          size: "(80MM X 80MM)-(3.2inch X 3.2inch)",
                          weight: 111,
                          price: 80
                      },
                      {
                          size: "(91MM X 91MM)-(3.5inch X 3.5inch)",
                          weight: 126,
                          price: 80
                      },
                      {
                          size: "(100MM X 100MM)-(4inch X 4inch)",
                          weight: 141,
                          price: 80
                      },
                      {
                          size: "(113MM X 113MM)-(4.5inch X 4.5inch)",
                          weight: 156,
                          price: 80
                      },
                      {
                          size: "(132MM X 132MM)-(5inch X 5inch)",
                          weight: 186,
                          price: 80
                      },
                      {
                          size: "(150MM X 500MM)-(6inch X 6inch)",
                          weight: 220,
                          price: 80
                      },
                      {
                          size: "(180MM X 180MM)-(7inch X 7inch)",
                          weight: 261,
                          price: 80
                      },
                  ]
              },
          ]
      },
      {
          product: "HR RECTANGLE TUBES",
          productId: '9',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "1.25MM-18G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 6.5,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 8.2,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 11.1,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 11.1,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 13.3,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "1.6MM-16G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 8.6,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 10.9,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 14.6,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 15,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 17.7,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 21.3,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 22.2,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2MM-14G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 10.7,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 13.5,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 18.2,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 18.2,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 22,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 26.5,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 27.6,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 34,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.5MM-13G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 13.2,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 17,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 22.6,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 22.6,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 27.3,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 32,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 34.5,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 42,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.65MM-12G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 13.7,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 17.3,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 23.4,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 23.5,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 28.3,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 34.2,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 35.6,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 44,
                          price: 80
                      },
                      {
                          size: "(145MM X 82MM)-(6inch X 3inch)",
                          weight: 54.4,
                          price: 80
                      },
                      {
                          size: "(172MM X 92MM)-(6.5inch X 3.5inch)",
                          weight: 63.5,
                          price: 80
                      },
                      {
                          size: "(200MM X 100MM)-(8inch X 4inch)",
                          weight: 72.3,
                          price: 80
                      },
                      // {
                      //     size: "(200MM X 150MM)-(8inch X 6inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      {
                          size: "(240MM X 120MM)-(10inch X 6inch)",
                          weight: 86.9,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "2.65MM-11G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 15.1,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 19.2,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 26,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 26,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 31.4,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 38,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 39.6,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 49,
                          price: 80
                      },
                      {
                          size: "(145MM X 82MM)-(6inch X 3inch)",
                          weight: 60.6,
                          price: 80
                      },
                      {
                          size: "(172MM X 92MM)-(6.5inch X 3.5inch)",
                          weight: 70.7,
                          price: 80
                      },
                      {
                          size: "(200MM X 100MM)-(8inch X 4inch)",
                          weight: 80.5,
                          price: 80
                      },
                      // {
                      //     size: "(200MM X 150MM)-(8inch X 6inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      {
                          size: "(240MM X 120MM)-(10inch X 6inch)",
                          weight: 96.8,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "3.25MM-10G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 16.5,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 21,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 28.5,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 28.5,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 34.6,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 41.8,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 43.6,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 54,
                          price: 80
                      },
                      {
                          size: "(145MM X 82MM)-(6inch X 3inch)",
                          weight: 66.7,
                          price: 80
                      },
                      {
                          size: "(172MM X 92MM)-(6.5inch X 3.5inch)",
                          weight: 77.8,
                          price: 80
                      },
                      {
                          size: "(200MM X 100MM)-(8inch X 4inch)",
                          weight: 88.7,
                          price: 80
                      },
                      // {
                      //     size: "(200MM X 150MM)-(8inch X 6inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      {
                          size: "(240MM X 120MM)-(10inch X 6inch)",
                          weight: 107,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "3.6MM-9G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 18.4,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 23.4,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 31.9,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 31.9,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 38.7,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 46.8,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 48.8,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 60,
                          price: 80
                      },
                      {
                          size: "(145MM X 82MM)-(6inch X 3inch)",
                          weight: 74.8,
                          price: 80
                      },
                      {
                          size: "(172MM X 92MM)-(6.5inch X 3.5inch)",
                          weight: 87.4,
                          price: 80
                      },
                      {
                          size: "(200MM X 100MM)-(8inch X 4inch)",
                          weight: 99.5,
                          price: 80
                      },
                      // {
                      //     size: "(200MM X 150MM)-(8inch X 6inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      {
                          size: "(240MM X 120MM)-(10inch X 6inch)",
                          weight: 119.8,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "4MM-8G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 20.2,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 25.8,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 35.2,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 35.2,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 42.7,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 51.7,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 54,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 67,
                          price: 80
                      },
                      {
                          size: "(145MM X 82MM)-(6inch X 3inch)",
                          weight: 82.9,
                          price: 80
                      },
                      {
                          size: "(172MM X 92MM)-(6.5inch X 3.5inch)",
                          weight: 96.8,
                          price: 80
                      },
                      {
                          size: "(200MM X 100MM)-(8inch X 4inch)",
                          weight: 110.3,
                          price: 80
                      },
                      // {
                      //     size: "(200MM X 150MM)-(8inch X 6inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      {
                          size: "(240MM X 120MM)-(10inch X 6inch)",
                          weight: 132.9,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "4.5MM-7.5G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 22.4,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 28.7,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 39.3,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 39.3,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 47.7,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 57.9,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 60.4,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 75,
                          price: 80
                      },
                      {
                          size: "(145MM X 82MM)-(6inch X 3inch)",
                          weight: 93,
                          price: 80
                      },
                      {
                          size: "(172MM X 92MM)-(6.5inch X 3.5inch)",
                          weight: 109,
                          price: 80
                      },
                      {
                          size: "(200MM X 100MM)-(8inch X 4inch)",
                          weight: 124,
                          price: 80
                      },
                      // {
                      //     size: "(200MM X 150MM)-(8inch X 6inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      {
                          size: "(240MM X 120MM)-(10inch X 6inch)",
                          weight: 149,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "4.85MM-7G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 23.9,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 30.7,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 42.1,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 42.1,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 51.2,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 62.1,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 64.9,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 80,
                          price: 80
                      },
                      {
                          size: "(145MM X 82MM)-(6inch X 3inch)",
                          weight: 99.9,
                          price: 80
                      },
                      {
                          size: "(172MM X 92MM)-(6.5inch X 3.5inch)",
                          weight: 117,
                          price: 80
                      },
                      {
                          size: "(200MM X 100MM)-(8inch X 4inch)",
                          weight: 133,
                          price: 80
                      },
                      // {
                      //     size: "(200MM X 150MM)-(8inch X 6inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      {
                          size: "(240MM X 120MM)-(10inch X 6inch)",
                          weight: 161,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "4.85MM-6G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 24.5,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 31.5,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 43.3,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 43.3,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 52.7,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 63.9,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 66.7,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 83,
                          price: 80
                      },
                      {
                          size: "(145MM X 82MM)-(6inch X 3inch)",
                          weight: 102.9,
                          price: 80
                      },
                      {
                          size: "(172MM X 92MM)-(6.5inch X 3.5inch)",
                          weight: 120.3,
                          price: 80
                      },
                      {
                          size: "(200MM X 100MM)-(8inch X 4inch)",
                          weight: 137.2,
                          price: 80
                      },
                      // {
                      //     size: "(200MM X 150MM)-(8inch X 6inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      {
                          size: "(240MM X 120MM)-(10inch X 6inch)",
                          weight: 165.4,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "5.5MM-5G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 27,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 34,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 47,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 47,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 58,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 70,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 73,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 90,
                          price: 80
                      },
                      {
                          size: "(145MM X 82MM)-(6inch X 3inch)",
                          weight: 113,
                          price: 80
                      },
                      {
                          size: "(172MM X 92MM)-(6.5inch X 3.5inch)",
                          weight: 132,
                          price: 80
                      },
                      {
                          size: "(200MM X 100MM)-(8inch X 4inch)",
                          weight: 156,
                          price: 80
                      },
                      // {
                      //     size: "(200MM X 150MM)-(8inch X 6inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      {
                          size: "(240MM X 120MM)-(10inch X 6inch)",
                          weight: 182,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "6MM-4.5G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 30,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 39,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 53,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 53,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 65,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 73.6,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 82,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 96,
                          price: 80
                      },
                      {
                          size: "(145MM X 82MM)-(6inch X 3inch)",
                          weight: 119,
                          price: 80
                      },
                      {
                          size: "(172MM X 92MM)-(6.5inch X 3.5inch)",
                          weight: 141,
                          price: 80
                      },
                      {
                          size: "(200MM X 100MM)-(8inch X 4inch)",
                          weight: 167,
                          price: 80
                      },
                      // {
                      //     size: "(200MM X 150MM)-(8inch X 6inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      {
                          size: "(240MM X 120MM)-(10inch X 6inch)",
                          weight: 189,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "6.3MM-4G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 30,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 39,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 53,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 53,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 65,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 79,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 83,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 103,
                          price: 80
                      },
                      {
                          size: "(145MM X 82MM)-(6inch X 3inch)",
                          weight: 129,
                          price: 80
                      },
                      {
                          size: "(172MM X 92MM)-(6.5inch X 3.5inch)",
                          weight: 150,
                          price: 80
                      },
                      {
                          size: "(200MM X 100MM)-(8inch X 4inch)",
                          weight: 175,
                          price: 80
                      },
                      // {
                      //     size: "(200MM X 150MM)-(8inch X 6inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      {
                          size: "(240MM X 120MM)-(10inch X 6inch)",
                          weight: 207,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "6.3MM-3G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 33,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 43,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 59,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 59,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 73,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 89,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 93,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 115,
                          price: 80
                      },
                      {
                          size: "(145MM X 82MM)-(6inch X 3inch)",
                          weight: 144,
                          price: 80
                      },
                      {
                          size: "(172MM X 92MM)-(6.5inch X 3.5inch)",
                          weight: 169,
                          price: 80
                      },
                      {
                          size: "(200MM X 100MM)-(8inch X 4inch)",
                          weight: 196,
                          price: 80
                      },
                      // {
                      //     size: "(200MM X 150MM)-(8inch X 6inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      {
                          size: "(240MM X 120MM)-(10inch X 6inch)",
                          weight: 233,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "8MM-2G",
                  size: [
                      {
                          size: "(40MM X 20MM)-(1.5inch X 0.75inch)",
                          weight: 36,
                          price: 81
                      },
                      {
                          size: "(50MM X 25MM)-(2inch X 1inch)",
                          weight: 47,
                          price: 80
                      },
                      {
                          size: "(60MM X 40MM)-(2.5inch X 1.5inch)",
                          weight: 66,
                          price: 80
                      },
                      {
                          size: "(75MM X 25MM)-(3inch X 1inch)",
                          weight: 66,
                          price: 80
                      },
                      {
                          size: "(80MM X 40MM)-(3inch X 1.5inch)",
                          weight: 81,
                          price: 80
                      },
                      {
                          size: "(96MM X 48MM)-(4inch X 2inch)",
                          weight: 99,
                          price: 80
                      },
                      {
                          size: "(100MM X 50MM)-(4inch X 2inch)",
                          weight: 103,
                          price: 80
                      },
                      {
                          size: "(125MM X 65MM)-(5inch X 2.5inch)",
                          weight: 128,
                          price: 80
                      },
                      {
                          size: "(145MM X 82MM)-(6inch X 3inch)",
                          weight: 161,
                          price: 80
                      },
                      {
                          size: "(172MM X 92MM)-(6.5inch X 3.5inch)",
                          weight: 189,
                          price: 80
                      },
                      {
                          size: "(200MM X 100MM)-(8inch X 4inch)",
                          weight: 220,
                          price: 80
                      },
                      // {
                      //     size: "(200MM X 150MM)-(8inch X 6inch)",
                      //     weight:2.9,
                      //     price: 80
                      // },
                      {
                          size: "(240MM X 120MM)-(10inch X 6inch)",
                          weight: 261,
                          price: 80
                      },
                  ]
              },
          ]
      },
      {
          product: "M S ANGLES",
          productId: '11',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "3MM",
                  size: [
                      {
                          size: "(19MM X 19MM X 3MM)",
                          weight: 5.5,
                          price: 57.2
                      },
                      {
                          size: "(25MM X 25MM X 3MM)",
                          weight: 6.6,
                          price: 57.2
                      },
                      {
                          size: "(32MM X 32MM X 3MM)",
                          weight: 8.6,
                          price: 57.2
                      },
                      {
                          size: "(37MM X 37MM X 3MM)",
                          weight: 10.5,
                          price: 57.2
                      },
                  ]
              },
              {
                  guage: "4MM",
                  size: [
                      {
                          size: "(25MM X 25MM X 4MM)",
                          weight: 8.5,
                          price: 56.2
                      },
                      {
                          size: "(35MM X 35MM X 4MM)",
                          weight: 12.8,
                          price: 56.2
                      },
                      {
                          size: "(40MM X 40MM X 4MM)",
                          weight: 14.6,
                          price: 56.2
                      },
                      {
                          size: "(45MM X 45MM X 4MM)",
                          weight: 16.5,
                          price: 56.2
                      },
                      {
                          size: "(50MM X 50MM X 4MM)",
                          weight: 18.3,
                          price: 56.2
                      },
                      {
                          size: "(65MM X 65MM X 4MM)",
                          weight: 28,
                          price: 56.2
                      }
                  ]
              },
              {
                  guage: "5MM",
                  size: [
                      {
                          size: "(25MM X 25MM X 5MM)",
                          weight: 11,
                          price: 56.2
                      },
                      {
                          size: "(35MM X 35MM X 5MM)",
                          weight: 15.9,
                          price: 56.2
                      },
                      {
                          size: "(40MM X 40MM X 5MM)",
                          weight: 18.3,
                          price: 56.2
                      },
                      {
                          size: "(50MM X 50MM X 5MM)",
                          weight: 23,
                          price: 56.2
                      },
                      {
                          size: "(65MM X 65MM X 5MM)",
                          weight: 30,
                          price: 56.2
                      },
                      {
                          size: "(75MM X 75MM X 5MM)",
                          weight: 35,
                          price: 56.2
                      }
                  ]
              },
              {
                  guage: "6MM",
                  size: [
                      {
                          size: "(40MM X 40MM X 6MM)",
                          weight: 21.3,
                          price: 56.2
                      },
                      {
                          size: "(50MM X 50MM X 6MM)",
                          weight: 27.5,
                          price: 56.2
                      },
                      {
                          size: "(65MM X 65MM X 6MM)",
                          weight: 35,
                          price: 56.2
                      },
                      {
                          size: "(75MM X 75MM X 6MM)",
                          weight: 41.5,
                          price: 56.2
                      },
                      {
                          size: "(100MM X 100MM X 6MM)",
                          weight: 56,
                          price: 57.2
                      }
                  ]
              },
              {
                  guage: "8MM",
                  size: [
                      {
                          size: "(65MM X 65MM X 8MM)",
                          weight: 47,
                          price: 57.2
                      },
                  ]
              },
          ]
      },
      {
          product: "M S FLATS",
          productId: '12',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "3MM",
                  size: [
                      {
                          size: "(12MM X 3MM)",
                          weight: 2.3,
                          price: 81
                      },
                      {
                          size: "(19MM X 3MM)",
                          weight: 2.5,
                          price: 81
                      },
                      {
                          size: "(25MM X 3MM)",
                          weight: 4,
                          price: 81
                      },
                      {
                          size: "(32MM X 3MM)",
                          weight: 5,
                          price: 81
                      },
                      {
                          size: "(40MM X 3MM)",
                          weight: 6.2,
                          price: 81
                      },
                  ]
              },
              {
                  guage: "4MM",
                  size: [
                      {
                          size: "(19MM X 4MM)",
                          weight: 3.75,
                          price: 81
                      },
                  ]
              },
              {
                  guage: "5MM",
                  size: [
                      {
                          size: "(12MM X 5MM)",
                          weight: 4.1,
                          price: 81
                      },
                      {
                          size: "(19MM X 5MM)",
                          weight: 5,
                          price: 81
                      },
                      {
                          size: "(25MM X 5MM)",
                          weight: 5.5,
                          price: 81
                      },
                      {
                          size: "(32MM X 5MM)",
                          weight: 6.5,
                          price: 81
                      },
                      {
                          size: "(40MM X 5MM)",
                          weight: 8,
                          price: 81
                      },
                      {
                          size: "(50MM X 5MM)",
                          weight: 11,
                          price: 81
                      },
                      {
                          size: "(65MM X 5MM)",
                          weight: 15.5,
                          price: 81
                      },
                      {
                          size: "(75MM X 5MM)",
                          weight: 17,
                          price: 81
                      }
                  ]
              },
              {
                  guage: "6MM",
                  size: [
                      {
                          size: "(25MM X 6MM)",
                          weight: 6.5,
                          price: 81
                      },
                      {
                          size: "(50MM X 6MM)",
                          weight: 14,
                          price: 81
                      },
                      {
                          size: "(65MM X 6MM)",
                          weight: 17,
                          price: 81
                      },
                      {
                          size: "(75MM X 75MM X 6MM)",
                          weight: 41.5,
                          price: 81
                      },
                  ]
              },
              {
                  guage: "8MM",
                  size: [
                      {
                          size: "(40MM X 8MM)",
                          weight: 14,
                          price: 81
                      },
                      {
                          size: "(50MM X 8MM)",
                          weight: 17,
                          price: 81
                      },
                      {
                          size: "(150MM X 8MM)",
                          weight: 55,
                          price: 81
                      },
                  ]
              },
              {
                  guage: "10MM",
                  size: [
                      {
                          size: "(40MM X 10MM)",
                          weight: 19,
                          price: 81
                      },
                      {
                          size: "(50MM X 10MM)",
                          weight: 23,
                          price: 81
                      },
                      {
                          size: "(100MM X 10MM) ",
                          weight: 43,
                          price: 81
                      },
                  ]
              },
              {
                  guage: "12MM",
                  size: [
                      {
                          size: "(40MM X 12MM)",
                          weight: 22,
                          price: 81
                      },
                      {
                          size: "(50MM X 12MM)",
                          weight: 28,
                          price: 81
                      },
                      {
                          size: "(65MM X 12MM)",
                          weight: 36,
                          price: 81
                      },
                      {
                          size: "(100MM X 12MM) ",
                          weight: 56,
                          price: 81
                      },
                      {
                          size: "(150MM X 12MM) ",
                          weight: 84,
                          price: 81
                      },
                  ]
              }, {
                  guage: "16MM",
                  size: [
                      {
                          size: "(50MM X 16MM)",
                          weight: 35,
                          price: 81
                      },
                      {
                          size: "(75MM X 16MM)",
                          weight: 57,
                          price: 81
                      },
                      {
                          size: "(100MM X 16MM) ",
                          weight: 69,
                          price: 81
                      },
                  ]
              }
          ]
      },
      {
          product: "M S SQUARE RODS",
          productId: '13',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "Weight and Gauage /feet",
                  size: [
                      {
                          size: "5MM-0.2G",
                          weight: 0.06,
                          price: 81
                      },
                      {
                          size: "5.5MM-0.24G",
                          weight: 0.07,
                          price: 81
                      },
                      {
                          size: "6MM-0.28G",
                          weight: 0.09,
                          price: 81
                      },
                      {
                          size: "7MM-0.38G",
                          weight: 0.12,
                          price: 81
                      },
                      {
                          size: "8MM-0.55G",
                          weight: 0.15,
                          price: 81
                      },
                      {
                          size: "9MM-0.64G",
                          weight: 0.2,
                          price: 81
                      },
                      {
                          size: "10MM-0.73G",
                          weight: 0.22,
                          price: 80
                      },
                      {
                          size: "11MM-0.95G",
                          weight: 0.29,
                          price: 80
                      },
                      {
                          size: "12MM-1.13G",
                          weight: 0.34,
                          price: 80
                      },
                      {
                          size: "14MM-1.54G",
                          weight: 0.47,
                          price: 80
                      },
                      {
                          size: "16MM-2.01G",
                          weight: 0.61,
                          price: 80
                      },
                      {
                          size: "18MM-2.54G",
                          weight: 0.77,
                          price: 80
                      },
                      {
                          size: "20MM-3.14G",
                          weight: 0.96,
                          price: 80
                      },
                      {
                          size: "22MM-3.8G",
                          weight: 1.16,
                          price: 80
                      },
                      {
                          size: "25MM-4.91G",
                          weight: 1.50,
                          price: 80
                      },
                      {
                          size: "28MM-6.15G",
                          weight: 1.88,
                          price: 80
                      },
                      {
                          size: "32MM-8.04G",
                          weight: 2.45,
                          price: 80
                      },
                      {
                          size: "36MM-10.17G",
                          weight: 3.10,
                          price: 80
                      },
                      {
                          size: "40MM-12.56G",
                          weight: 3.83,
                          price: 80
                      },
                      {
                          size: "45MM-15.9G",
                          weight: 4.85,
                          price: 80
                      },
                      {
                          size: "50MM-19.62G",
                          weight: 5.98,
                          price: 80
                      },
                      {
                          size: "56MM-24.62G",
                          weight: 7.51,
                          price: 80
                      },
                      {
                          size: "63MM-31.16G",
                          weight: 9.50,
                          price: 80
                      },
                      {
                          size: "71MM-39.57G",
                          weight: 12.06,
                          price: 80
                      },
                      {
                          size: "80MM-50.24G",
                          weight: 15.32,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "Weight and Gauage / 20 feet - 6 Meter",
                  size: [
                      {
                          size: "5MM-0.2G",
                          weight: 1.2,
                          price: 81
                      },
                      {
                          size: "5.5MM-0.24G",
                          weight: 1.4,
                          price: 81
                      },
                      {
                          size: "6MM-0.28G",
                          weight: 1.7,
                          price: 81
                      },
                      {
                          size: "7MM-0.38G",
                          weight: 2.3,
                          price: 81
                      },
                      {
                          size: "8MM-0.55G",
                          weight: 3.0,
                          price: 81
                      },
                      {
                          size: "9MM-0.64G",
                          weight: 3.8,
                          price: 81
                      },
                      {
                          size: "10MM-0.73G",
                          weight: 4.4,
                          price: 80
                      },
                      {
                          size: "11MM-0.95G",
                          weight: 5.7,
                          price: 80
                      },
                      {
                          size: "12MM-1.13G",
                          weight: 6.8,
                          price: 80
                      },
                      {
                          size: "14MM-1.54G",
                          weight: 9.2,
                          price: 80
                      },
                      {
                          size: "16MM-2.01G",
                          weight: 12.1,
                          price: 80
                      },
                      {
                          size: "18MM-2.54G",
                          weight: 15.2,
                          price: 80
                      },
                      {
                          size: "20MM-3.14G",
                          weight: 18.8,
                          price: 80
                      },
                      {
                          size: "22MM-3.8G",
                          weight: 22.8,
                          price: 80
                      },
                      {
                          size: "25MM-4.91G",
                          weight: 29.5,
                          price: 80
                      },
                      {
                          size: "28MM-6.15G",
                          weight: 36.9,
                          price: 80
                      },
                      {
                          size: "32MM-8.04G",
                          weight: 48.2,
                          price: 80
                      },
                      {
                          size: "36MM-10.17G",
                          weight: 61.0,
                          price: 80
                      },
                      {
                          size: "40MM-12.56G",
                          weight: 75.4,
                          price: 80
                      },
                      {
                          size: "45MM-15.9G",
                          weight: 95.4,
                          price: 80
                      },
                      {
                          size: "50MM-19.62G",
                          weight: 117.7,
                          price: 80
                      },
                      {
                          size: "56MM-24.62G",
                          weight: 147.7,
                          price: 80
                      },
                      {
                          size: "63MM-31.16G",
                          weight: 187.0,
                          price: 80
                      },
                      {
                          size: "71MM-39.57G",
                          weight: 237.4,
                          price: 80
                      },
                      {
                          size: "80MM-50.24G",
                          weight: 301.4,
                          price: 80
                      },
                  ]
              },
          ]
      },
      {
          product: "M S ROUND RODS",
          productId: '14',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "Weight and Gauage /feet",
                  size: [
                      {
                          size: "5MM-0.15G",
                          weight: 0.05,
                          price: 81
                      },
                      {
                          size: "5.5MM-0.19G",
                          weight: 0.06,
                          price: 81
                      },
                      {
                          size: "6MM-0.22G",
                          weight: 0.07,
                          price: 81
                      },
                      {
                          size: "7MM-0.3G",
                          weight: 0.09,
                          price: 81
                      },
                      {
                          size: "8MM-0.39G",
                          weight: 0.12,
                          price: 81
                      },
                      {
                          size: "9MM-0.5G",
                          weight: 0.15,
                          price: 81
                      },
                      {
                          size: "10MM-0.63G",
                          weight: 0.19,
                          price: 80
                      },
                      {
                          size: "11MM-0.75G",
                          weight: 0.23,
                          price: 80
                      },
                      {
                          size: "12MM-0.89G",
                          weight: 0.27,
                          price: 80
                      },
                      {
                          size: "14MM-1.21G",
                          weight: 0.37,
                          price: 80
                      },
                      {
                          size: "16MM-1.58G",
                          weight: 0.48,
                          price: 80
                      },
                      {
                          size: "18MM-2G",
                          weight: 0.61,
                          price: 80
                      },
                      {
                          size: "20MM-2.47G",
                          weight: 0.75,
                          price: 80
                      },
                      {
                          size: "22MM-2.98G",
                          weight: 0.91,
                          price: 80
                      },
                      {
                          size: "25MM-3.85G",
                          weight: 1.17,
                          price: 80
                      },
                      {
                          size: "28MM-4.83G",
                          weight: 1.47,
                          price: 80
                      },
                      {
                          size: "32MM-6.31G",
                          weight: 1.92,
                          price: 80
                      },
                      {
                          size: "36MM-7.99G",
                          weight: 2.44,
                          price: 80
                      },
                      {
                          size: "40MM-9.86G",
                          weight: 3.01,
                          price: 80
                      },
                      {
                          size: "45MM-12.49G",
                          weight: 3.81,
                          price: 80
                      },
                      {
                          size: "50MM-15.41G",
                          weight: 4.70,
                          price: 80
                      },
                      {
                          size: "56MM-19.34G",
                          weight: 5.90,
                          price: 80
                      },
                      {
                          size: "63MM-24.47G",
                          weight: 7.46,
                          price: 80
                      },
                      {
                          size: "71MM-31.08G",
                          weight: 9.48,
                          price: 80
                      },
                      {
                          size: "80MM-39.46G",
                          weight: 12.03,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "Weight and Gauage / 20 feet - 6 Meter",
                  size: [
                      {
                          size: "5MM-0.15G",
                          weight: 0.9,
                          price: 81
                      },
                      {
                          size: "5.5MM-0.19G",
                          weight: 1.1,
                          price: 81
                      },
                      {
                          size: "6MM-0.22G",
                          weight: 1.3,
                          price: 81
                      },
                      {
                          size: "7MM-0.3G",
                          weight: 1.8,
                          price: 81
                      },
                      {
                          size: "8MM-0.39G",
                          weight: 2.3,
                          price: 81
                      },
                      {
                          size: "9MM-0.5G",
                          weight: 3.0,
                          price: 81
                      },
                      {
                          size: "10MM-0.63G",
                          weight: 3.8,
                          price: 80
                      },
                      {
                          size: "11MM-0.75G",
                          weight: 4.5,
                          price: 80
                      },
                      {
                          size: "12MM-0.89G",
                          weight: 5.3,
                          price: 80
                      },
                      {
                          size: "14MM-1.21G",
                          weight: 7.3,
                          price: 80
                      },
                      {
                          size: "16MM-1.58G",
                          weight: 9.5,
                          price: 80
                      },
                      {
                          size: "18MM-2G",
                          weight: 12.0,
                          price: 80
                      },
                      {
                          size: "20MM-2.47G",
                          weight: 14.8,
                          price: 80
                      },
                      {
                          size: "22MM-2.98G",
                          weight: 17.9,
                          price: 80
                      },
                      {
                          size: "25MM-3.85G",
                          weight: 23.1,
                          price: 80
                      },
                      {
                          size: "28MM-4.83G",
                          weight: 29.0,
                          price: 80
                      },
                      {
                          size: "32MM-6.31G",
                          weight: 37.9,
                          price: 80
                      },
                      {
                          size: "36MM-7.99G",
                          weight: 47.9,
                          price: 80
                      },
                      {
                          size: "40MM-9.86G",
                          weight: 59.2,
                          price: 80
                      },
                      {
                          size: "45MM-12.49G",
                          weight: 74.9,
                          price: 80
                      },
                      {
                          size: "50MM-15.41G",
                          weight: 92.5,
                          price: 80
                      },
                      {
                          size: "56MM-19.34G",
                          weight: 116.0,
                          price: 80
                      },
                      {
                          size: "63MM-24.47G",
                          weight: 146.8,
                          price: 80
                      },
                      {
                          size: "71MM-31.08G",
                          weight: 186.5,
                          price: 80
                      },
                      {
                          size: "80MM-39.46G",
                          weight: 236.8,
                          price: 80
                      },
                  ]
              },
          ]
      },
      {
          product: "M S CHANNELS",
          productId: '15',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "Weight and Gauage /feet",
                  size: [
                      {
                          size: "70 x 35 STD - 4.2G",
                          weight: 1.3,
                          price: 57.2
                      },
                      {
                          size: "75 x 40 M - 6.5G",
                          weight: 2.0,
                          price: 57.2
                      },
                      {
                          size: "100 x 50 L - 7.8G",
                          weight: 2.4,
                          price: 57.2
                      },
                      {
                          size: "100 x 50 M - 8.7G",
                          weight: 2.7,
                          price: 57.2
                      },
                      {
                          size: "75 x 40 XL - 4.92G",
                          weight: 1.5,
                          price: 80
                      },
                      {
                          size: "75 x 40 L - 5.7G",
                          weight: 1.7,
                          price: 80
                      },
                      {
                          size: "75 x 40 STD - 7.2G",
                          weight: 2.2,
                          price: 80
                      },
                      {
                          size: "100 x 50 STD - 9.8G",
                          weight: 3.0,
                          price: 80
                      },
                      {
                          size: "125 x 65 STD - 13.4G",
                          weight: 4.1,
                          price: 80
                      },
                      {
                          size: "150 x 75 STD - 17G",
                          weight: 5.2,
                          price: 80
                      },
                      {
                          size: "175 x 75 STD - 20.5G",
                          weight: 6.3,
                          price: 80
                      },
                      {
                          size: "200 x 75 STD - 23G",
                          weight: 7.0,
                          price: 80
                      },
                      {
                          size: "250 x 80 STD - 30.6G",
                          weight: 9.3,
                          price: 80
                      },
                      {
                          size: "300 x 90 STD - 36.3G",
                          weight: 11.1,
                          price: 80
                      },
                      {
                          size: "350 x 100 STD - 42.7G",
                          weight: 13.0,
                          price: 80
                      },
                      {
                          size: "400 x 100 STD - 50.1G",
                          weight: 15.3,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "Weight and Gauage / 20 feet - 6 Meter",
                  size: [
                      {
                          size: "70 x 35 STD - 4.2G",
                          weight: 25.2,
                          price: 57.2
                      },
                      {
                          size: "75 x 40 M - 6.5G",
                          weight: 39,
                          price: 57.2
                      },
                      {
                          size: "100 x 50 L - 7.8G",
                          weight: 46.8,
                          price: 57.2
                      },
                      {
                          size: "100 x 50 M - 8.7G",
                          weight: 52.2,
                          price: 57.2
                      },
                      {
                          size: "75 x 40 XL - 4.92G",
                          weight: 29.52,
                          price: 80
                      },
                      {
                          size: "75 x 40 L - 5.7G",
                          weight: 34.2,
                          price: 80
                      },
                      {
                          size: "75 x 40 STD - 7.2G",
                          weight: 43.2,
                          price: 80
                      },
                      {
                          size: "100 x 50 STD - 9.8G",
                          weight: 58.8,
                          price: 80
                      },
                      {
                          size: "125 x 65 STD - 13.4G",
                          weight: 80.4,
                          price: 80
                      },
                      {
                          size: "150 x 75 STD - 17G",
                          weight: 102,
                          price: 80
                      },
                      {
                          size: "175 x 75 STD - 20.5G",
                          weight: 123,
                          price: 80
                      },
                      {
                          size: "200 x 75 STD - 23G",
                          weight: 138,
                          price: 80
                      },
                      {
                          size: "250 x 80 STD - 30.6G",
                          weight: 183.6,
                          price: 80
                      },
                      {
                          size: "300 x 90 STD - 36.3G",
                          weight: 217.8,
                          price: 80
                      },
                      {
                          size: "350 x 100 STD - 42.7G",
                          weight: 256.2,
                          price: 80
                      },
                      {
                          size: "400 x 100 STD - 50.1G",
                          weight: 300.6,
                          price: 80
                      },
                  ]
              },
          ]
      },
      {
          product: "M S I BEAMS",
          productId: '16',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "Weight and Gauage /feet",
                  size: [
                      {
                          size: "100MM x 50MM-9.3G",
                          weight: 2.8,
                          price: 81
                      },
                      {
                          size: "125MM x 70MM-13G",
                          weight: 4.0,
                          price: 57.2
                      },
                      {
                          size: "150MM x 75MM-15G",
                          weight: 4.6,
                          price: 57.2
                      },
                      {
                          size: "175MM x 85MM-19.5G",
                          weight: 5.9,
                          price: 57.2
                      },
                      {
                          size: "200MM x 100MM-35.9G",
                          weight: 7.9,
                          price: 57.2
                      },
                      {
                          size: "250MM x 125MM-38.1G",
                          weight: 11.6,
                          price: 80
                      },
                      {
                          size: "300MM x 140MM-45.1G",
                          weight: 13.8,
                          price: 80
                      },
                      {
                          size: "350MM x 140MM-52.9G",
                          weight: 16.1,
                          price: 80
                      },
                      {
                          size: "400MM x 140MM-62.6G",
                          weight: 19.1,
                          price: 80
                      },
                      {
                          size: "450MM x 150MM-73.1G",
                          weight: 22.3,
                          price: 80
                      },
                      {
                          size: "500MM x 180MM-87.7G",
                          weight: 26.7,
                          price: 80
                      },
                      {
                          size: "600MM x 210MM-125G",
                          weight: 38.1,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "Weight and Gauage / 20 feet - 6 Meter",
                  size: [
                      {
                          size: "100MM x 50MM-9.3G",
                          weight: 55.8,
                          price: 81
                      },
                      {
                          size: "125MM x 70MM-13G",
                          weight: 78,
                          price: 57.2
                      },
                      {
                          size: "150MM x 75MM-15G",
                          weight: 90,
                          price: 57.2
                      },
                      {
                          size: "175MM x 85MM-19.5G",
                          weight: 117,
                          price: 57.2
                      },
                      {
                          size: "200MM x 100MM-35.9G",
                          weight: 155.4,
                          price: 57.2
                      },
                      {
                          size: "250MM x 125MM-38.1G",
                          weight: 228.6,
                          price: 80
                      },
                      {
                          size: "300MM x 140MM-45.1G",
                          weight: 270.6,
                          price: 80
                      },
                      {
                          size: "350MM x 140MM-52.9G",
                          weight: 317.4,
                          price: 80
                      },
                      {
                          size: "400MM x 140MM-62.6G",
                          weight: 375.6,
                          price: 80
                      },
                      {
                          size: "450MM x 150MM-73.1G",
                          weight: 438.6,
                          price: 80
                      },
                      {
                          size: "500MM x 180MM-87.7G",
                          weight: 526.2,
                          price: 80
                      },
                      {
                          size: "600MM x 210MM-125G",
                          weight: 750,
                          price: 80
                      },
                  ]
              },
          ]
      },
      {
          product: "Z ANGLES",
          productId: '17',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "Default Guage",
                  size: [
                      {
                          size: "Default Size",
                          weight: 10,
                          price: 60
                      },
                  ]
              },
          ]
      },
      {
          product: "T ANGLES",
          productId: '18',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "Default Guage",
                  size: [
                      {
                          size: "0.75MM - 0.75inch",
                          weight: 5.5,
                          price: 60
                      },
                      {
                          size: "25.4MM - 1inch",
                          weight: 7,
                          price: 60
                      },
                      {
                          size: "40MM - 1.5inch",
                          weight: 22,
                          price: 60
                      },
                      {
                          size: "50MM - 2inch",
                          weight: 29,
                          price: 60
                      },
                      {
                          size: "65MM - 2.5inch",
                          weight: 42,
                          price: 60
                      },
                      {
                          size: "75MM - 3inch",
                          weight: 64,
                          price: 60
                      },
                  ]
              },
          ]
      },
      {
          product: "GATE CHANNEL",
          productId: '19',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "Default Guage",
                  size: [
                      {
                          size: "Default Size",
                          weight: 4.5,
                          price: 60
                      },
                  ]
              },
          ]
      },
      {
          product: "M S PLATES",
          productId: '21',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "4MM",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 94,
                          price: 75
                      },
                      {
                          size: "(10MM X 4MM)",
                          weight: 125,
                          price: 75
                      },
                  ]
              },
              {
                  guage: "5MM",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 117,
                          price: 75
                      },
                      {
                          size: "(10MM X 6MM)",
                          weight: 230,
                          price: 75
                      },
                  ]
              },
              {
                  guage: "6MM",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 140,
                          price: 75
                      },
                      {
                          size: "(10MM X 6MM)",
                          weight: 275,
                          price: 75
                      },
                  ]
              },
              {
                  guage: "8MM",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 187,
                          price: 75
                      },
                  ]
              },
              {
                  guage: "10MM",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 250,
                          price: 75
                      },
                  ]
              },
              {
                  guage: "12MM",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 280,
                          price: 75
                      },
                  ]
              },
              {
                  guage: "16MM",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 380,
                          price: 75
                      },
                  ]
              }
          ]
      },
      {
          product: "H R SHEETS",
          productId: '22',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "1.6MM-16G",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 40,
                          price: 75
                      },
                  ]
              },
              {
                  guage: "2MM-14G",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 51,
                          price: 75
                      },
                  ]
              },
              {
                  guage: "2.6MM-12G",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 62,
                          price: 75
                      },
                  ]
              },
              {
                  guage: "3MM-10G",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 73,
                          price: 75
                      },
                  ]
              },
          ]
      },
      {
          product: "C R SHEETS",
          productId: '23',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "1MM-19G",
                  size: [
                      {
                          size: "(6MM X 3MM)",
                          weight: 12.5,
                          price: 95
                      },
                      {
                          size: "(8MM X 4MM)",
                          weight: 24.5,
                          price: 95
                      },
                  ]
              },
              {
                  guage: "1.2MM-18G",
                  size: [
                      {
                          size: "(6MM X 3MM)",
                          weight: 15,
                          price: 95
                      },
                      {
                          size: "(8MM X 4MM)",
                          weight: 29,
                          price: 95
                      },
                  ]
              },
              {
                  guage: "1.6MM-16G",
                  size: [
                      {
                          size: "(6MM X 3MM)",
                          weight: 20,
                          price: 95
                      },
                      {
                          size: "(8MM X 4MM)",
                          weight: 37,
                          price: 95
                      },
                  ]
              },
              {
                  guage: "25MM-14G",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 47,
                          price: 95
                      },
                  ]
              },
          ]
      },
      {
          product: "CHEQUERED SHEETS",
          productId: '24',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "2.6MM",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 68,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "3.0MM",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 75,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "4.0MM",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 102,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "5.0MM",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 121,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "6.0MM",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 155,
                          price: 80
                      },
                  ]
              },
              {
                  guage: "8.0MM",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 206,
                          price: 80
                      },
                  ]
              }
          ]
      },
      {
          product: "GI SHEETS",
          productId: '25',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "1.0MM-19G",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 25,
                          price: 95
                      },
                  ]
              },
              {
                  guage: "1.2MM-18G",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 30,
                          price: 95
                      },
                  ]
              },
              {
                  guage: "1.6MM-16G",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 37,
                          price: 95
                      },
                      {
                          size: "(35MM X 35MM X 5MM)",
                          weight: 15.9,
                          price: 56.2
                      },
                      {
                          size: "(40MM X 40MM X 5MM)",
                          weight: 18.3,
                          price: 56.2
                      },
                      {
                          size: "(50MM X 50MM X 5MM)",
                          weight: 23,
                          price: 56.2
                      },
                      {
                          size: "(65MM X 65MM X 5MM)",
                          weight: 30,
                          price: 56.2
                      },
                      {
                          size: "(75MM X 75MM X 5MM)",
                          weight: 35,
                          price: 56.2
                      }
                  ]
              },
              {
                  guage: "2.0MM-14G",
                  size: [
                      {
                          size: "(8MM X 4MM)",
                          weight: 47,
                          price: 95
                      },
                  ]
              },
          ]
      },
      {
          product: "BLUE SHEETS",
          productId: '26',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "0.45MM",
                  size: [
                      {
                          size: "1FT",
                          weight: 1.25,
                          price: 130
                      },
                      {
                          size: "6FT",
                          weight: 7.5,
                          price: 130
                      },
                      {
                          size: "8FT",
                          weight: 10,
                          price: 130
                      },
                      {
                          size: "10FT",
                          weight: 12.5,
                          price: 130
                      },
                      {
                          size: "12FT",
                          weight: 15,
                          price: 130
                      },
                      {
                          size: "14FT",
                          weight: 17.5,
                          price: 130
                      },
                      {
                          size: "16FT",
                          weight: 20,
                          price: 130
                      },
                      {
                          size: "18FT",
                          weight: 22.5,
                          price: 130
                      },
                      {
                          size: "20FT",
                          weight: 25,
                          price: 130
                      },
                      {
                          size: "22FT",
                          weight: 27.5,
                          price: 130
                      },
                      {
                          size: "24FT",
                          weight: 30,
                          price: 130
                      },
                      {
                          size: "25FT",
                          weight: 31.25,
                          price: 130
                      },
                  ]
              },
              {
                  guage: "0.5MM",
                  size: [
                      {
                          size: "1FT",
                          weight: 1.37,
                          price: 140
                      },
                      {
                          size: "6FT",
                          weight: 8.2,
                          price: 140
                      },
                      {
                          size: "8FT",
                          weight: 11,
                          price: 140
                      },
                      {
                          size: "10FT",
                          weight: 13.7,
                          price: 140
                      },
                      {
                          size: "12FT",
                          weight: 16.5,
                          price: 140
                      },
                      {
                          size: "14FT",
                          weight: 19,
                          price: 140
                      },
                      {
                          size: "16FT",
                          weight: 22,
                          price: 140
                      },
                      {
                          size: "18FT",
                          weight: 24.5,
                          price: 140
                      },
                      {
                          size: "20FT",
                          weight: 27.5,
                          price: 140
                      },
                      {
                          size: "22FT",
                          weight: 30,
                          price: 140
                      },
                      {
                          size: "24FT",
                          weight: 33,
                          price: 140
                      },
                      {
                          size: "25FT",
                          weight: 34.5,
                          price: 140
                      },
                  ]
              },
          ]
      },
      {
          product: "BRIGHT SQUARE",
          productId: '27',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "Default Guage",
                  size: [
                      {
                          size: "10MM",
                          weight: 5,
                          price: 81
                      },
                      {
                          size: "12MM",
                          weight: 6.5,
                          price: 81
                      },
                      {
                          size: "14MM",
                          weight: 9,
                          price: 81
                      },
                      {
                          size: "16MM",
                          weight: 12,
                          price: 81
                      },
                  ]
              },
          ]
      },
      {
          product: "BRIGHT ROUND",
          productId: '28',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "Default Guage",
                  size: [
                      // {
                      //     size: "10MM",
                      //     weight: 4.5,
                      //     price: 81
                      // },
                      {
                          size: "12MM",
                          weight: 5.5,
                          price: 81
                      },
                      // {
                      //     size: "14MM",
                      //     weight: 8.6,
                      //     price: 81
                      // },
                      {
                          size: "16MM",
                          weight: 8.5,
                          price: 81
                      },
                  ]
              },
          ]
      },
      {
          product: "BRIGHT HEXAGONAL",
          productId: '29',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "Defult Guage",
                  size: [
                      {
                          size: "12MM",
                          weight: 6.5,
                          price: 81
                      },
                      {
                          size: "14MM",
                          weight: 8.5,
                          price: 81
                      },
                      {
                          size: "16MM",
                          weight: 11,
                          price: 81
                      },
                  ]
              },
          ]
      },
      {
          product: "BRIGHT FLAT",
          productId: '30',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "Default Guage",
                  size: [
                      {
                          size: "(25MM X 6MM)",
                          weight: 6.5,
                          price: 81
                      },
                      {
                          size: "(32MM X 6MM)",
                          weight: 8.5,
                          price: 81
                      },
                      {
                          size: "(40MM X 6MM)",
                          weight: 10.5,
                          price: 81
                      },
                  ]
              },
          ]
      },
      {
          product: "M S WELD MESH 1x1",
          productId: '31',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "10G",
                  size: [
                      {
                          size: "(1FT X 1FT)",
                          weight: 0.28,
                          price: 85
                      },
                      {
                          size: "(1FT X 3FT)",
                          weight: 0.84,
                          price: 85
                      },
                      {
                          size: "(1FT X 4FT)",
                          weight: 1.12,
                          price: 85
                      },
                      {
                          size: "(1FT X 5FT)",
                          weight: 1.4,
                          price: 85
                      },
                      {
                          size: "(1FT X 6FT)",
                          weight: 1.68,
                          price: 85
                      },
                  ]
              },
              {
                  guage: "11G",
                  size: [
                      {
                          size: "(1FT X 1FT)",
                          weight: 0.25,
                          price: 85
                      },
                  ]
              },
              {
                  guage: "12G",
                  size: [
                      {
                          size: "(1FT X 1FT)",
                          weight: 0.2,
                          price: 85
                      },
                  ]
              },
          ]
      },
      {
          product: "GI CHAIN LINK MESH 65MMX65MM",
          productId: '32',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "2.5MM",
                  size: [
                      {
                          size: "(1FT X 1FT)",
                          weight: 0.13,
                          price: 95
                      },
                  ]
              },
              {
                  guage: "2.8MM",
                  size: [
                      {
                          size: "(1FT X 1FT)",
                          weight: 0.16,
                          price: 95
                      },
                      {
                          size: "(1FT X 3FT)",
                          weight: 0.16,
                          price: 95
                      },
                      {
                          size: "(1FT X 4FT)",
                          weight: 0.16,
                          price: 95
                      },
                      {
                          size: "(1FT X 5FT)",
                          weight: 0.16,
                          price: 95
                      },
                      {
                          size: "(1FT X 6FT)",
                          weight: 0.16,
                          price: 95
                      },
                  ]
              },
              {
                  guage: "3MM",
                  size: [
                      {
                          size: "(1FT X 1FT)",
                          weight: 0.2,
                          price: 95
                      },
                  ]
              },
              {
                  guage: "3.5MM",
                  size: [
                      {
                          size: "(1FT X 1FT)",
                          weight: 0.25,
                          price: 95
                      },
                  ]
              },
              {
                  guage: "3.8MM",
                  size: [
                      {
                          size: "(1FT X 1FT)",
                          weight: 0.3,
                          price: 95
                      },
                  ]
              },
              {
                  guage: "4MM",
                  size: [
                      {
                          size: "(1FT X 1FT)",
                          weight: 0.33,
                          price: 95
                      },
                  ]
              },
          ]
      },
      {
          product: "TMT BARS INDUS",
          productId: '33',
          productType: 'rod',
          sizes: [
              {
                  guage: "In Kgs",
                  size: [
                      {
                          size: "Mention Weight in Kgs",
                          weight: 1,
                          price: 60.9
                      },
                  ]
              },
          ]
      },
      {
          product: "TMT BARS MEENAKSHI",
          productId: '34',
          productType: 'rod',
          sizes: [
              {
                  guage: "In Kgs",
                  size: [
                      {
                          size: "Mention Weight in Kgs",
                          weight: 1,
                          price: 56.7
                      },
                  ]
              },
          ]
      },
      {
          product: "TMT BARS KAMDHENU",
          productId: '35',
          productType: 'rod',
          sizes: [
              {
                  guage: "In Kgs",
                  size: [
                      {
                          size: "Mention Weight in Kgs",
                          weight: 1,
                          price: 56.4
                      },
                  ]
              },
          ]
      },
      {
          product: "TMT BARS GOPALA",
          productId: '36',
          productType: 'rod',
          sizes: [
              {
                  guage: "In Kgs",
                  size: [
                      {
                          size: "Mention Weight in Kgs",
                          weight: 1,
                          price: 54.2
                      },
                  ]
              }
          ]
      },
      {
          product: "TMT BARS A ONE",
          productId: '37',
          productType: 'rod',
          sizes: [
              {
                  guage: "In Kgs",
                  size: [
                      {
                          size: "Mention Weight in Kgs",
                          weight: 1,
                          price: 55.9
                      },
                  ]
              },
          ]
      },
      {
          product: "TMT BARS TATA TISCON",
          productId: '38',
          productType: 'rod',
          sizes: [
              {
                  guage: "In Kgs",
                  size: [
                      {
                          size: "Mention Weight in Kgs",
                          weight: 1,
                          price: 65.7
                      },
                  ]
              },
          ]
      },
      {
          product: "TMT BARS FE 550 ISI",
          productId: '39',
          productType: 'rod',
          sizes: [
              {
                  guage: "In Kgs",
                  size: [
                      {
                          size: "Mention Weight in Kgs",
                          weight: 1,
                          price: 54.2
                      },
                  ]
              },
          ]
      },
      {
          product: "CEMENT",
          productId: '40',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "Birla",
                  size: [
                      {
                          size: "50kg Bag",
                          weight: 1,
                          price: 360
                      }
                  ]
              },
              {
                  guage: "Ultra",
                  size: [
                      {
                          size: "50kg Bag",
                          weight: 1,
                          price: 352
                      }
                  ]
              },
          ]
      }, {
          product: "Extra Steel Items",
          productId: '41',
          productType: 'non-rod',
          sizes: [
              {
                  guage: "default",
                  size: [
                      {
                          size: "Other Items",
                          weight: 1,
                          price: 100
                      }
                  ]
              },
          ]
      },
  ];

  raw_data.forEach(function (object, index) {
    var temp = { name: object.product, product_type: object.productType };
    masterdata.push({ name: object.product, product_type: object.productType });
    object.sizes.forEach(function (variant, index) {
        temp.guage = variant.guage;
        variant.size.forEach(function (item, index) {
            temp.size = item.size;
            temp.weight_based_on_guage = item.weight;
            temp.rate = item.price;
            data.push(temp);
        });
    });
  });

  return Promise.all([
      queryInterface.bulkInsert('Masterheads', [...new Set(masterdata)], {}),
      queryInterface.bulkInsert('Products', [...new Set(data)], {})
    ]).then(()=>{ resolve(true) }).catch((error)=>{ console.log(error) });
  // duplicate data also included if following line uncommented while running this seed file
  // return queryInterface.bulkInsert('Products', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('Masterheads', null, {}),
      queryInterface.bulkDelete('Products', null, {})
    ]).then(()=>{ resolve(true) }).catch((error)=>{ console.log(error) });
  }
};