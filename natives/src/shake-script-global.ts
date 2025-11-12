/**
 * CAM:SHAKE_SCRIPT_GLOBAL
 *
 * 0xC62E5824404F8836

 * 
 * CAM::SHAKE_SCRIPT_GLOBAL("HAND_SHAKE", 0.2);
 * 
 * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} shakeName
 * @param {number} amplitudeScalar Can be used to increase or decrease the amplitude of the shake effect.
 */
export function shakeScriptGlobal(shakeName: string, amplitudeScalar: number = 1): void {
	const shakeScriptGlobal_result = Citizen.invokeNative<void>('0xC62E5824404F8836', shakeName, amplitudeScalar);
	return shakeScriptGlobal_result;
}