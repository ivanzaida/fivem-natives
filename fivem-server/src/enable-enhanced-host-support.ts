/**
 * CFX:ENABLE_ENHANCED_HOST_SUPPORT
 *
 * 0xF97B1C93

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enabled
 */
export function enableEnhancedHostSupport(enabled: boolean): void {
	const enableEnhancedHostSupport_result = Citizen.invokeNative<void>('0xF97B1C93', enabled);
	return enableEnhancedHostSupport_result;
}