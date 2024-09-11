import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PROP_TINT_INDEX
 *
 * 0xD3CBD77236B58852

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {number} tint
 */
export function setPropTintIndex(object: ObjectIndex, tint: number): void {
	const setPropTintIndex_result = Citizen.invokeNative<void>('0xD3CBD77236B58852', object, tint);
	return setPropTintIndex_result;
}