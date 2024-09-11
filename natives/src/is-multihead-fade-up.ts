/**
 * CUTSCENE:IS_MULTIHEAD_FADE_UP
 *
 * 0x4A0B7E53EBC937D5

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMultiheadFadeUp(): boolean {
	const isMultiheadFadeUp_result = Citizen.invokeNative<boolean>('0x4A0B7E53EBC937D5', );
	return isMultiheadFadeUp_result;
}