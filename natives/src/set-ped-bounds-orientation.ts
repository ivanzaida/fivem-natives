import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_BOUNDS_ORIENTATION
 *
 * 0xEABB1C18FA028606

 * 
 * Must be called each frame otherwise ped's mover capsule bound will blend back to the default orientation.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} pitch
 * @param {number} heading
 * @param {number} vecOffsetX
 * @param {number} vecOffsetY
 * @param {number} vecOffsetZ
 */
export function setPedBoundsOrientation(ped: PedIndex, pitch: number, heading: number, vecOffsetX: number, vecOffsetY: number, vecOffsetZ: number): void {
	const setPedBoundsOrientation_result = Citizen.invokeNative<void>('0xEABB1C18FA028606', ped, pitch, heading, vecOffsetX, vecOffsetY, vecOffsetZ);
	return setPedBoundsOrientation_result;
}