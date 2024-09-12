import { PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_PARTICLE_FX_LOOPED_EVOLUTION
 *
 * 0xABAD28B5A427340D

 * 
 * ------------------------------------------------------------------
 * @param {PtfxId} ptfxId
 * @param {string} evoName
 * @param {number} evoVal
 * @param {boolean} localOnly
 */
export function setParticleFxLoopedEvolution(ptfxId: PtfxId, evoName: string, evoVal: number, localOnly: boolean = false): void {
	const setParticleFxLoopedEvolution_result = Citizen.invokeNative<void>('0xABAD28B5A427340D', ptfxId, evoName, evoVal, localOnly);
	return setParticleFxLoopedEvolution_result;
}