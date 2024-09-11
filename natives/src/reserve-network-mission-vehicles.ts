/**
 * NETWORK:RESERVE_NETWORK_MISSION_VEHICLES
 *
 * 0x552B3BADB43FF551

 * 
 * ------------------------------------------------------------------
 * @param {number} numVehiclesToReserve
 */
export function reserveNetworkMissionVehicles(numVehiclesToReserve: number): void {
	const reserveNetworkMissionVehicles_result = Citizen.invokeNative<void>('0x552B3BADB43FF551', numVehiclesToReserve);
	return reserveNetworkMissionVehicles_result;
}