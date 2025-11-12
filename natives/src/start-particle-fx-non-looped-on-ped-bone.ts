import { PedIndex, EPedBonetag } from '@ivanzaida/structures'

/**
 * GRAPHICS:START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE
 *
 * 0x5B5B2AE530F511CC

 * 
 * Triggers a named particle effect on a ped bone at an offset position and rotation.
 * This should only be used with non-looped particle effects.
 * The particle effect will then play and tidy itself up when finished.
 * There is no access to the particle effect once it has been triggered.
 * 
 * GRAPHICS::START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE("scr_sh_bong_smoke", PLAYER::PLAYER_PED_ID(), -0.025f, 0.13f, 0f, 0f, 0f, 0f, 31086, 0x3F800000, 0, 0, 0);
 * 
 * Axis - Invert Axis Flags
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
export function startParticleFxNonLoopedOnPedBone(fxName: string, ped: PedIndex, vecPositionX: number, vecPositionY: number, vecPositionZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, boneTag: EPedBonetag | number, scale: number = 1, invertAxisX: boolean = false, invertAxisY: boolean = false, invertAxisZ: boolean = false): boolean {
	const startParticleFxNonLoopedOnPedBone_result = Citizen.invokeNative<boolean>('0x5B5B2AE530F511CC', fxName, ped, vecPositionX, vecPositionY, vecPositionZ, vecRotationX, vecRotationY, vecRotationZ, boneTag, scale, invertAxisX, invertAxisY, invertAxisZ);
	return startParticleFxNonLoopedOnPedBone_result;
}