import { ItemIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_AN_ENTITY
 *
 * 0x5DA1DE6C940D22C1

 * 
 * ------------------------------------------------------------------
 * @param {ItemIndex} obj
 * @returns {boolean}  
 */
export function isAnEntity(obj: ItemIndex): boolean {
	const isAnEntity_result = Citizen.invokeNative<boolean>('0x5DA1DE6C940D22C1', obj);
	return isAnEntity_result;
}