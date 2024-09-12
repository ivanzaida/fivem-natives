import { DecalId } from '@ivanzaida/structures'

/**
 * GRAPHICS:ADD_PETROL_DECAL
 *
 * 0x037E59D590865D5A

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
export function addPetrolDecal(posX: number, posY: number, posZ: number, startSize: number, endSize: number, growRate: number): DecalId {
	const addPetrolDecal_result = Citizen.invokeNative<DecalId>('0x037E59D590865D5A', posX, posY, posZ, startSize, endSize, growRate);
	return addPetrolDecal_result;
}