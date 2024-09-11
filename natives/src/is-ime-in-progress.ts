/**
 * HUD:IS_IME_IN_PROGRESS
 *
 * 0xFC57ADE8D9DD22DC

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isImeInProgress(): boolean {
	const isImeInProgress_result = Citizen.invokeNative<boolean>('0xFC57ADE8D9DD22DC', );
	return isImeInProgress_result;
}