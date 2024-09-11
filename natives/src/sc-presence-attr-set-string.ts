import { EScPresAttrId } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_PRESENCE_ATTR_SET_STRING
 *
 * 0xB20280920F18CE68

 * 
 * ------------------------------------------------------------------
 * @param {EScPresAttrId} valueId
 * @param {string} value
 * @returns {boolean}  
 */
export function scPresenceAttrSetString(valueId: EScPresAttrId | number, value: string): boolean {
	const scPresenceAttrSetString_result = Citizen.invokeNative<boolean>('0xB20280920F18CE68', valueId, value);
	return scPresenceAttrSetString_result;
}