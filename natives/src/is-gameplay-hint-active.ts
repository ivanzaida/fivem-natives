/**
 * CAM:IS_GAMEPLAY_HINT_ACTIVE
 *
 * 0xE37AC296E66C33AF

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isGameplayHintActive(): boolean {
	const isGameplayHintActive_result = Citizen.invokeNative<boolean>('0xE37AC296E66C33AF', );
	return isGameplayHintActive_result;
}