import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_AVOID_PLAYER_VEHICLE_RIOT_VAN_MISSION
 *
 * 0x49A1FC25BB73AC77

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setVehicleAvoidPlayerVehicleRiotVanMission(vehicle: VehicleIndex): void {
	const setVehicleAvoidPlayerVehicleRiotVanMission_result = Citizen.invokeNative<void>('0x49A1FC25BB73AC77', vehicle);
	return setVehicleAvoidPlayerVehicleRiotVanMission_result;
}