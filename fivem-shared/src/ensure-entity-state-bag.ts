import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:ENSURE_ENTITY_STATE_BAG
 *
 * 0x3BB78F05

 * Internal function for ensuring an entity has a state bag.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function ensureEntityStateBag(entity: EntityIndex): void {
	const ensureEntityStateBag_result = Citizen.invokeNative<void>('0x3BB78F05', entity);
	return ensureEntityStateBag_result;
}