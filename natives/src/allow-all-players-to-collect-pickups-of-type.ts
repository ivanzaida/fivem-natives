import { EPickupType } from '@ivanzaida/structures'

/**
 * OBJECT:ALLOW_ALL_PLAYERS_TO_COLLECT_PICKUPS_OF_TYPE
 *
 * 0x88D79D666165710F

 * 
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EPickupType} type
 */
export function allowAllPlayersToCollectPickupsOfType(type: EPickupType | number): void {
	const allowAllPlayersToCollectPickupsOfType_result = Citizen.invokeNative<void>('0x88D79D666165710F', type);
	return allowAllPlayersToCollectPickupsOfType_result;
}