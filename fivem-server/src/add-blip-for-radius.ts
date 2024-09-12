import { BlipIndex } from '@ivanzaida/structures'

/**
 * CFX:ADD_BLIP_FOR_RADIUS
 *
 * 0x4626756C

 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} size
 * @returns {BlipIndex}  
 */
export function addBlipForRadius(coorsX: number, coorsY: number, coorsZ: number, size: number): BlipIndex {
	const addBlipForRadius_result = Citizen.invokeNative<BlipIndex>('0x4626756C', coorsX, coorsY, coorsZ, size);
	return addBlipForRadius_result;
}