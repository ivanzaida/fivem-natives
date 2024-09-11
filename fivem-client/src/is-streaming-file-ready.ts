/**
 * CFX:IS_STREAMING_FILE_READY
 *
 * 0XA194934D

 * Experimental: This native may be altered or removed in future versions of CitizenFX without warning.Returns whether an asynchronous streaming file registration completed.
 * 
 * ------------------------------------------------------------------
 * @param {string} registerAs The file name to check, for example asset.ydr.
 * @returns {boolean}  Whether or not the streaming file has been registered.
 */
export function isStreamingFileReady(registerAs: string): boolean {
	const isStreamingFileReady_result = Citizen.invokeNative<boolean>('0XA194934D', registerAs);
	return isStreamingFileReady_result;
}