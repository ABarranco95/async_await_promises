// Timing exercise 1
// Uncomment these lines and run them, observing the order that the logs happen
// How can you change it to log in the correct order?

// async function exercise1() {
//     console.log('I should log before the data!');
//     const res = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no');
//     const json = await res.json()
//     console.log(json)
//     console.log('I should log after the data!');

// }
// exercise1();

//Solution using .then
// console.log('I should log before the data!');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => { 
//     console.log(json)
//     console.log('I should log after the data!');
// })




// ========================================

// Timing exercise 2: slightly more complicated

// console.log('I should be before the cats data');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => console.log(json))
// console.log('I should be between the cats and dogs');
// fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
// .then((res) => res.json()).then((json) => console.log(json))
// console.log('I should be last');


// async function exercise2() {
//     console.log('I should be before the cats data');

//     const res1 = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no');
//     const json1 = await res1.json()
//     console.log('This is the cats data', json1);

//     console.log('I should be between the cats and dogs');
//     const res2 = await fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
//     const json2 = await res2.json()
//     console.log('This is the dogs data', json2);

//     console.log('I should be last');

// }

// exercise2();




// .then--------------------------------------------------------------------------------

// console.log('I should be before the cats data');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) =>  {
//     console.log(json)
//     console.log('I should be between the cats and dogs');
// })
// fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
// .then((res) => res.json()).then((json) => {
//     console.log(json)
//     console.log('I should be last');
    
// })





// --------------------- Promises

// const myPromise = new Promise(function(resolve, reject) {

// });



// const successfulPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve()
//     }, 3000)
// })
    
// console.log(successfulPromise);

// const unsuccessfulPromise = new Promise(function(resolve, reject) {
//     setTimeout(reject, 3000)
// });
// console.log(unsuccessfulPromise)



const conditionalPromise = new Promise(function(resolve, reject) {
    if (a+b === b+a) {
        reject();
    } else {
        resolve();
    }
})

console.log(conditionalPromise);


// status codes

// 2xx Success
// 3xx Redirect
// 4xx client messed up/ don't try again
// 5xx server messed up


function myFetch(url) {
    const myPromise = new Promise(function(resolve, reject) {
        const webData = somehowGetWebData()
        if(webData.statusCode < 400) {
            resolve(webData)
        } else if (400 <= webData.statusCode <= 599) {
            reject('this is bad data ' + webData)
        }
    })
}



