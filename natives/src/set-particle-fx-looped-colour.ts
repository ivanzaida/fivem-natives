import { PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_PARTICLE_FX_LOOPED_COLOUR
 *
 * 0x6154AB43546C6437

 * 
 * only works on some fx's
 * 
 * p4 = 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PtfxId} ptfxId
 * @param {number} colR
 * @param {number} colG
 * @param {number} colB
 * @param {boolean} localOnly
 */
export function setParticleFxLoopedColour(ptfxId: PtfxId, colR: number, colG: number, colB: number, localOnly: boolean = false): void {
	const setParticleFxLoopedColour_result = Citizen.invokeNative<void>('0x6154AB43546C6437', ptfxId, colR, colG, colB, localOnly);
	return setParticleFxLoopedColour_result;
}