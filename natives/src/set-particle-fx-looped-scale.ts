import { PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_PARTICLE_FX_LOOPED_SCALE
 *
 * 0x8ABEEFFE3E33A4FA

 * 
 * ------------------------------------------------------------------
 * @param {PtfxId} ptfxId
 * @param {number} scale
 */
export function setParticleFxLoopedScale(ptfxId: PtfxId, scale: number): void {
	const setParticleFxLoopedScale_result = Citizen.invokeNative<void>('0x8ABEEFFE3E33A4FA', ptfxId, scale);
	return setParticleFxLoopedScale_result;
}