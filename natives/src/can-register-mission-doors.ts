/**
 * NETWORK:CAN_REGISTER_MISSION_DOORS
 *
 * 0x0F7BCDD970AAA9B9

 * 
 * ------------------------------------------------------------------
 * @param {number} numDoorsToRegister
 * @returns {boolean}  
 */
export function canRegisterMissionDoors(numDoorsToRegister: number): boolean {
	const canRegisterMissionDoors_result = Citizen.invokeNative<boolean>('0x0F7BCDD970AAA9B9', numDoorsToRegister);
	return canRegisterMissionDoors_result;
}