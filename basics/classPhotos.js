// // all kids in a row must wear same color shirt (only 2 rows)
// // every kid must be strictly taller than kid in front
const classPhotos = (redShirtHeights, blueShirtHeights) => {
  let tallerArr = redShirtHeights.sort((a, b) => a - b);
  let shorterArr = blueShirtHeights.sort((a, b) => a - b);

  if (tallerArr[0] < shorterArr[0])
    [ tallerArr, shorterArr ] = [ shorterArr, tallerArr ];

  for (let i = 0; i < tallerArr.length; i++)
    if (shorterArr[i] >= tallerArr[i])
      return false;

  return true;
};
