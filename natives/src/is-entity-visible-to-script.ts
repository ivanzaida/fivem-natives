import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_VISIBLE_TO_SCRIPT
 *
 * 0x870372B586EFB3EE

 * 
 * Checks if an entity has been set invisible by script. An entity may still be invisible via other means (code, etc), but this command
 * only checks the script visibility state.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityVisibleToScript(entity: EntityIndex): boolean {
	const isEntityVisibleToScript_result = Citizen.invokeNative<boolean>('0x870372B586EFB3EE', entity);
	return isEntityVisibleToScript_result;
}