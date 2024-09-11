import { BlipIndex } from '@ivanzaida/structures'

/**
 * CFX:ADD_BLIP_FOR_COORD
 *
 * 0XC6F43D0E

 * Creates an orange ( default ) Blip-object. Returns a Blip-object which can then be modified.
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @returns {BlipIndex}  
 */
export function addBlipForCoord(coorsX: number, coorsY: number, coorsZ: number): BlipIndex {
	const addBlipForCoord_result = Citizen.invokeNative<BlipIndex>('0XC6F43D0E', coorsX, coorsY, coorsZ);
	return addBlipForCoord_result;
}