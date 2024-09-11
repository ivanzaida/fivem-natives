import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:IS_PROP_LIGHT_OVERRIDEN
 *
 * 0xCF84B0AC4DDC5E1C

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @returns {boolean}  
 */
export function isPropLightOverriden(object: ObjectIndex): boolean {
	const isPropLightOverriden_result = Citizen.invokeNative<boolean>('0xCF84B0AC4DDC5E1C', object);
	return isPropLightOverriden_result;
}