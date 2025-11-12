import { EntityIndex, PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:START_PARTICLE_FX_LOOPED_ON_ENTITY_BONE
 *
 * 0x3B8EE54DFE24F06C

 * 
 * Triggers a named particle effect attached to an entity bone with an offset position.
 * This should only be used with infinitely looping particle effects.
 * The particle effect will then start playing and will need to be stopped by calling STOP_PTFX.
 * The returned id of the particle effect needs to be passed into any other function that needs to be called on it.+
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
 * @param {number} scale Size scale of the effect (default size = 1.0) INT  the id of the created particle effect  this will be 0 if creation fails
 * @param {boolean} invertAxisX
 * @param {boolean} invertAxisY
 * @param {boolean} invertAxisZ
 * @returns {PtfxId}  
 */
export function startParticleFxLoopedOnEntityBone(fxName: string, entity: EntityIndex, vecPositionX: number, vecPositionY: number, vecPositionZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, bone: number = 1, scale: number = 1, invertAxisX: boolean = false, invertAxisY: boolean = false, invertAxisZ: boolean = false): PtfxId {
	const startParticleFxLoopedOnEntityBone_result = Citizen.invokeNative<PtfxId>('0x3B8EE54DFE24F06C', fxName, entity, vecPositionX, vecPositionY, vecPositionZ, vecRotationX, vecRotationY, vecRotationZ, bone, scale, invertAxisX, invertAxisY, invertAxisZ);
	return startParticleFxLoopedOnEntityBone_result;
}