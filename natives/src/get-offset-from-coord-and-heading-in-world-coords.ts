import { Vector3 } from '@ivanzaida/structures'

/**
 * OBJECT:GET_OFFSET_FROM_COORD_AND_HEADING_IN_WORLD_COORDS
 *
 * 0xF10F2A2453AF1DFB

 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} heading
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @returns {Vector3}  
 */
export function getOffsetFromCoordAndHeadingInWorldCoords(posX: number, posY: number, posZ: number, heading: number, offsetX: number, offsetY: number, offsetZ: number): Vector3 {
	const getOffsetFromCoordAndHeadingInWorldCoords_result = Citizen.invokeNative<Vector3>('0xF10F2A2453AF1DFB', posX, posY, posZ, heading, offsetX, offsetY, offsetZ);
	return getOffsetFromCoordAndHeadingInWorldCoords_result;
}