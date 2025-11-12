import { ModelNames } from '@ivanzaida/structures'

/**
 * ENTITY:REMOVE_FORCED_OBJECT
 *
 * 0x66D6CECFEEC87130

 * 
 * Removes a previously created persistent force-to-object effect on map, if one exists and matches exactly
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @param {ModelNames} modelHash
 */
export function removeForcedObject(posX: number, posY: number, posZ: number, radius: number, modelHash: ModelNames): void {
	const removeForcedObject_result = Citizen.invokeNative<void>('0x66D6CECFEEC87130', posX, posY, posZ, radius, modelHash);
	return removeForcedObject_result;
}