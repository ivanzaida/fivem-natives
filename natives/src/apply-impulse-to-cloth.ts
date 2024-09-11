/**
 * PHYSICS:APPLY_IMPULSE_TO_CLOTH
 *
 * 0xCA8F3804D06FF7BF

 * 
 * ------------------------------------------------------------------
 * @param {number} posOldX
 * @param {number} posOldY
 * @param {number} posOldZ
 * @param {number} posNewX
 * @param {number} posNewY
 * @param {number} posNewZ
 * @param {number} impulse
 */
export function applyImpulseToCloth(posOldX: number, posOldY: number, posOldZ: number, posNewX: number, posNewY: number, posNewZ: number, impulse: number): void {
	const applyImpulseToCloth_result = Citizen.invokeNative<void>('0xCA8F3804D06FF7BF', posOldX, posOldY, posOldZ, posNewX, posNewY, posNewZ, impulse);
	return applyImpulseToCloth_result;
}