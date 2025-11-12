import { PlayerIndex, EPickupType } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE
 *
 * 0xF3F15DACA12B4829

 * 
 * Disabling/enabling a player from getting pickups. From the scripts:
 * 
 * OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);
 * OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);
 * OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 1);
 * OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);
 * OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_armour_standard}, 0);
 * OBJECT::SET_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_OF_TYPE(PLAYER::PLAYER_ID(), ${pickup_armour_standard}, 1);
 * 
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {EPickupType} type
 * @param {boolean} allow
 */
export function setPlayerPermittedToCollectPickupsOfType(player: PlayerIndex, type: EPickupType | number, allow: boolean): void {
	const setPlayerPermittedToCollectPickupsOfType_result = Citizen.invokeNative<void>('0xF3F15DACA12B4829', player, type, allow);
	return setPlayerPermittedToCollectPickupsOfType_result;
}