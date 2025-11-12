import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_OBJECT_TINT_INDEX
 *
 * 0xDEFDEE8D4FA47138

 * 
 * enum ObjectPaintVariants
 * {
 *  Pacific = 0,
 *   Azure = 1,
 *     Nautical = 2,
 *  Continental = 3,
 *   Battleship = 4,
 *    Intrepid = 5,
 *  Uniform = 6,
 *   Classico = 7,
 *  Mediterranean = 8,
 *     Command = 9,
 *   Mariner = 10,
 *  Ruby = 11,
 *     Vintage = 12,
 *  Pristine = 13,
 *     Merchant = 14,
 *     Voyager = 15
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {number} tint
 */
export function setObjectTintIndex(object: ObjectIndex, tint: number): void {
	const setObjectTintIndex_result = Citizen.invokeNative<void>('0xDEFDEE8D4FA47138', object, tint);
	return setObjectTintIndex_result;
}