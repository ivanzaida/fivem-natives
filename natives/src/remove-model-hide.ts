import { ModelNames } from '@ivanzaida/structures'

/**
 * ENTITY:REMOVE_MODEL_HIDE
 *
 * 0xC94AE68759E1B3BD

 * 
 * Removes a previously created model hide, if one exists and matches exactly
 * 
 * This native makes entities visible that are hidden by the native CREATE_MODEL_HIDE.
 * p5 should be false, true does nothing
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @param {ModelNames} modelHash
 * @param {boolean} lazy Is true, the persistent hide is removed but not actually acted on immediately  the area would need to stream out and back in again to take effect
 */
export function removeModelHide(posX: number, posY: number, posZ: number, radius: number, modelHash: ModelNames, lazy: boolean = false): void {
	const removeModelHide_result = Citizen.invokeNative<void>('0xC94AE68759E1B3BD', posX, posY, posZ, radius, modelHash, lazy);
	return removeModelHide_result;
}