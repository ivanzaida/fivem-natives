/**
 * GRAPHICS:PROCGRASS_ENABLE_CULLSPHERE
 *
 * 0xACA69FD04F5F38B9

 * 
 * ------------------------------------------------------------------
 * @param {number} id
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} centerZ
 * @param {number} radius
 */
export function procgrassEnableCullsphere(id: number, centerX: number, centerY: number, centerZ: number, radius: number): void {
	const procgrassEnableCullsphere_result = Citizen.invokeNative<void>('0xACA69FD04F5F38B9', id, centerX, centerY, centerZ, radius);
	return procgrassEnableCullsphere_result;
}