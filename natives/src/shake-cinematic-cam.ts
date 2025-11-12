/**
 * CAM:SHAKE_CINEMATIC_CAM
 *
 * 0xE31C735DEE2BF705

 * 
 * p0 argument found in the b617d scripts: "DRUNK_SHAKE"
 * 
 * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} shakeName
 * @param {number} amplitudeScalar Can be used to increase or decrease the amplitude of the shake effect.
 */
export function shakeCinematicCam(shakeName: string, amplitudeScalar: number = 1): void {
	const shakeCinematicCam_result = Citizen.invokeNative<void>('0xE31C735DEE2BF705', shakeName, amplitudeScalar);
	return shakeCinematicCam_result;
}