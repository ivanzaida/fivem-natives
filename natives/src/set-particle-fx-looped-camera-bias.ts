/**
 * GRAPHICS:_SET_PARTICLE_FX_LOOPED_CAMERA_BIAS
 *
 * 0x4100BF0346A8D2C3

 * 
 * ------------------------------------------------------------------
 */
export function setParticleFxLoopedCameraBias(): void {
	const setParticleFxLoopedCameraBias_result = Citizen.invokeNative<void>('0x4100BF0346A8D2C3', );
	return setParticleFxLoopedCameraBias_result;
}