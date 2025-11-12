import { VehicleIndex, Vector3 } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_DEFORMATION_AT_POS
 *
 * 0x05A904F31991BA49

 * 
 * The only example I can find of this function in the scripts, is this:
 * 
 * struct _s = VEHICLE::GET_VEHICLE_DEFORMATION_AT_POS(rPtr((A_0) + 4), 1.21f, 6.15f, 0.3f);
 * 
 * -----------------------------------------------------------------------------------------------------------------------------------------
 * PC scripts:
 * 
 * v_5/{3}/ = VEHICLE::GET_VEHICLE_DEFORMATION_AT_POS(a_0._f1, 1.21, 6.15, 0.3);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} vecPosX
 * @param {number} vecPosY
 * @param {number} vecPosZ
 * @returns {Vector3}  
 */
export function getVehicleDeformationAtPos(vehicle: VehicleIndex, vecPosX: number, vecPosY: number, vecPosZ: number): Vector3 {
	const getVehicleDeformationAtPos_result = Citizen.invokeNative<Vector3>('0x05A904F31991BA49', vehicle, vecPosX, vecPosY, vecPosZ);
	return getVehicleDeformationAtPos_result;
}