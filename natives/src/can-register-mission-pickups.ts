/**
 * NETWORK:CAN_REGISTER_MISSION_PICKUPS
 *
 * 0xF95A1422CB355630

 * 
 * ------------------------------------------------------------------
 * @param {number} numPickupsToRegister
 * @returns {boolean}  
 */
export function canRegisterMissionPickups(numPickupsToRegister: number): boolean {
	const canRegisterMissionPickups_result = Citizen.invokeNative<boolean>('0xF95A1422CB355630', numPickupsToRegister);
	return canRegisterMissionPickups_result;
}