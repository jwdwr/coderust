function rotateArray(array, rotations) {
  while (rotations !== 0) {
    if (rotations > 0) {
      array.unshift(array.pop());
      rotations--;
    }
    if (rotations < 0) {
      array.push(array.shift());
      rotations++;
    }
  }
}

function rotateArray2(array, rotations) {
  const negative = rotations < 0;
  let absRotations = Math.abs(rotations);
  while (absRotations > 0) {
    if (negative) {
      array.unshift(array.pop());
    } else {
      array.push(array.shift());
    }

    absRotations--;
  }
}

function rotateArray3(array, rotations) {
  const negative = rotations < 0;
  let betterRotations = Math.abs(rotations) % array.length;
  while (betterRotations > 0) {
    if (!negative) {
      array.unshift(array.pop());
    } else {
      array.push(array.shift());
    }

    betterRotations--;
  }
}

function rotateArray4(array, rotations) {
  const negative = rotations < 0;
  let normalRotations = Math.abs(rotations) % array.length;

  if (!negative) {
    return [...array.slice(array.length - normalRotations), ...array.slice(0, array.length - normalRotations)]
  } else {
    return [...array.slice(normalRotations), ...array.slice(0, normalRotations)];
  }
}

console.log(rotateArray4([1,2,3,4,5], -2)	);