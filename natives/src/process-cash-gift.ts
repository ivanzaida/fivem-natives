import { IntRef, StringRef } from '@ivanzaida/structures'

/**
 * MONEY:PROCESS_CASH_GIFT
 *
 * 0x75C19185BEAE4AA9

 * 
 * This isn't a hash collision.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} result [Ref]
 * @param {IntRef} valueIsCredited [Ref]
 * @param {StringRef} outLabel [Ref]
 * @returns {string}  
 */
export function processCashGift(result: IntRef /* ptr */, valueIsCredited: IntRef /* ptr */, outLabel: StringRef /* ptr */): string {
	const processCashGift_result = Citizen.invokeNative<string>('0x75C19185BEAE4AA9', result.dataView, valueIsCredited.dataView, outLabel.dataView);
	return processCashGift_result;
}