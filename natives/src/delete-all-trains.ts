/**
 * VEHICLE:DELETE_ALL_TRAINS
 *
 * 0x47931C69C0D75B43

 * 
 * ------------------------------------------------------------------
 */
export function deleteAllTrains(): void {
	const deleteAllTrains_result = Citizen.invokeNative<void>('0x47931C69C0D75B43', );
	return deleteAllTrains_result;
}