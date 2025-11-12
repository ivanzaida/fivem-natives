import { EntityIndex } from '@ivanzaida/structures'

/**
 * OBJECT:IS_OBJECT_ENTIRELY_INSIDE_GARAGE
 *
 * 0x659143E4AE5A351B

 * 
 * Despite the name, it does work for any entity type.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} garageHash
 * @param {EntityIndex} entity
 * @param {number} margin
 * @param {number} box
 * @returns {boolean}  
 */
export function isObjectEntirelyInsideGarage(garageHash: number, entity: EntityIndex, margin: number = 0, box: number = 1): boolean {
	const isObjectEntirelyInsideGarage_result = Citizen.invokeNative<boolean>('0x659143E4AE5A351B', garageHash, entity, margin, box);
	return isObjectEntirelyInsideGarage_result;
}