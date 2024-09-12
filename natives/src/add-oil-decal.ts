import { DecalId } from '@ivanzaida/structures'

/**
 * GRAPHICS:ADD_OIL_DECAL
 *
 * 0x55A40CDFD8F6BD17

 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} startSize
 * @param {number} endSize
 * @param {number} growRate
 * @returns {DecalId}  
 */
export function addOilDecal(posX: number, posY: number, posZ: number, startSize: number, endSize: number, growRate: number): DecalId {
	const addOilDecal_result = Citizen.invokeNative<DecalId>('0x55A40CDFD8F6BD17', posX, posY, posZ, startSize, endSize, growRate);
	return addOilDecal_result;
}