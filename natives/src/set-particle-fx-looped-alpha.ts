import { PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_PARTICLE_FX_LOOPED_ALPHA
 *
 * 0x1C53039135495CAE

 * 
 * ------------------------------------------------------------------
 * @param {PtfxId} ptfxId
 * @param {number} colA
 */
export function setParticleFxLoopedAlpha(ptfxId: PtfxId, colA: number): void {
	const setParticleFxLoopedAlpha_result = Citizen.invokeNative<void>('0x1C53039135495CAE', ptfxId, colA);
	return setParticleFxLoopedAlpha_result;
}