/**
 * STREAMING:IS_SWITCH_SKIPPING_DESCENT
 *
 * 0xE386B6872B2E38EF

 * 
 * returns true if active switch will skip the descent entirely
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isSwitchSkippingDescent(): boolean {
	const isSwitchSkippingDescent_result = Citizen.invokeNative<boolean>('0xE386B6872B2E38EF', );
	return isSwitchSkippingDescent_result;
}