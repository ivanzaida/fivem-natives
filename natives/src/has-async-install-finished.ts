/**
 * MISC:HAS_ASYNC_INSTALL_FINISHED
 *
 * 0xD7F2FC1281F868FD

 * 
 * Query of the async NG install has finished
 * 
 * Hardcoded to always return true.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasAsyncInstallFinished(): boolean {
	const hasAsyncInstallFinished_result = Citizen.invokeNative<boolean>('0xD7F2FC1281F868FD', );
	return hasAsyncInstallFinished_result;
}