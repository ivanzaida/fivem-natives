/**
 * MISC:UNLOAD_ALL_CLOUD_HATS
 *
 * 0xB7C3B23648284A54

 * 
 * this is to help with tralers, etc. please don't use this in general
 * 
 * 
 * ------------------------------------------------------------------
 */
export function unloadAllCloudHats(): void {
	const unloadAllCloudHats_result = Citizen.invokeNative<void>('0xB7C3B23648284A54', );
	return unloadAllCloudHats_result;
}