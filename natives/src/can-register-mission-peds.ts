/**
 * NETWORK:CAN_REGISTER_MISSION_PEDS
 *
 * 0xADCE9BCAFCB83364

 * 
 * ------------------------------------------------------------------
 * @param {number} numPedsToRegister
 * @returns {boolean}  
 */
export function canRegisterMissionPeds(numPedsToRegister: number): boolean {
	const canRegisterMissionPeds_result = Citizen.invokeNative<boolean>('0xADCE9BCAFCB83364', numPedsToRegister);
	return canRegisterMissionPeds_result;
}