/**
 * PED:SET_POP_CONTROL_SPHERE_THIS_FRAME
 *
 * 0x1A3EA72E4830538F

 * 
 * pedRadius and vehRadius are usually 100.0 and 200.0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} centerZ
 * @param {number} pedRadius
 * @param {number} vehRadius
 */
export function setPopControlSphereThisFrame(centerX: number, centerY: number, centerZ: number, pedRadius: number, vehRadius: number): void {
	const setPopControlSphereThisFrame_result = Citizen.invokeNative<void>('0x1A3EA72E4830538F', centerX, centerY, centerZ, pedRadius, vehRadius);
	return setPopControlSphereThisFrame_result;
}