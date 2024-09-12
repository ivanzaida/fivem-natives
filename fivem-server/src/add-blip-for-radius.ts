import { BlipIndex } from '@ivanzaida/structures'

/**
 * CFX:ADD_BLIP_FOR_RADIUS
 *
 * 0x4626756C

 * 
 * ------------------------------------------------------------------
 * @param {number} posX The x position of the blip (you can also send a vector3 instead of the bulk coordinates)
 * @param {number} posY The y position of the blip (you can also send a vector3 instead of the bulk coordinates)
 * @param {number} posZ The z position of the blip (you can also send a vector3 instead of the bulk coordinates)
 * @param {number} radius The number that defines the radius of the blip circle
 * @returns {BlipIndex}  
 */
export function addBlipForRadius(posX: number, posY: number, posZ: number, radius: number): BlipIndex {
	const addBlipForRadius_result = Citizen.invokeNative<BlipIndex>('0x4626756C', posX, posY, posZ, radius);
	return addBlipForRadius_result;
}