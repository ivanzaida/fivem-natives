/**
 * NETWORK:TEXTURE_DOWNLOAD_RELEASE
 *
 * 0x988DAD0F0370C94E

 * 
 * Releases the reference script had to this texture. This command must to be called when the texture is no longer
 * needed.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} textureDownloadHandle
 */
export function textureDownloadRelease(textureDownloadHandle: number): void {
	const textureDownloadRelease_result = Citizen.invokeNative<void>('0x988DAD0F0370C94E', textureDownloadHandle);
	return textureDownloadRelease_result;
}