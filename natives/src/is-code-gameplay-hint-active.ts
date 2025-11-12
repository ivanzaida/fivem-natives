/**
 * CAM:IS_CODE_GAMEPLAY_HINT_ACTIVE
 *
 * 0xD4CCFE5409D13C37

 * 
 * A code gameplay hint is a hint activated by code, hints are based on a first come, fist served basis.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isCodeGameplayHintActive(): boolean {
	const isCodeGameplayHintActive_result = Citizen.invokeNative<boolean>('0xD4CCFE5409D13C37', );
	return isCodeGameplayHintActive_result;
}