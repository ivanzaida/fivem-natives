/**
 * GRAPHICS:ADD_PETROL_TRAIL_DECAL_INFO
 *
 * 0x83993C32C04DE125

 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} alphaMult
 */
export function addPetrolTrailDecalInfo(posX: number, posY: number, posZ: number, alphaMult: number): void {
	const addPetrolTrailDecalInfo_result = Citizen.invokeNative<void>('0x83993C32C04DE125', posX, posY, posZ, alphaMult);
	return addPetrolTrailDecalInfo_result;
}