import { EntityIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:REMOVE_PARTICLE_FX_FROM_ENTITY
 *
 * 0x8177A2A9DC5BD5B0

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function removeParticleFxFromEntity(entity: EntityIndex): void {
	const removeParticleFxFromEntity_result = Citizen.invokeNative<void>('0x8177A2A9DC5BD5B0', entity);
	return removeParticleFxFromEntity_result;
}