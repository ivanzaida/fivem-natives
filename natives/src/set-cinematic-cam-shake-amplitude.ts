/**
 * CAM:SET_CINEMATIC_CAM_SHAKE_AMPLITUDE
 *
 * 0xAD0E20104A60B568

 * 
 * ------------------------------------------------------------------
 * @param {number} amplitudeScalar Can be used to increase or decrease the amplitude of the shake effect.
 */
export function setCinematicCamShakeAmplitude(amplitudeScalar: number = 1): void {
	const setCinematicCamShakeAmplitude_result = Citizen.invokeNative<void>('0xAD0E20104A60B568', amplitudeScalar);
	return setCinematicCamShakeAmplitude_result;
}