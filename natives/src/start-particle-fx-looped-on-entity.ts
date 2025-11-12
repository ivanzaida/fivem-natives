import { EntityIndex, PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:START_PARTICLE_FX_LOOPED_ON_ENTITY
 *
 * 0x62750FD2BDD8BD49

 * 
 * Triggers a named particle effect attached to an entity with an offset position.
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
 * @param {number} scale Size scale of the effect (default size = 1.0) INT  the id of the created particle effect  this will be 0 if creation fails
 * @param {boolean} invertAxisX
 * @param {boolean} invertAxisY
 * @param {boolean} invertAxisZ
 * @returns {PtfxId}  
 */
export function startParticleFxLoopedOnEntity(fxName: string, entity: EntityIndex, vecPositionX: number, vecPositionY: number, vecPositionZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, scale: number = 1, invertAxisX: boolean = false, invertAxisY: boolean = false, invertAxisZ: boolean = false): PtfxId {
	const startParticleFxLoopedOnEntity_result = Citizen.invokeNative<PtfxId>('0x62750FD2BDD8BD49', fxName, entity, vecPositionX, vecPositionY, vecPositionZ, vecRotationX, vecRotationY, vecRotationZ, scale, invertAxisX, invertAxisY, invertAxisZ);
	return startParticleFxLoopedOnEntity_result;
}