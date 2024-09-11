import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_ATTACHED_TO_ANY_PED
 *
 * 0x5B9219522937741D

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityAttachedToAnyPed(entity: EntityIndex): boolean {
	const isEntityAttachedToAnyPed_result = Citizen.invokeNative<boolean>('0x5B9219522937741D', entity);
	return isEntityAttachedToAnyPed_result;
}