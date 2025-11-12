import { EntityIndex } from '@ivanzaida/structures'

/**
 * AUDIO:LINK_STATIC_EMITTER_TO_ENTITY
 *
 * 0xACF36914BA191DCB

 * 
 * Full list of static emitters by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/staticEmitters.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} emitterName
 * @param {EntityIndex} entity
 */
export function linkStaticEmitterToEntity(emitterName: string, entity: EntityIndex): void {
	const linkStaticEmitterToEntity_result = Citizen.invokeNative<void>('0xACF36914BA191DCB', emitterName, entity);
	return linkStaticEmitterToEntity_result;
}