/**
 * FILES:GET_DLC_VEHICLE_FLAGS
 *
 * 0x6A1E7E50A4AF1FBD

 * 
 * Looks up vehicle flags based on the supplied dlc index (dlcIndex must be inside range: (0 <= dlcIndex < GET_NUM_DLC_VEHICLES()) )
 * Use the enum below as and index to the bits set from the metadata, if more are required we will need to update the enum
 * Enum:
 * <enumdef type="eVehicleFlags">
 * <enumval name="VF_DISABLE_GARAGE"/>
 * </enumdef>
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} dlc
 * @returns {number}  
 */
export function getDlcVehicleFlags(dlc: number): number {
	const getDlcVehicleFlags_result = Citizen.invokeNative<number>('0x6A1E7E50A4AF1FBD', dlc);
	return getDlcVehicleFlags_result;
}