/**
 * HUD:IS_FRONTEND_READY_FOR_CONTROL
 *
 * 0x1CF551BF1611A6F6

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isFrontendReadyForControl(): boolean {
	const isFrontendReadyForControl_result = Citizen.invokeNative<boolean>('0x1CF551BF1611A6F6', );
	return isFrontendReadyForControl_result;
}