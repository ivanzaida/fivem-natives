import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:DOES_ENTITY_BELONG_TO_THIS_SCRIPT
 *
 * 0x7C9905528EE2C3AB

 * 
 * Returns TRUE if the entity is owned by the script thread that called this command. Returns FALSE if the entity is not a script
 * entity or if it is a script entity owned by a different script
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} deadCheck
 * @returns {boolean}  
 */
export function doesEntityBelongToThisScript(entity: EntityIndex, deadCheck: boolean = true): boolean {
	const doesEntityBelongToThisScript_result = Citizen.invokeNative<boolean>('0x7C9905528EE2C3AB', entity, deadCheck);
	return doesEntityBelongToThisScript_result;
}