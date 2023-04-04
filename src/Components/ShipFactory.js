/* 
carrier: size 5, 
battleship: size 4,
cruiser: size 3,
submarine: size 3,
destroyer: size 2
*/ 
const ship = (length) => {
    const initShip = () => {
        const tempArr = []; 
        for (let i = 0; i < length; i++) {
            tempArr.push(null); 
        }
        return [...tempArr]; 
    }; 

    const initHitArr = () => {
        const tempArr = []; 
        for (let i = 0; i < length; i++) {
            tempArr.push(false); 
        }
        return [...tempArr]; 
    };

    let ship = initShip(); 
    const hitArr = initHitArr(); 
    let sunk = false; 

    const placeShip = (placementArr) => {
        if (placementArr.some((element) => element < 0)) {
            throw new Error("negative index position"); 
        } else if (placementArr.some((element) => element > 99)) {
            throw new Error("Index out of bound!"); 
        } else if (placementArr.length !== ship.length) {
            throw new Error("size mismatch"); 
        } else {
            ship = [...placementArr]; 
        }
    }; 

    const setSunk = () => {
        if (!hitArr.includes(false)) {
            sunk = true; 
        }
    }; 

    const hit = (boardIndex) => {
        if (ship.includes(boardIndex)) {
            const index = ship.indexOf(boardIndex); 
            hitArr.splice(index, 1, true);
            setSunk(); 
            return true; 
        } else {
            return false; 
        }
    }; 
    const returnShip = () => {
        return ship; 
    }

    const returnHit = () => {
        return hitArr; 
    }; 

    const isSunk = () => {
        return sunk; 
    }; 

    return { returnShip, returnHit, isSunk, placeShip, hit }; 
}; 

export default ship; 