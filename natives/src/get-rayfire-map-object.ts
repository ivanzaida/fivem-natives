import { RayfireIndex } from '@ivanzaida/structures'

/**
 * OBJECT:GET_RAYFIRE_MAP_OBJECT
 *
 * 0xC8C12645F5A0E13B

 * 
 * Example:
 * OBJECT::GET_RAYFIRE_MAP_OBJECT(-809.9619750976562, 170.919, 75.7406997680664, 3.0, "des_tvsmash");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @param {string} rayfireName
 * @returns {RayfireIndex}  
 */
export function getRayfireMapObject(posX: number, posY: number, posZ: number, radius: number, rayfireName: string): RayfireIndex {
	const getRayfireMapObject_result = Citizen.invokeNative<RayfireIndex>('0xC8C12645F5A0E13B', posX, posY, posZ, radius, rayfireName);
	return getRayfireMapObject_result;
}