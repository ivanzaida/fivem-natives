import { EScPresAttrId } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_PRESENCE_ATTR_SET_INT
 *
 * 0x1A84C6BBF1FCC329

 * 
 * ------------------------------------------------------------------
 * @param {EScPresAttrId} valueId
 * @param {number} value
 * @returns {boolean}  
 */
export function scPresenceAttrSetInt(valueId: EScPresAttrId | number, value: number): boolean {
	const scPresenceAttrSetInt_result = Citizen.invokeNative<boolean>('0x1A84C6BBF1FCC329', valueId, value);
	return scPresenceAttrSetInt_result;
}