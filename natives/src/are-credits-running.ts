/**
 * MISC:ARE_CREDITS_RUNNING
 *
 * 0x45E146165ACF587E

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function areCreditsRunning(): boolean {
	const areCreditsRunning_result = Citizen.invokeNative<boolean>('0x45E146165ACF587E', );
	return areCreditsRunning_result;
}