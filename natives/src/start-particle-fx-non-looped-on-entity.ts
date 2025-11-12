import { EntityIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:START_PARTICLE_FX_NON_LOOPED_ON_ENTITY
 *
 * 0xDD19F75405614D3C

 * 
 * Triggers a named particle effect on an entity at an offset position.
 * This should only be used with non-looped particle effects.
 * The particle effect will then play and tidy itself up when finished.
 * There is no access to the particle effect once it has been triggered.
 * 
 * Starts a particle effect on an entity for example your player.
 * 
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 * 
 * Example:
 * C#:
 * Function.Call(Hash.REQUEST_NAMED_PTFX_ASSET, "scr_rcbarry2");                     Function.Call(Hash.USE_PARTICLE_FX_ASSET, "scr_rcbarry2");                             Function.Call(Hash.START_PARTICLE_FX_NON_LOOPED_ON_ENTITY, "scr_clown_appears", Game.Player.Character, 0.0, 0.0, -0.5, 0.0, 0.0, 0.0, 1.0, false, false, false);
 * 
 * Internally this calls the same function as GRAPHICS::START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE
 * however it uses -1 for the specified bone index, so it should be possible to start a non looped fx on an entity bone using that native
 * 
 * -can confirm START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE does NOT work on vehicle bones.
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
 * @param {number} scale Size scale of the effect (default size = 1.0)
 * @param {boolean} invertAxisX
 * @param {boolean} invertAxisY
 * @param {boolean} invertAxisZ
 * @returns {boolean}  
 */
export function startParticleFxNonLoopedOnEntity(fxName: string, entity: EntityIndex, vecPositionX: number, vecPositionY: number, vecPositionZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, scale: number = 1, invertAxisX: boolean = false, invertAxisY: boolean = false, invertAxisZ: boolean = false): boolean {
	const startParticleFxNonLoopedOnEntity_result = Citizen.invokeNative<boolean>('0xDD19F75405614D3C', fxName, entity, vecPositionX, vecPositionY, vecPositionZ, vecRotationX, vecRotationY, vecRotationZ, scale, invertAxisX, invertAxisY, invertAxisZ);
	return startParticleFxNonLoopedOnEntity_result;
}