/**
 * NETWORK:CAN_REGISTER_MISSION_ENTITIES
 *
 * 0x4D64DFA5BE3B2871

 * 
 * ------------------------------------------------------------------
 * @param {number} numPedsToRegister
 * @param {number} numVehiclesToRegister
 * @param {number} numObjectsToRegister
 * @param {number} numPickupsToRegister
 * @returns {boolean}  
 */
export function canRegisterMissionEntities(numPedsToRegister: number, numVehiclesToRegister: number, numObjectsToRegister: number, numPickupsToRegister: number): boolean {
	const canRegisterMissionEntities_result = Citizen.invokeNative<boolean>('0x4D64DFA5BE3B2871', numPedsToRegister, numVehiclesToRegister, numObjectsToRegister, numPickupsToRegister);
	return canRegisterMissionEntities_result;
}