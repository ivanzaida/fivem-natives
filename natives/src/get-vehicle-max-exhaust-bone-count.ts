/**
 * VEHICLE:_GET_VEHICLE_MAX_EXHAUST_BONE_COUNT
 *
 * 0x3EE18B00CD86C54F

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleMaxExhaustBoneCount(): number {
	const getVehicleMaxExhaustBoneCount_result = Citizen.invokeNative<number>('0x3EE18B00CD86C54F', );
	return getVehicleMaxExhaustBoneCount_result;
}