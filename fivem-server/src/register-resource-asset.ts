/**
 * CFX:REGISTER_RESOURCE_ASSET
 *
 * 0X9862B266

 * Experimental: This native may be altered or removed in future versions of CitizenFX without warning.Registers a cached resource asset with the resource system, similar to the automatic scanning of the `stream/` folder.
 * 
 * ------------------------------------------------------------------
 * @param {string} resourceName The resource to add the asset to.
 * @param {string} fileName A file name in the resource.
 * @returns {string}  A cache string to pass to `REGISTER_STREAMING_FILE_FROM_CACHE` on the client.
 */
export function registerResourceAsset(resourceName: string, fileName: string): string {
	const registerResourceAsset_result = Citizen.invokeNative<string>('0X9862B266', resourceName, fileName);
	return registerResourceAsset_result;
}