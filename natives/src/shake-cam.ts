import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SHAKE_CAM
 *
 * 0x2A09425009DAD0F5

 * 
 * Possible shake types (updated b617d):
 * 
 * DEATH_FAIL_IN_EFFECT_SHAKE
 * DRUNK_SHAKE
 * FAMILY5_DRUG_TRIP_SHAKE
 * HAND_SHAKE
 * JOLT_SHAKE
 * LARGE_EXPLOSION_SHAKE
 * MEDIUM_EXPLOSION_SHAKE
 * SMALL_EXPLOSION_SHAKE
 * ROAD_VIBRATION_SHAKE
 * SKY_DIVING_SHAKE
 * VIBRATE_SHAKE
 * 
 * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {string} shakeName
 * @param {number} amplitudeScalar Can be used to increase or decrease the amplitude of the shake effect.
 */
export function shakeCam(camera: CameraIndex, shakeName: string, amplitudeScalar: number = 1): void {
	const shakeCam_result = Citizen.invokeNative<void>('0x2A09425009DAD0F5', camera, shakeName, amplitudeScalar);
	return shakeCam_result;
}