import { EBlockingObjectFlags } from '@ivanzaida/structures'

/**
 * PATHFIND:UPDATE_NAVMESH_BLOCKING_OBJECT
 *
 * 0xD9ECC9BB146EA4A4

 * 
 * This command updates the position, size & orientation of a navmesh blocking object
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} objectId
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} sizeXYZX
 * @param {number} sizeXYZY
 * @param {number} sizeXYZZ
 * @param {number} heading
 * @param {EBlockingObjectFlags} flags
 */
export function updateNavmeshBlockingObject(objectId: number, positionX: number, positionY: number, positionZ: number, sizeXYZX: number, sizeXYZY: number, sizeXYZZ: number, heading: number, flags: EBlockingObjectFlags | number = 7): void {
	const updateNavmeshBlockingObject_result = Citizen.invokeNative<void>('0xD9ECC9BB146EA4A4', objectId, positionX, positionY, positionZ, sizeXYZX, sizeXYZY, sizeXYZZ, heading, flags);
	return updateNavmeshBlockingObject_result;
}