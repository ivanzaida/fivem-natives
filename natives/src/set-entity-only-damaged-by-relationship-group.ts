import { EntityIndex, ERelGroupHash } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_ONLY_DAMAGED_BY_RELATIONSHIP_GROUP
 *
 * 0x7AF89DBF250A2C27

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} onlyDamagedByRelGroup
 * @param {ERelGroupHash} relGroup
 */
export function setEntityOnlyDamagedByRelationshipGroup(entity: EntityIndex, onlyDamagedByRelGroup: boolean, relGroup: ERelGroupHash | number): void {
	const setEntityOnlyDamagedByRelationshipGroup_result = Citizen.invokeNative<void>('0x7AF89DBF250A2C27', entity, onlyDamagedByRelGroup, relGroup);
	return setEntityOnlyDamagedByRelationshipGroup_result;
}