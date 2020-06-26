// new Morris.Line({
//     // ID of the element in which to draw the chart.
//     element: 'myfirstchart',
//     // Chart data records -- each entry in this array corresponds to a point on
//     // the chart.
//     data: [
//         { year: '2008', value: 20 },
//         { year: '2009', value: 10 },
//         { year: '2010', value: 5 },
//         { year: '2011', value: 5 },
//         { year: '2012', value: 20 }
//     ],
//     // The name of the data record attribute that contains x-values.
//     xkey: 'year',
//     // A list of names of data record attributes that contain y-values.
//     ykeys: ['value'],
//     lineWidth:1,
//     // Labels for the ykeys -- will be displayed when you hover over the
//     // chart.
//     labels: ['Value'],
//     resize: true,
//     lineColors:['#89ff00']
// });
//

// Use Morris.Bar
/* data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type */
new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { year: '1001', value: -0.9,value2: 0 },
        { year: '1002', value: -0.5,value2: 0.15 },
        { year: '1003', value: 0,value2: 0.3  },
        { year: '1004', value: 0.5,value2: 0.6  },
        { year: '1005', value: 0.10,value2: 0.76  }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    lineWidth:1,
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value','value2'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['polaridad','Polaridades'],
    resize: true,
    lineColors:['#333333','#89ff00']
});