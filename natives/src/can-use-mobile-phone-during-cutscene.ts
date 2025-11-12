/**
 * CUTSCENE:CAN_USE_MOBILE_PHONE_DURING_CUTSCENE
 *
 * 0xAF078BC665CCACB9

 * 
 * Only returns true if a scene is playing and
 * SET_CAN_USE_MOBILE_PHONE_DURING_CUTSCENE has been called.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function canUseMobilePhoneDuringCutscene(): boolean {
	const canUseMobilePhoneDuringCutscene_result = Citizen.invokeNative<boolean>('0xAF078BC665CCACB9', );
	return canUseMobilePhoneDuringCutscene_result;
}