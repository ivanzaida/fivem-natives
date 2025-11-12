/**
 * MISC:UNLOAD_CLOUD_HAT
 *
 * 0xE6FCB8178DFE489F

 * 
 * this is to help with tralers, etc. please don't use this in general
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} cloudHatName
 * @param {number} transitionTime Amount of time to fade out the cloudhat, default is 0 seconds.
 */
export function unloadCloudHat(cloudHatName: string, transitionTime: number = 0): void {
	const unloadCloudHat_result = Citizen.invokeNative<void>('0xE6FCB8178DFE489F', cloudHatName, transitionTime);
	return unloadCloudHat_result;
}