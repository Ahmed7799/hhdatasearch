// let dist = ["kolhapur district", "nanded district", "pune district", "pune city", "sangli district",
//     "solapur district", "thane district", "satara district", "nagpur district"];
// console.log(dist);
// console.log(dist.length);
// for (i = 0; i < dist.length; i++) {
//     console.log(dist[i]);
// };
// arrays = [
//     {
//         type: "kolhapur district",
//         array: ["ichalkaranji-ICKJ-9246436360", "kolhapur shiroli-KPSH-9225520361",
//             "kolhapur gandhi nagar-KPGN-7264007743"]
//     }, {
//         type: "nanded district",
//         array: ["nanded-NDED-7995545417"]
//     },
//     {
//         type: "pune district",
//         array: ["chakan-PNCK-09225302449", "wagholi-PNWG-09225400391",
//             "phursungi-PNPG-09225066494"]
//     },

// ]

// console.log(arrays[0])
// console.log(typeof [arrays]);
// // console.log(arrays[0].array.length)
// // console.log(arrays[i].type);


// // for (i = 0; i < arrays.length; i++) {
// //     console.log(arrays[i]);

// // };


// //                          -----------------------------
// //console.log(arrays[2].array)
// // for (i = 0; i < arrays[2].array.length; i++) {
// //     console.log(arrays[2].array[i]);
// // }



// //        -------------------------------------------------------------
// for (i = 0; i < arrays.length; i++) {

//     // console.log(arrays[i]);
//     var arr = arrays[i].type;
//     // console.log(arr);
//     localStorage.setItem('array-store', arr);

// };
// var take = localStorage.getItem('array-store');
// console.log(take);
// if (dist[i] === arrays[i].type) {
//     for (i = 0; i < arrays[0].array.length; i++) {
//         console.log(arrays[0].array[i])
//     }
// }
//---------------------------------------------------------------------------------------

arrays = [
    {
        type: "kolhapur district",
        array: ["ichalkaranji-ICKJ-9246436360", "kolhapur shiroli-KPSH-9225520361",
            "kolhapur gandhi nagar-KPGN-7264007743"]
    }, {
        type: "nanded district",
        array: ["nanded-NDED-7995545417"]
    },
    {
        type: "pune district",
        array: ["chakan-PNCK-09225302449", "wagholi-PNWG-09225400391",
            "phursungi-PNPG-09225066494"]
    },

]

let district = ["kolhapur district", "nanded district", "pune district", "pune city", "sangli district",
    "solapur district", "thane district", "satara district", "nagpur district"];

// console.log(arrays[0].type);
// console.log(district[0]);


function dist(names) {
    for (i = 0; i < district.length; i++) {
        var value = names[i];

        // console.log(value);
    }
    return value;
}
dist(district);



function city(center) {
    for (var i = 0; i < arrays.length; i++) {

        var village = center[i].type;
        var name = center[i].array;
        if (village === dist(district)) {
            console.log(name);
        }
        // console.log(name);
        // console.log(village);
    }


    return village;
}

city(arrays);

