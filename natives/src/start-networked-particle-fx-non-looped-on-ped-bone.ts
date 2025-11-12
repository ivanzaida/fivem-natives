import { PedIndex, EPedBonetag } from '@ivanzaida/structures'

/**
 * GRAPHICS:START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_PED_BONE
 *
 * 0x4E547C301F81B801

 * 
 * Triggers a named particle effect on a ped bone at an offset position and rotation, that will replicate across the network.
 * This should only be used with non-looped particle effects.
 * The particle effect will then play and tidy itself up when finished.
 * There is no access to the particle effect once it has been triggered.
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
 * @param {number} scale Size scale of the effect (default size = 1.0)
 * @param {boolean} invertAxisX
 * @param {boolean} invertAxisY
 * @param {boolean} invertAxisZ
 * @returns {boolean}  
 */
export function startNetworkedParticleFxNonLoopedOnPedBone(fxName: string, ped: PedIndex, vecPositionX: number, vecPositionY: number, vecPositionZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, boneTag: EPedBonetag | number, scale: number = 1, invertAxisX: boolean = false, invertAxisY: boolean = false, invertAxisZ: boolean = false): boolean {
	const startNetworkedParticleFxNonLoopedOnPedBone_result = Citizen.invokeNative<boolean>('0x4E547C301F81B801', fxName, ped, vecPositionX, vecPositionY, vecPositionZ, vecRotationX, vecRotationY, vecRotationZ, boneTag, scale, invertAxisX, invertAxisY, invertAxisZ);
	return startNetworkedParticleFxNonLoopedOnPedBone_result;
}