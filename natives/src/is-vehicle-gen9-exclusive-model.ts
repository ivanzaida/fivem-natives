/**
 * VEHICLE:_IS_VEHICLE_GEN9_EXCLUSIVE_MODEL
 *
 * 0x6638C0F19DE692FE

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isVehicleGen9ExclusiveModel(): boolean {
	const isVehicleGen9ExclusiveModel_result = Citizen.invokeNative<boolean>('0x6638C0F19DE692FE', );
	return isVehicleGen9ExclusiveModel_result;
}