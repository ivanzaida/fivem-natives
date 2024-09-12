import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_NO_LONGER_NEEDED
 *
 * 0x246563FFA6EA9A50

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} assert
 */
export function networkSetNoLongerNeeded(entity: EntityIndex, assert: boolean): void {
	const networkSetNoLongerNeeded_result = Citizen.invokeNative<void>('0x246563FFA6EA9A50', entity, assert);
	return networkSetNoLongerNeeded_result;
}