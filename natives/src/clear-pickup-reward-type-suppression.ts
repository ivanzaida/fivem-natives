import { EPickupRewardType } from '@ivanzaida/structures'

/**
 * OBJECT:CLEAR_PICKUP_REWARD_TYPE_SUPPRESSION
 *
 * 0xB1FED11AF36ECDD3

 * 
 * ------------------------------------------------------------------
 * @param {EPickupRewardType} pickupFlag
 */
export function clearPickupRewardTypeSuppression(pickupFlag: EPickupRewardType | number): void {
	const clearPickupRewardTypeSuppression_result = Citizen.invokeNative<void>('0xB1FED11AF36ECDD3', pickupFlag);
	return clearPickupRewardTypeSuppression_result;
}