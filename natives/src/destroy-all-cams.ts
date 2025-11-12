/**
 * CAM:DESTROY_ALL_CAMS
 *
 * 0x3AA8CFEBC938A945

 * 
 * BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} shouldApplyAcrossAllThreads
 */
export function destroyAllCams(shouldApplyAcrossAllThreads: boolean = false): void {
	const destroyAllCams_result = Citizen.invokeNative<void>('0x3AA8CFEBC938A945', shouldApplyAcrossAllThreads);
	return destroyAllCams_result;
}