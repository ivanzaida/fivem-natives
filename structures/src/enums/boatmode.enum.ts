export enum EBoatmode {
	BcfStopAtEnd = 1,
	BcfStopAtShore,
	BcfAvoidShore = 4,
	BcfPreferForward = 8,
	BcfNeverStop = 16,
	BcfNeverNavMesh = 32,
	BcfNeverRoute = 64,
	BcfForceBeached = 128,
	BcfUseWanderRoute = 256,
	BcfUseFleeRoute = 512,
	BcfNeverPause = 1024,
	BcfDefaultsettings = 7, // CF_StopAtEnd | CF_StopAtShore | CF_AvoidShore
	BcfOpenoceansettings = 111, // CF_StopAtEnd | CF_StopAtShore | CF_AvoidShore | BCF_PreferForward | BCF_NeverNavMesh | BCF_NeverRoute
	BcfBoattaxisettings = 1071, // CF_StopAtEnd | CF_StopAtShore | CF_AvoidShore | BCF_PreferForward | BCF_NeverNavMesh | BCF_NeverPause
}