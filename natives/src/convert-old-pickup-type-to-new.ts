import { EPickupType } from '@ivanzaida/structures'

/**
 * OBJECT:CONVERT_OLD_PICKUP_TYPE_TO_NEW
 *
 * 0xAC96042A1278D845

 * 
 * returns pickup hash.
 * 
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EPickupType} oldPickupType
 * @returns {EPickupType}  
 */
export function convertOldPickupTypeToNew(oldPickupType: EPickupType | number): EPickupType {
	const convertOldPickupTypeToNew_result = Citizen.invokeNative<EPickupType>('0xAC96042A1278D845', oldPickupType);
	return convertOldPickupTypeToNew_result;
}