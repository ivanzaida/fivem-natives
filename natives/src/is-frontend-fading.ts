/**
 * MISC:IS_FRONTEND_FADING
 *
 * 0x114ABA9988FF784B

 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isFrontendFading(): boolean {
	const isFrontendFading_result = Citizen.invokeNative<boolean>('0x114ABA9988FF784B', );
	return isFrontendFading_result;
}