/**
 * FILES:GET_DLC_VEHICLE_MOD_LOCK_HASH
 *
 * 0x1F6B09FE73B99828

 * 
 * ------------------------------------------------------------------
 * @param {number} identifierHash
 * @returns {number}  
 */
export function getDlcVehicleModLockHash(identifierHash: number): number {
	const getDlcVehicleModLockHash_result = Citizen.invokeNative<number>('0x1F6B09FE73B99828', identifierHash);
	return getDlcVehicleModLockHash_result;
}