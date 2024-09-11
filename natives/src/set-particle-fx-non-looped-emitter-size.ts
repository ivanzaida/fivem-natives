/**
 * GRAPHICS:SET_PARTICLE_FX_NON_LOOPED_EMITTER_SIZE
 *
 * 0x1B4B0BAF27CD18DB

 * 
 * ------------------------------------------------------------------
 * @param {number} overrideSizeX
 * @param {number} overrideSizeY
 * @param {number} overrideSizeZ
 */
export function setParticleFxNonLoopedEmitterSize(overrideSizeX: number, overrideSizeY: number, overrideSizeZ: number): void {
	const setParticleFxNonLoopedEmitterSize_result = Citizen.invokeNative<void>('0x1B4B0BAF27CD18DB', overrideSizeX, overrideSizeY, overrideSizeZ);
	return setParticleFxNonLoopedEmitterSize_result;
}