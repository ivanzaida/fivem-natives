/**
 * NETWORK:RESERVE_LOCAL_NETWORK_MISSION_VEHICLES
 *
 * 0x593FDB07AF52E85D

 * Reserves space in the population pool for the given number of vehicles.
 * This space will only be reserved locally, and will be added to the reservation in RESERVE_NETWORK_MISSION_VEHICLES. Use this if you don't want the reservations
 * affecting the populations of nearby players who are not running the script
 * 
 * ------------------------------------------------------------------
 * @param {number} numVehiclesToReserve
 */
export function reserveLocalNetworkMissionVehicles(numVehiclesToReserve: number): void {
	const reserveLocalNetworkMissionVehicles_result = Citizen.invokeNative<void>('0x593FDB07AF52E85D', numVehiclesToReserve);
	return reserveLocalNetworkMissionVehicles_result;
}