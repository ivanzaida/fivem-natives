import { ModelNames } from '@ivanzaida/structures'

/**
 * ENTITY:CREATE_MODEL_HIDE
 *
 * 0xE226F16D30AF5945

 * 
 * This is intended as a replacement for the old commands for disabling visibility and collisions for an entity.
 * Improvements include support for objects, and support for automatic persistence across dummy conversion, map data streaming etc.
 * Creates an active model hide for a building or object
 * 
 * p5 = sets as true in scripts
 * Same as the comment for CREATE_MODEL_SWAP unless for some reason p5 affects it this only works with objects as well.
 * 
 * Network players do not see changes done with this.
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
export function createModelHide(posX: number, posY: number, posZ: number, radius: number, modelHash: ModelNames, surviveMapReload: boolean): void {
	const createModelHide_result = Citizen.invokeNative<void>('0xE226F16D30AF5945', posX, posY, posZ, radius, modelHash, surviveMapReload);
	return createModelHide_result;
}