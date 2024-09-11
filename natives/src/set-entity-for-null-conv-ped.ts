import { EntityIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_ENTITY_FOR_NULL_CONV_PED
 *
 * 0x34F5E7395D31DAD7

 * 
 * ------------------------------------------------------------------
 * @param {number} speakerConversation
 * @param {EntityIndex} entity
 */
export function setEntityForNullConvPed(speakerConversation: number, entity: EntityIndex): void {
	const setEntityForNullConvPed_result = Citizen.invokeNative<void>('0x34F5E7395D31DAD7', speakerConversation, entity);
	return setEntityForNullConvPed_result;
}