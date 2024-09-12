/**
 * CFX:SCAN_RESOURCE_ROOT
 *
 * 0X636F097F

 * Scans the resources in the specified resource root. This function is only available in the 'monitor mode' process and isnot available for user resources.
 * 
 * ------------------------------------------------------------------
 * @param {string} rootPath The resource directory to scan.
 * @param {Function} callback A callback that will receive an object with results.
 */
export function scanResourceRoot(rootPath: string, callback: Function): void {
	const scanResourceRoot_result = Citizen.invokeNative<void>('0X636F097F', rootPath, callback);
	return scanResourceRoot_result;
}