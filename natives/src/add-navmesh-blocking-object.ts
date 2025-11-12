import { EBlockingObjectFlags } from '@ivanzaida/structures'

/**
 * PATHFIND:ADD_NAVMESH_BLOCKING_OBJECT
 *
 * 0x8CC50AC10D8037C7

 * 
 * This function adds a blocking obstacle in the navmesh, which will prevent peds from pathfinding through it.
 * This command will assert if two objects are added at the same XYZ position, this is order to catch duplicates.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} sizeXYZX
 * @param {number} sizeXYZY
 * @param {number} sizeXYZZ
 * @param {number} heading
 * @param {boolean} permanent If the object will last outside the lifetime of the callig script (always set to FALSE except in very special cases!)
 * @param {EBlockingObjectFlags} flags
 * @returns {number}  
 */
export function addNavmeshBlockingObject(positionX: number, positionY: number, positionZ: number, sizeXYZX: number, sizeXYZY: number, sizeXYZZ: number, heading: number, permanent: boolean = false, flags: EBlockingObjectFlags | number = 7): number {
	const addNavmeshBlockingObject_result = Citizen.invokeNative<number>('0x8CC50AC10D8037C7', positionX, positionY, positionZ, sizeXYZX, sizeXYZY, sizeXYZZ, heading, permanent, flags);
	return addNavmeshBlockingObject_result;
}