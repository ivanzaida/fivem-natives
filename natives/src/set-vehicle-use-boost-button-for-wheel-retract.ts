/**
 * VEHICLE:SET_VEHICLE_USE_BOOST_BUTTON_FOR_WHEEL_RETRACT
 *
 * 0xBC4F3DBA48761D9A

 * 
 * Used for blazer5. Changes the quadbike-jetski transformation input from raise/lower convertible roof (hold H by default) to horn (press E by default.)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} useBoostButton
 */
export function setVehicleUseBoostButtonForWheelRetract(useBoostButton: boolean): void {
	const setVehicleUseBoostButtonForWheelRetract_result = Citizen.invokeNative<void>('0xBC4F3DBA48761D9A', useBoostButton);
	return setVehicleUseBoostButtonForWheelRetract_result;
}