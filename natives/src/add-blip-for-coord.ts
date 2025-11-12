import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:ADD_BLIP_FOR_COORD
 *
 * 0x34864AB7DA700AA6

 * 
 * Creates an orange ( default ) Blip-object. Returns a Blip-object which can then be modified.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @returns {BlipIndex}  
 */
export function addBlipForCoord(coorsX: number, coorsY: number, coorsZ: number): BlipIndex {
	const addBlipForCoord_result = Citizen.invokeNative<BlipIndex>('0x34864AB7DA700AA6', coorsX, coorsY, coorsZ);
	return addBlipForCoord_result;
}