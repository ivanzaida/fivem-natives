/**
 * HUD:END_TEXT_COMMAND_BUSYSPINNER_ON
 *
 * 0x654AFEEF256E650F

 * 
 * enum eBusySpinnerType
 * {
 * 	BUSY_SPINNER_LEFT,
 * 	BUSY_SPINNER_LEFT_2,
 * 	BUSY_SPINNER_LEFT_3,
 * 	BUSY_SPINNER_SAVE,
 * 	BUSY_SPINNER_RIGHT,
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} icon
 */
export function endTextCommandBusyspinnerOn(icon: number): void {
	const endTextCommandBusyspinnerOn_result = Citizen.invokeNative<void>('0x654AFEEF256E650F', icon);
	return endTextCommandBusyspinnerOn_result;
}