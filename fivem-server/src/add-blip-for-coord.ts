import { BlipIndex } from '@ivanzaida/structures'

/**
 * CFX:ADD_BLIP_FOR_COORD
 *
 * 0xC6F43D0E

 * 
 * Creates an orange ( default ) Blip-object. Returns a Blip-object which can then be modified.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x The X coordinate to create the blip on.
 * @param {number} y The Y coordinate.
 * @param {number} z The Z coordinate.
 * @returns {BlipIndex}  
 */
export function addBlipForCoord(x: number, y: number, z: number): BlipIndex {
	const addBlipForCoord_result = Citizen.invokeNative<BlipIndex>('0xC6F43D0E', x, y, z);
	return addBlipForCoord_result;
}