import { EntityIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_ENTITY
 *
 * 0x51CD258B1EC7AB66

 * 
 * Triggers a named particle effect on an entity at an offset position, that will replicate across the network.
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
 * @param {number} scale Size scale of the effect (default size = 1.0)
 * @param {boolean} invertAxisX
 * @param {boolean} invertAxisY
 * @param {boolean} invertAxisZ
 * @returns {boolean}  
 */
export function startNetworkedParticleFxNonLoopedOnEntity(fxName: string, entity: EntityIndex, vecPositionX: number, vecPositionY: number, vecPositionZ: number, vecRotationX: number, vecRotationY: number, vecRotationZ: number, scale: number = 1, invertAxisX: boolean = false, invertAxisY: boolean = false, invertAxisZ: boolean = false): boolean {
	const startNetworkedParticleFxNonLoopedOnEntity_result = Citizen.invokeNative<boolean>('0x51CD258B1EC7AB66', fxName, entity, vecPositionX, vecPositionY, vecPositionZ, vecRotationX, vecRotationY, vecRotationZ, scale, invertAxisX, invertAxisY, invertAxisZ);
	return startNetworkedParticleFxNonLoopedOnEntity_result;
}