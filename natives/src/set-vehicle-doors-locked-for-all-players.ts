import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DOORS_LOCKED_FOR_ALL_PLAYERS
 *
 * 0x7A673862D5A46F24

 * 
 * After some analysis, I've decided that these are what the parameters are.
 * 
 * We can see this being used in R scripts such as "am_mp_property_int.ysc.c4":
 * l_11A1 = PED::GET_VEHICLE_PED_IS_IN(PLAYER::PLAYER_PED_ID(), 1);
 * ...
 * VEHICLE::SET_VEHICLE_DOORS_LOCKED_FOR_ALL_PLAYERS(l_11A1, 1);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} locked
 */
export function setVehicleDoorsLockedForAllPlayers(vehicle: VehicleIndex, locked: boolean): void {
	const setVehicleDoorsLockedForAllPlayers_result = Citizen.invokeNative<void>('0x7A673862D5A46F24', vehicle, locked);
	return setVehicleDoorsLockedForAllPlayers_result;
}