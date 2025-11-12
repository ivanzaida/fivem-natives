import { EntityIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:START_PARTICLE_FX_NON_LOOPED_ON_ENTITY_BONE
 *
 * 0x73F69F74011DDBCA

 * 
 * Triggers a named particle effect on an entity bone at an offset position.
 * This should only be used with non-looped particle effects.
 * The particle effect will then play and tidy itself up when finished.
 * There is no access to the particle effect once it has been triggered.
 * 
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} fxName
 * @param {EntityIndex} entity
 * @param {number} vecPositionX
 * @param {number} vecPositionY
 * @param {number} vecPositionZ
 * @param {number} vecRotationX
 * @param {number} vecRotationY
 * @param {number} vecRotationZ
 * @param {number} bone Index  the bone index to attach the particle effect to (use GET_ENTITY_BONE_INDEX_BY_NAME to get the index)
 * @param {number} scale Size scale of the effect (default size = 1.0)
 * @param {boolean} invertAxisX
 * @param {boolean} invertAxisY
 * @param {boolean} invertAxisZ
 * @returns {boolean}  
 */
export function startParticleFxNonLoopedOnEntityBone(fxName: string, entity: EntityIndex, vecPositionX: number, vecPositionY: number, vecPositionZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, bone: number = 1, scale: number = 1, invertAxisX: boolean = false, invertAxisY: boolean = false, invertAxisZ: boolean = false): boolean {
	const startParticleFxNonLoopedOnEntityBone_result = Citizen.invokeNative<boolean>('0x73F69F74011DDBCA', fxName, entity, vecPositionX, vecPositionY, vecPositionZ, vecRotationX, vecRotationY, vecRotationZ, bone, scale, invertAxisX, invertAxisY, invertAxisZ);
	return startParticleFxNonLoopedOnEntityBone_result;
}