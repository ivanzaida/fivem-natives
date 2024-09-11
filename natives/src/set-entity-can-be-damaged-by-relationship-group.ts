import { EntityIndex, ERelGroupHash } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_CAN_BE_DAMAGED_BY_RELATIONSHIP_GROUP
 *
 * 0x5355DCB5D35ADF0F

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} allowDamagedByRelGroup
 * @param {ERelGroupHash} relGroup
 */
export function setEntityCanBeDamagedByRelationshipGroup(entity: EntityIndex, allowDamagedByRelGroup: boolean, relGroup: ERelGroupHash | number): void {
	const setEntityCanBeDamagedByRelationshipGroup_result = Citizen.invokeNative<void>('0x5355DCB5D35ADF0F', entity, allowDamagedByRelGroup, relGroup);
	return setEntityCanBeDamagedByRelationshipGroup_result;
}