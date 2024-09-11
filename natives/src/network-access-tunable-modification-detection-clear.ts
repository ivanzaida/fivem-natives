/**
 * NETWORK:NETWORK_ACCESS_TUNABLE_MODIFICATION_DETECTION_CLEAR
 *
 * 0x18CACC03B0B46CA9

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkAccessTunableModificationDetectionClear(): boolean {
	const networkAccessTunableModificationDetectionClear_result = Citizen.invokeNative<boolean>('0x18CACC03B0B46CA9', );
	return networkAccessTunableModificationDetectionClear_result;
}