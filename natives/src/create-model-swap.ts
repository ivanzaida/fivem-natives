import { ModelNames } from '@ivanzaida/structures'

/**
 * ENTITY:CREATE_MODEL_SWAP
 *
 * 0x7C601010148C8DDB

 * 
 * This is intended as a replacement for the old building swap system. Improvements include support for objects, and
 * support for automatic persistence across dummy conversion, map data streaming etc.
 * Creates an active model swap for a building or object
 * 
 * Only works with objects!
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @param {ModelNames} oldModelHash
 * @param {ModelNames} newModelHash
 * @param {boolean} surviveMapReload
 */
export function createModelSwap(posX: number, posY: number, posZ: number, radius: number, oldModelHash: ModelNames, newModelHash: ModelNames, surviveMapReload: boolean): void {
	const createModelSwap_result = Citizen.invokeNative<void>('0x7C601010148C8DDB', posX, posY, posZ, radius, oldModelHash, newModelHash, surviveMapReload);
	return createModelSwap_result;
}