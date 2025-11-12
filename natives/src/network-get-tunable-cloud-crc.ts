/**
 * NETWORK:NETWORK_GET_TUNABLE_CLOUD_CRC
 *
 * 0x0188C088397FF5B1

 * 
 * Actually returns the version (TUNABLE_VERSION)
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetTunableCloudCrc(): number {
	const networkGetTunableCloudCrc_result = Citizen.invokeNative<number>('0x0188C088397FF5B1', );
	return networkGetTunableCloudCrc_result;
}