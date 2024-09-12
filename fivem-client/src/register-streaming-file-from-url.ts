/**
 * CFX:REGISTER_STREAMING_FILE_FROM_URL
 *
 * 0xF44BFB95

 * Experimental: This native may be altered or removed in future versions of CitizenFX without warning.Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.
 * 
 * ------------------------------------------------------------------
 * @param {string} registerAs The file name to register as, for example asset.ydr.
 * @param {string} url The URL to fetch the asset from.
 */
export function registerStreamingFileFromUrl(registerAs: string, url: string): void {
	const registerStreamingFileFromUrl_result = Citizen.invokeNative<void>('0xF44BFB95', registerAs, url);
	return registerStreamingFileFromUrl_result;
}