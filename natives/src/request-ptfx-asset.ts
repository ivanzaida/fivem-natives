/**
 * STREAMING:REQUEST_PTFX_ASSET
 *
 * 0x8003D3C0115A1035

 * 
 * maps script name (thread + 0xD0) by lookup via scriptfx.dat - does nothing when script name is empty
 * 
 * 
 * ------------------------------------------------------------------
 */
export function requestPtfxAsset(): void {
	const requestPtfxAsset_result = Citizen.invokeNative<void>('0x8003D3C0115A1035', );
	return requestPtfxAsset_result;
}