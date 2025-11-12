import { ModelNames } from '@ivanzaida/structures'

/**
 * ENTITY:REMOVE_MODEL_SWAP
 *
 * 0xD80C3522AC21FDB8

 * 
 * Removes a previously created model swap, if one exists and matches exactly
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @param {ModelNames} oldModelHash
 * @param {ModelNames} newModelHash
 * @param {boolean} lazy Is true, the persistent swap is removed but not actually acted on immediately  the area would need to stream out and back in again to take effect
 */
export function removeModelSwap(posX: number, posY: number, posZ: number, radius: number, oldModelHash: ModelNames, newModelHash: ModelNames, lazy: boolean = false): void {
	const removeModelSwap_result = Citizen.invokeNative<void>('0xD80C3522AC21FDB8', posX, posY, posZ, radius, oldModelHash, newModelHash, lazy);
	return removeModelSwap_result;
}