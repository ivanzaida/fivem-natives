import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_REMOVE_AGGRESSIVE_CARJACK_MISSION
 *
 * 0x4EB5C166706C0781

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setVehicleRemoveAggressiveCarjackMission(vehicle: VehicleIndex): void {
	const setVehicleRemoveAggressiveCarjackMission_result = Citizen.invokeNative<void>('0x4EB5C166706C0781', vehicle);
	return setVehicleRemoveAggressiveCarjackMission_result;
}