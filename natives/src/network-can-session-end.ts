/**
 * NETWORK:NETWORK_CAN_SESSION_END
 *
 * 0x2CA491A425D49E0D

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkCanSessionEnd(): boolean {
	const networkCanSessionEnd_result = Citizen.invokeNative<boolean>('0x2CA491A425D49E0D', );
	return networkCanSessionEnd_result;
}