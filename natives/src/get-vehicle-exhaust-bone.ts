/**
 * VEHICLE:_GET_VEHICLE_EXHAUST_BONE
 *
 * 0xE728F090D538CB18

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getVehicleExhaustBone(): boolean {
	const getVehicleExhaustBone_result = Citizen.invokeNative<boolean>('0xE728F090D538CB18', );
	return getVehicleExhaustBone_result;
}