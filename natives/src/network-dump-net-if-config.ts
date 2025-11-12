/**
 * NETWORK:NETWORK_DUMP_NET_IF_CONFIG
 *
 * 0x3A5F05A23D5B4F88

 * 
 * Does nothing (it's a nullsub).
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkDumpNetIfConfig(): void {
	const networkDumpNetIfConfig_result = Citizen.invokeNative<void>('0x3A5F05A23D5B4F88', );
	return networkDumpNetIfConfig_result;
}