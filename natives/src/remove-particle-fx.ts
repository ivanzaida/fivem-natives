import { PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:REMOVE_PARTICLE_FX
 *
 * 0x5301FEC6BB8F21DF

 * 
 * ------------------------------------------------------------------
 * @param {PtfxId} ptfxId
 * @param {boolean} localOnly
 */
export function removeParticleFx(ptfxId: PtfxId, localOnly: boolean = false): void {
	const removeParticleFx_result = Citizen.invokeNative<void>('0x5301FEC6BB8F21DF', ptfxId, localOnly);
	return removeParticleFx_result;
}