/**
 * HUD:IS_WARNING_MESSAGE_ACTIVE
 *
 * 0xB11671B812399BA2

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isWarningMessageActive(): boolean {
	const isWarningMessageActive_result = Citizen.invokeNative<boolean>('0xB11671B812399BA2', );
	return isWarningMessageActive_result;
}