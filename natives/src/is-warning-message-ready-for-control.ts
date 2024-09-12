/**
 * HUD:IS_WARNING_MESSAGE_READY_FOR_CONTROL
 *
 * 0xFE2A21CD2B0A3547

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isWarningMessageReadyForControl(): boolean {
	const isWarningMessageReadyForControl_result = Citizen.invokeNative<boolean>('0xFE2A21CD2B0A3547', );
	return isWarningMessageReadyForControl_result;
}