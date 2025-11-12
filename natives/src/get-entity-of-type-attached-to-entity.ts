import { EntityIndex, ModelNames } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_OF_TYPE_ATTACHED_TO_ENTITY
 *
 * 0x21B8871CE9CD1479

 * 
 * Gets the handle of an entity with a specific model hash attached to another entity, such as an object attached to a ped.
 *  This native does not appear to have anything to do with pickups as in scripts it is used with objects.
 * 
 * Example from fm_mission_controller_2020.c:
 * 
 * iVar8 = ENTITY::GET_ENTITY_OF_TYPE_ATTACHED_TO_ENTITY(bParam0->f_9, joaat("p_cs_clipboard"));
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {ModelNames} modelHashKey
 * @returns {EntityIndex}  
 */
export function getEntityOfTypeAttachedToEntity(entity: EntityIndex, modelHashKey: ModelNames): EntityIndex {
	const getEntityOfTypeAttachedToEntity_result = Citizen.invokeNative<EntityIndex>('0x21B8871CE9CD1479', entity, modelHashKey);
	return getEntityOfTypeAttachedToEntity_result;
}