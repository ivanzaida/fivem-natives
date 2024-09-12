/**
 * CFX:REGISTER_STREAMING_FILE_FROM_KVS
 *
 * 0x1493DCC1

 * Experimental: This native may be altered or removed in future versions of CitizenFX without warning.Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
 * 
 * ------------------------------------------------------------------
 * @param {string} kvsKey The KVP key in the current resource to register as an asset.
 */
export function registerStreamingFileFromKvs(kvsKey: string): void {
	const registerStreamingFileFromKvs_result = Citizen.invokeNative<void>('0x1493DCC1', kvsKey);
	return registerStreamingFileFromKvs_result;
}