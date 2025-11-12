import { PedIndex, EPedBonetag, PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:START_PARTICLE_FX_LOOPED_ON_PED_BONE
 *
 * 0x2CC6B29B569945CC

 * 
 * Triggers a named particle effect attached to a ped bone with an offset position and rotation.
 * This should only be used with infinitely looping particle effects.
 * The particle effect will then start playing and will need to be stopped by calling STOP_PTFX.
 * The returned id of the particle effect needs to be passed into any other function that needs to be called on it.
 * 
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} fxName
 * @param {PedIndex} ped
 * @param {number} vecPositionX
 * @param {number} vecPositionY
 * @param {number} vecPositionZ
 * @param {number} vecRotationX
 * @param {number} vecRotationY
 * @param {number} vecRotationZ
 * @param {EPedBonetag} boneTag
 * @param {number} scale Size scale of the effect (default size = 1.0) INT  the id of the created particle effect  this will be 0 if creation fails
 * @param {boolean} invertAxisX
 * @param {boolean} invertAxisY
 * @param {boolean} invertAxisZ
 * @returns {PtfxId}  
 */
export function startParticleFxLoopedOnPedBone(fxName: string, ped: PedIndex, vecPositionX: number, vecPositionY: number, vecPositionZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, boneTag: EPedBonetag | number, scale: number = 1, invertAxisX: boolean = false, invertAxisY: boolean = false, invertAxisZ: boolean = false): PtfxId {
	const startParticleFxLoopedOnPedBone_result = Citizen.invokeNative<PtfxId>('0x2CC6B29B569945CC', fxName, ped, vecPositionX, vecPositionY, vecPositionZ, vecRotationX, vecRotationY, vecRotationZ, boneTag, scale, invertAxisX, invertAxisY, invertAxisZ);
	return startParticleFxLoopedOnPedBone_result;
}