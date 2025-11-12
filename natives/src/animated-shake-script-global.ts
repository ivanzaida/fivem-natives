/**
 * CAM:ANIMATED_SHAKE_SCRIPT_GLOBAL
 *
 * 0xAEA3DA36109D1029

 * 
 * CAM::ANIMATED_SHAKE_SCRIPT_GLOBAL("SHAKE_CAM_medium", "medium", "", 0.5f);
 * 
 * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} animDictionary
 * @param {string} animClipName
 * @param {string} shakeName
 * @param {number} amplitudeScalar Can be used to increase or decrease the amplitude of the shake effect.
 */
export function animatedShakeScriptGlobal(animDictionary: string, animClipName: string, shakeName: string, amplitudeScalar: number = 1): void {
	const animatedShakeScriptGlobal_result = Citizen.invokeNative<void>('0xAEA3DA36109D1029', animDictionary, animClipName, shakeName, amplitudeScalar);
	return animatedShakeScriptGlobal_result;
}