/**
 * CAM:SET_GAMEPLAY_CAM_SHAKE_AMPLITUDE
 *
 * 0xB3CAD109683148E3

 * 
 * Sets the amplitude for the gameplay (i.e. 3rd or 1st) camera to shake. Used in script "drunk_controller.ysc.c4" to simulate making the player drunk.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amplitudeScalar Can be used to increase or decrease the amplitude of the shake effect.
 */
export function setGameplayCamShakeAmplitude(amplitudeScalar: number = 1): void {
	const setGameplayCamShakeAmplitude_result = Citizen.invokeNative<void>('0xB3CAD109683148E3', amplitudeScalar);
	return setGameplayCamShakeAmplitude_result;
}