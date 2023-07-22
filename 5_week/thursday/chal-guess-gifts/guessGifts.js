/*const guessGifts = (wishlist, presents) => {
  let ans = [];
  for (let i = 0; i < wishlist.length; i++) {
    for (let j = 0; j < presents.length; j++) {
      if (
        wishlist[i].size === presents[j].size &&
        wishlist[i].clatters === presents[j].clatters &&
        wishlist[i].weight === presents[j].weight
      ) {
        ans.push(wishlist[i].name);
      }
    }
  }
  return ans;
};*/

const guessGifts = (wishlist, presents) => {
  const presentsObj = {};
  presents.forEach((present) => {
    const key = present.size + present.clatters + present.weight;
    if (!(key in presentsObj)) presentsObj[key] = true;
  });
  return wishlist
    .filter((item) =>
      presentsObj.hasOwnProperty(item.size + item.clatters + item.weight)
    )
    .map((item) => item.name);
};

const wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

const presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
];

console.log(guessGifts(wishlist, presents)); // must return ["Toy Car", "Mini Puzzle"]
/**
 * 
 * function guessGifts(wishlist, presents) {
    return wishlist.filter(function(x){
      return presents.some(function(y){
        return x.size == y.size && x.clatters == y.clatters && x.weight == y.weight;
      });
    }).map(function(x){ return x.name; });
  }
  
  
  function guessGifts(wishlist, presents) {
    return wishlist.filter(function(wish) {
      return presents.some(function(present) {
        return Object.keys(present).every(function(key) {
          return wish[key] === present[key];
        });
      });
    }).map(function(wish) {
      return wish.name;
    });
  }
  
  function guessGifts(wishlist, presents) {
    var r = [];
    presents.forEach(function(p){
      wishlist.forEach(function(w){
        if (p.size == w.size && p.clatters == w.clatters && p.weight == w.weight && r.indexOf(w.name) == -1) r.push(w.name);
      });
    });
    return r;
  }
  
 */
