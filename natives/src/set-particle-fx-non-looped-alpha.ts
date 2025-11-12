/**
 * GRAPHICS:SET_PARTICLE_FX_NON_LOOPED_ALPHA
 *
 * 0x7C087208DD019397

 * 
 * Usage example for C#:
 * 
 * Function.Call(Hash.SET_PARTICLE_FX_NON_LOOPED_ALPHA, new InputArgument[] { 0.1f });
 * 
 * Note: the argument alpha ranges from 0.0f-1.0f !
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} colA
 */
export function setParticleFxNonLoopedAlpha(colA: number): void {
	const setParticleFxNonLoopedAlpha_result = Citizen.invokeNative<void>('0x7C087208DD019397', colA);
	return setParticleFxNonLoopedAlpha_result;
}