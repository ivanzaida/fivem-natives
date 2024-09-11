/**
 * NETWORK:CAN_REGISTER_MISSION_OBJECTS
 *
 * 0x78D35ABAF71764AD

 * 
 * ------------------------------------------------------------------
 * @param {number} numObjectsToRegister
 * @returns {boolean}  
 */
export function canRegisterMissionObjects(numObjectsToRegister: number): boolean {
	const canRegisterMissionObjects_result = Citizen.invokeNative<boolean>('0x78D35ABAF71764AD', numObjectsToRegister);
	return canRegisterMissionObjects_result;
}