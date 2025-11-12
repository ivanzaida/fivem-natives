/**
 * CAM:SHAKE_GAMEPLAY_CAM
 *
 * 0xD5681045964A2975

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
 * @param {string} shakeName
 * @param {number} amplitudeScalar Can be used to increase or decrease the amplitude of the shake effect.
 */
export function shakeGameplayCam(shakeName: string, amplitudeScalar: number = 1): void {
	const shakeGameplayCam_result = Citizen.invokeNative<void>('0xD5681045964A2975', shakeName, amplitudeScalar);
	return shakeGameplayCam_result;
}