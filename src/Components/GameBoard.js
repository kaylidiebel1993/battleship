import ship from './ShipFactory'; 

const gameBoard = () => {
    const generateEmptyGameBoard = () => {
        const tempArr = []; 
        for (let i = 0; i < 100; i++) {
            tempArr.push(null); 
        }
        return [...tempArr]; 
    }; 

    const gb = generateEmptyGameBoard(); 
    const ships = {
        carrier: {
            ship: ship(5),
        },
        battleship: {
            ship: ship(4),
        }, 
        cruiser: {
            ship: ship(3),
        }, 
        submarine: {
            ship: ship(3),
        },
        destroyer: {
            ship: ship(2),
        }, 
    }; 

    const attacks = []; 
    const misses = []; 

    const checkIfPlaced = (name) => {
        if (ships[name].ship.returnShip().includes(null)) {
            return false;
        }
        return true; 
    }; 

    const placeShip = (name, location) => {
        if (checkForShipAtLocation(location)) {
            ships[name].ship.placeShip(location); 
            return true; 
        } else {
            return false; 
        }
    }; 

    const checkForShipAtLocation = (location) => {
        for (let i = 0; i < location.length; i++) {
            if (ships["carrier"].ship.returnShip().includes(location[i])) {
                return false; 
            } else if (ships["battleship"].ship.returnShip().includes(location[i])) {
                return false; 
            } else if (ships["cruiser"].ship.returnShip().includes(location[i])) {
                return false; 
            } else if (ships["submarine"].ship.returnShip().includes(location[i])) {
                return false; 
            } else if (ships["destroyer"].ship.returnShip().includes(location[i])) {
                return false; 
            }
        }
        return true; 
    }; 

    const checkIfShipHit = (attackCoord) => {
        if (ships["carrier"].ship.hit(attackCoord)) {
            return true; 
        } else if (ships["battleship"].ship.hit(attackCoord)) {
            return true; 
        } else if (ships["cruiser"].ship.hit(attackCoord)) {
            return true; 
        } else if (ships["submarine"].ship.hit(attackCoord)) {
            return true; 
        } else if (ships["destroyer"].ship.hit(attackCoord)) {
            return true; 
        }

        return false; 
    }; 

    const receiveAttack = (attackCoord) => {
        if (!attacks.includes(attackCoord)) {
            attacks.push(attackCoord); 
            if (checkIfShipHit(attackCoord)) {
                return "hit"; 
            } else {
                misses.push(attackCoord);
                return "miss"; 
            }
        } else {
            return "attacked"; 
        }
    }; 

    const allSunk = () => {
        let sunk = true; 
        if (!ships["carrier"].ship.isSunk()) {
            sunk = false; 
        } else if (!ships["battleship"].ship.isSunk()) {
            sunk = false; 
        } else if (!ships["cruiser"].ship.isSunk()) {
            sunk = false; 
        } else if (!ships["submarine"].ship.isSunk()) {
            sunk = false; 
        } else if (!ships["destroyer"].ship.isSunk()) {
            sunk = false; 
        }

        return sunk; 
    }; 

    const returnGameBoard = () => {
        return gb; 
    }

    const returnAttacks = () => {
        return attacks; 
    }

    const returnMisses = () => {
        return misses; 
    }

    const returnShips = () => {
        return ships; 
    }

    return {
        returnGameBoard, 
        returnAttacks, 
        returnMisses, 
        returnShips, 
        placeShip, 
        receiveAttack, 
        allSunk, 
        checkIfPlaced, 
    }; 
}; 

export default gameBoard; 