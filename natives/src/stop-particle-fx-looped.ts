import { PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:STOP_PARTICLE_FX_LOOPED
 *
 * 0x182120534CCF9023

 * 
 * The stopped effect will automatically clean itself up once stopped.
 * 
 * p1 is always 0 in the native scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PtfxId} ptfxId
 * @param {boolean} localOnly
 */
export function stopParticleFxLooped(ptfxId: PtfxId, localOnly: boolean = false): void {
	const stopParticleFxLooped_result = Citizen.invokeNative<void>('0x182120534CCF9023', ptfxId, localOnly);
	return stopParticleFxLooped_result;
}