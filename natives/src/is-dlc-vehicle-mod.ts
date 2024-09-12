/**
 * FILES:IS_DLC_VEHICLE_MOD
 *
 * 0xC638DA98694CE80F

 * 
 * ------------------------------------------------------------------
 * @param {number} identifierHash
 * @returns {boolean}  
 */
export function isDlcVehicleMod(identifierHash: number): boolean {
	const isDlcVehicleMod_result = Citizen.invokeNative<boolean>('0xC638DA98694CE80F', identifierHash);
	return isDlcVehicleMod_result;
}