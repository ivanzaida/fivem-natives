/**
 * MISC:PRELOAD_CLOUD_HAT
 *
 * 0xC540300DE977409D

 * 
 * the cloudhat will be released from memory when it either transitions out normaly after use, or RELEASE_PRELOAD_CLOUD_HAT() is called
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} cloudHatName
 */
export function preloadCloudHat(cloudHatName: string): void {
	const preloadCloudHat_result = Citizen.invokeNative<void>('0xC540300DE977409D', cloudHatName);
	return preloadCloudHat_result;
}