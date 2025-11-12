/**
 * STREAMING:REMAP_LODSCALE_RANGE_THIS_FRAME
 *
 * 0x9091BFD6A05E20ED

 * 
 * overrides the LOD scale. for example if you have specific camera FOV behaviour that result
 * in a LOD scale between fOldMin and fOldMax, we take the camera-fov-desired LOD scale and instead calculate
 * a new LOD scale in the range fNewMin to fNewMax.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} oldMin
 * @param {number} oldMax
 * @param {number} newMin
 * @param {number} newMax
 */
export function remapLodscaleRangeThisFrame(oldMin: number, oldMax: number, newMin: number, newMax: number): void {
	const remapLodscaleRangeThisFrame_result = Citizen.invokeNative<void>('0x9091BFD6A05E20ED', oldMin, oldMax, newMin, newMax);
	return remapLodscaleRangeThisFrame_result;
}