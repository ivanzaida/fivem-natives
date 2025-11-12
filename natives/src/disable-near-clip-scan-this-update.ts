/**
 * CAM:DISABLE_NEAR_CLIP_SCAN_THIS_UPDATE
 *
 * 0x2BDEB13CCCC78384

 * 
 * Disables the (PS3-specific) scanning near-clip for this update only. This prevents the final rendered near-clip distance from being increased automatically when the extended frustum in front of the camera is free of collision. Note that use of this command may result in increased z-fighting on PS3, as the scanning near-clip is designed to reduce this.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function disableNearClipScanThisUpdate(): void {
	const disableNearClipScanThisUpdate_result = Citizen.invokeNative<void>('0x2BDEB13CCCC78384', );
	return disableNearClipScanThisUpdate_result;
}