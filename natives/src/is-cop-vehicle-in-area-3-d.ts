/**
 * VEHICLE:IS_COP_VEHICLE_IN_AREA_3D
 *
 * 0x00CC36CA06DD06AD

 * 
 * Usage:
 * 
 * public bool isCopInRange(Vector3 Location, float Range)
 *         {
 *             return Function.Call<bool>(Hash.IS_COP_PED_IN_AREA_3D, Location.X - Range, Location.Y - Range, Location.Z - Range, Location.X + Range, Location.Y + Range, Location.Z + Range);
 *         }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} firstCoorsX
 * @param {number} firstCoorsY
 * @param {number} firstCoorsZ
 * @param {number} secondCoorsX
 * @param {number} secondCoorsY
 * @param {number} secondCoorsZ
 * @returns {boolean}  
 */
export function isCopVehicleInArea_3D(firstCoorsX: number, firstCoorsY: number, firstCoorsZ: number, secondCoorsX: number, secondCoorsY: number, secondCoorsZ: number): boolean {
	const isCopVehicleInArea_3D_result = Citizen.invokeNative<boolean>('0x00CC36CA06DD06AD', firstCoorsX, firstCoorsY, firstCoorsZ, secondCoorsX, secondCoorsY, secondCoorsZ);
	return isCopVehicleInArea_3D_result;
}