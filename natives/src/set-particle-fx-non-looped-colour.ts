/**
 * GRAPHICS:SET_PARTICLE_FX_NON_LOOPED_COLOUR
 *
 * 0x857B645DF072448C

 * 
 * only works on some fx's, not networked
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} colR
 * @param {number} colG
 * @param {number} colB
 */
export function setParticleFxNonLoopedColour(colR: number, colG: number, colB: number): void {
	const setParticleFxNonLoopedColour_result = Citizen.invokeNative<void>('0x857B645DF072448C', colR, colG, colB);
	return setParticleFxNonLoopedColour_result;
}