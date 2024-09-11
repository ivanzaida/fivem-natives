/**
 * GRAPHICS:REMOVE_PARTICLE_FX_IN_RANGE
 *
 * 0xA69DCC67B2B61AD1

 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} range
 */
export function removeParticleFxInRange(posX: number, posY: number, posZ: number, range: number): void {
	const removeParticleFxInRange_result = Citizen.invokeNative<void>('0xA69DCC67B2B61AD1', posX, posY, posZ, range);
	return removeParticleFxInRange_result;
}