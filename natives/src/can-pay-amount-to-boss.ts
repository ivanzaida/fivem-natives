import { IntRef } from '@ivanzaida/structures'

/**
 * MONEY:CAN_PAY_AMOUNT_TO_BOSS
 *
 * 0x6B3C9FC090DA905D

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} amount
 * @param {IntRef} reason [Ref]
 * @returns {boolean}  
 */
export function canPayAmountToBoss(bossId1: number, bossId2: number, amount: number, reason: IntRef /* ptr */): boolean {
	const canPayAmountToBoss_result = Citizen.invokeNative<boolean>('0x6B3C9FC090DA905D', bossId1, bossId2, amount, reason.dataView);
	return canPayAmountToBoss_result;
}