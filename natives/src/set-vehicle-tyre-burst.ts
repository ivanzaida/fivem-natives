import { VehicleIndex, EScWheelList } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_TYRE_BURST
 *
 * 0xE488FDAA43A181AE

 * 
 * "To burst tyres VEHICLE::SET_VEHICLE_TYRE_BURST(vehicle, 0, true, 1000.0)
 * to burst all tyres type it 8 times where p1 = 0 to 7.
 * 
 * p3 seems to be how much damage it has taken. 0 doesn't deflate them, 1000 completely deflates them.
 * 
 * '0 = wheel_lf / bike, plane or jet front
 * '1 = wheel_rf
 * '2 = wheel_lm / in 6 wheels trailer, plane or jet is first one on left
 * '3 = wheel_rm / in 6 wheels trailer, plane or jet is first one on right
 * '4 = wheel_lr / bike rear / in 6 wheels trailer, plane or jet is last one on left
 * '5 = wheel_rr / in 6 wheels trailer, plane or jet is last one on right
 * '45 = 6 wheels trailer mid wheel left
 * '47 = 6 wheels trailer mid wheel right
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScWheelList} wheelNumber
 * @param {boolean} instantBurst Set to true will play burst VFX and tyres will switch to rims
 * @param {number} damage
 */
export function setVehicleTyreBurst(vehicle: VehicleIndex, wheelNumber: EScWheelList | number, instantBurst: boolean = false, damage: number = 1000): void {
	const setVehicleTyreBurst_result = Citizen.invokeNative<void>('0xE488FDAA43A181AE', vehicle, wheelNumber, instantBurst, damage);
	return setVehicleTyreBurst_result;
}