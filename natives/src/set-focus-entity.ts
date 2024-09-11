import { EntityIndex } from '@ivanzaida/structures'

/**
 * STREAMING:SET_FOCUS_ENTITY
 *
 * 0xD410E6FC0A0C97D2

 * The game focus is used for loading map data, collisions, object population etc.
 * This command overrides it for the specified entity.
 * Sets the specified entity as the focus for streaming
 * It seems to make the entity's coords mark the point from which LOD-distances are measured. In my testing, setting a vehicle as the focus entity and moving that vehicle more than 300 distance units away from the player will make the level of detail around the player go down drastically (shadows disappear, textures go extremely low res, etc). The player seems to be the default focus entity.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function setFocusEntity(entity: EntityIndex): void {
	const setFocusEntity_result = Citizen.invokeNative<void>('0xD410E6FC0A0C97D2', entity);
	return setFocusEntity_result;
}