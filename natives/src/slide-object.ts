import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SLIDE_OBJECT
 *
 * 0x51DACC000DE4DECC

 * 
 * This command returns TRUE when the object is in the required position.
 * 
 * Returns true if the object has finished moving.
 * 
 * If false, moves the object towards the specified X, Y and Z coordinates with the specified X, Y and Z speed.
 * 
 * See also: https://gtagmodding.com/opcode-database/opcode/034E/
 * Has to be looped until it returns true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} objectID
 * @param {number} destCoorstX
 * @param {number} destCoorstY
 * @param {number} destCoorstZ
 * @param {number} incrementX
 * @param {number} incrementY
 * @param {number} incrementZ
 * @param {boolean} stopOnCollision
 * @returns {boolean}  
 */
export function slideObject(objectID: ObjectIndex, destCoorstX: number, destCoorstY: number, destCoorstZ: number, incrementX: number, incrementY: number, incrementZ: number, stopOnCollision: boolean): boolean {
	const slideObject_result = Citizen.invokeNative<boolean>('0x51DACC000DE4DECC', objectID, destCoorstX, destCoorstY, destCoorstZ, incrementX, incrementY, incrementZ, stopOnCollision);
	return slideObject_result;
}