/**
 * CAM:IS_GAMEPLAY_CAM_LOOKING_BEHIND
 *
 * 0xDD851254D8C7D338

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isGameplayCamLookingBehind(): boolean {
	const isGameplayCamLookingBehind_result = Citizen.invokeNative<boolean>('0xDD851254D8C7D338', );
	return isGameplayCamLookingBehind_result;
}