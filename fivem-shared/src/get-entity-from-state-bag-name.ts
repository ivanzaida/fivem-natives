import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_FROM_STATE_BAG_NAME
 *
 * 0x4BDF1867

 * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#_0x5BA35AAF).
 * 
 * ------------------------------------------------------------------
 * @param {string} bagName An internal state bag ID from the argument to a state bag change handler.
 * @returns {EntityIndex}  The entity handle or 0 if the state bag name did not refer to an entity, or the entity does not exist.
 */
export function getEntityFromStateBagName(bagName: string): EntityIndex {
	const getEntityFromStateBagName_result = Citizen.invokeNative<EntityIndex>('0x4BDF1867', bagName);
	return getEntityFromStateBagName_result;
}