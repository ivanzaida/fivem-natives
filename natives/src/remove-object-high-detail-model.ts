import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:REMOVE_OBJECT_HIGH_DETAIL_MODEL
 *
 * 0xCF9F92EF5A069BD4

 * 
 * This is used primarliy in cutscenes
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 */
export function removeObjectHighDetailModel(object: ObjectIndex): void {
	const removeObjectHighDetailModel_result = Citizen.invokeNative<void>('0xCF9F92EF5A069BD4', object);
	return removeObjectHighDetailModel_result;
}