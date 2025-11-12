import { EntityIndex } from '@ivanzaida/structures'

/**
 * OBJECT:IS_OBJECT_PARTIALLY_INSIDE_GARAGE
 *
 * 0x805A7BBF801B49D0

 * 
 * Despite the name, it does work for any entity type.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} garageHash
 * @param {EntityIndex} entity
 * @param {number} box
 * @returns {boolean}  
 */
export function isObjectPartiallyInsideGarage(garageHash: number, entity: EntityIndex, box: number = 1): boolean {
	const isObjectPartiallyInsideGarage_result = Citizen.invokeNative<boolean>('0x805A7BBF801B49D0', garageHash, entity, box);
	return isObjectPartiallyInsideGarage_result;
}