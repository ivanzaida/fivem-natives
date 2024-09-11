import { EScPresAttrId } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_PRESENCE_ATTR_SET_FLOAT
 *
 * 0x8D862F78BA8A0C4C

 * 
 * ------------------------------------------------------------------
 * @param {EScPresAttrId} valueId
 * @param {number} value
 * @returns {boolean}  
 */
export function scPresenceAttrSetFloat(valueId: EScPresAttrId | number, value: number): boolean {
	const scPresenceAttrSetFloat_result = Citizen.invokeNative<boolean>('0x8D862F78BA8A0C4C', valueId, value);
	return scPresenceAttrSetFloat_result;
}