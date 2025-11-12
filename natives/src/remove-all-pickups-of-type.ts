import { EPickupType } from '@ivanzaida/structures'

/**
 * OBJECT:REMOVE_ALL_PICKUPS_OF_TYPE
 *
 * 0xF429153602FD9CAF

 * 
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EPickupType} type
 */
export function removeAllPickupsOfType(type: EPickupType | number): void {
	const removeAllPickupsOfType_result = Citizen.invokeNative<void>('0xF429153602FD9CAF', type);
	return removeAllPickupsOfType_result;
}