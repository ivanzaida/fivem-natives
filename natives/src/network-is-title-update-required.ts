/**
 * NETWORK:NETWORK_IS_TITLE_UPDATE_REQUIRED
 *
 * 0x6026EB0A2A2F509E

 * 
 * Checks if title update is required
 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTitleUpdateRequired(): boolean {
	const networkIsTitleUpdateRequired_result = Citizen.invokeNative<boolean>('0x6026EB0A2A2F509E', );
	return networkIsTitleUpdateRequired_result;
}