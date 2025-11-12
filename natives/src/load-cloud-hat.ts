/**
 * MISC:LOAD_CLOUD_HAT
 *
 * 0xEE3C332799057645

 * 
 * this is to help with tralers, etc. please don't use this in general
 * 
 * The following cloudhats are useable:
 * altostratus
 * Cirrus
 * cirrocumulus
 * Clear 01
 * Cloudy 01
 * Contrails
 * Horizon
 * horizonband1
 * horizonband2
 * horizonband3
 * horsey
 * Nimbus
 * Puffs
 * RAIN
 * Snowy 01
 * Stormy 01
 * stratoscumulus
 * Stripey
 * shower
 * Wispy
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} cloudHatName
 * @param {number} transitionTime Amount of time to fade in the cloudhat, default is 0 seconds.
 */
export function loadCloudHat(cloudHatName: string, transitionTime: number = 0): void {
	const loadCloudHat_result = Citizen.invokeNative<void>('0xEE3C332799057645', cloudHatName, transitionTime);
	return loadCloudHat_result;
}