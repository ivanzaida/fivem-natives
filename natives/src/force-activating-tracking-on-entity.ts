import { EntityIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:FORCE_ACTIVATING_TRACKING_ON_ENTITY
 *
 * 0x6E562EEC4008A0C5

 * 
 * Force the portal tracker for this entity to test as activating for the purposes of interior activation
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} value
 */
export function forceActivatingTrackingOnEntity(entity: EntityIndex, value: boolean): void {
	const forceActivatingTrackingOnEntity_result = Citizen.invokeNative<void>('0x6E562EEC4008A0C5', entity, value);
	return forceActivatingTrackingOnEntity_result;
}