import { ModelNames } from '@ivanzaida/structures'

/**
 * ENTITY:CREATE_FORCED_OBJECT
 *
 * 0x9D23D954FF4403CD

 * 
 * Sometimes (e.g. when following an NPC-driven vehicle ahead of you) it is necessary to force particular barriers to become real objects
 * so the vehicle you are following smashes through them properly rather than passing through without collision.
 * Creates a persistent force-to-object effect on map
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @param {ModelNames} modelHash
 * @param {boolean} surviveMapReload
 */
export function createForcedObject(posX: number, posY: number, posZ: number, radius: number, modelHash: ModelNames, surviveMapReload: boolean): void {
	const createForcedObject_result = Citizen.invokeNative<void>('0x9D23D954FF4403CD', posX, posY, posZ, radius, modelHash, surviveMapReload);
	return createForcedObject_result;
}