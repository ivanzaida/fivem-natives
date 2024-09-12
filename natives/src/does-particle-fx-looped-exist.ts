import { PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:DOES_PARTICLE_FX_LOOPED_EXIST
 *
 * 0x9CFFB7009B578840

 * 
 * ------------------------------------------------------------------
 * @param {PtfxId} ptfxId
 * @returns {boolean}  
 */
export function doesParticleFxLoopedExist(ptfxId: PtfxId): boolean {
	const doesParticleFxLoopedExist_result = Citizen.invokeNative<boolean>('0x9CFFB7009B578840', ptfxId);
	return doesParticleFxLoopedExist_result;
}