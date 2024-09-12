/**
 * NETWORK:CAN_REGISTER_MISSION_VEHICLES
 *
 * 0x2E9F58AD6FE93DFF

 * 
 * ------------------------------------------------------------------
 * @param {number} numVehiclesToRegister
 * @returns {boolean}  
 */
export function canRegisterMissionVehicles(numVehiclesToRegister: number): boolean {
	const canRegisterMissionVehicles_result = Citizen.invokeNative<boolean>('0x2E9F58AD6FE93DFF', numVehiclesToRegister);
	return canRegisterMissionVehicles_result;
}