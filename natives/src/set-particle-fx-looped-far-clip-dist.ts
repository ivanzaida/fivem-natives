import { PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_PARTICLE_FX_LOOPED_FAR_CLIP_DIST
 *
 * 0xC3E3C19E6844ABAB

 * 
 * ------------------------------------------------------------------
 * @param {PtfxId} ptfxId
 * @param {number} farClipDist
 */
export function setParticleFxLoopedFarClipDist(ptfxId: PtfxId, farClipDist: number): void {
	const setParticleFxLoopedFarClipDist_result = Citizen.invokeNative<void>('0xC3E3C19E6844ABAB', ptfxId, farClipDist);
	return setParticleFxLoopedFarClipDist_result;
}