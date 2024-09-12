/**
 * CFX:REGISTER_STREAMING_FILE_FROM_CACHE
 *
 * 0xCEAD2D4B

 * Experimental: This native may be altered or removed in future versions of CitizenFX without warning.Registers a dynamic streaming asset from the server with the GTA streaming module system.
 * 
 * ------------------------------------------------------------------
 * @param {string} resourceName The resource to add the asset to.
 * @param {string} fileName A file name in the resource.
 * @param {string} cacheString The string returned from REGISTER_RESOURCE_ASSET on the server.
 */
export function registerStreamingFileFromCache(resourceName: string, fileName: string, cacheString: string): void {
	const registerStreamingFileFromCache_result = Citizen.invokeNative<void>('0xCEAD2D4B', resourceName, fileName, cacheString);
	return registerStreamingFileFromCache_result;
}