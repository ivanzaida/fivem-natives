import { VehicleIndex, Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * VEHICLE:GET_VEHICLE_SIZE
 *
 * 0xB07407B3B153C760

 * 
 * Outputs 2 Vector3's.
 * Scripts check if out2.x - out1.x > someshit.x
 * Could be suspension related, as in max suspension height and min suspension height, considering the natives location.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {Vector3} outSizeBoundsMin [Ref]
 * @param {Vector3} outSizeBoundsMax [Ref]
 */
export function getVehicleSize(vehicle: VehicleIndex, outSizeBoundsMin: Vector3 /* ptr */, outSizeBoundsMax: Vector3 /* ptr */): void {
	const outSizeBoundsMinPtr = new Vector3Ref();
	const outSizeBoundsMaxPtr = new Vector3Ref();
	const getVehicleSize_result = Citizen.invokeNative<void>('0xB07407B3B153C760', vehicle, outSizeBoundsMinPtr.dataView, outSizeBoundsMaxPtr.dataView);
	outSizeBoundsMinPtr.copyToVector(outSizeBoundsMin);
	outSizeBoundsMaxPtr.copyToVector(outSizeBoundsMax);
	return getVehicleSize_result;
}