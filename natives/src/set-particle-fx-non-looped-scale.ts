/**
 * GRAPHICS:SET_PARTICLE_FX_NON_LOOPED_SCALE
 *
 * 0xCB9A6C2693F6BC7D

 * 
 * ------------------------------------------------------------------
 * @param {number} scale
 */
export function setParticleFxNonLoopedScale(scale: number): void {
	const setParticleFxNonLoopedScale_result = Citizen.invokeNative<void>('0xCB9A6C2693F6BC7D', scale);
	return setParticleFxNonLoopedScale_result;
}