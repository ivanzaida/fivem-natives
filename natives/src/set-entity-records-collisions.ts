import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_RECORDS_COLLISIONS
 *
 * 0x3A95CBA6857C4C37

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} recordsCollision
 */
export function setEntityRecordsCollisions(entity: EntityIndex, recordsCollision: boolean): void {
	const setEntityRecordsCollisions_result = Citizen.invokeNative<void>('0x3A95CBA6857C4C37', entity, recordsCollision);
	return setEntityRecordsCollisions_result;
}