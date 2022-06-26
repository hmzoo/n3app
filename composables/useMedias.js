
export const MediaControl = {
    visible:false,
    show:()=>{MediaControl.visble=true},
    switchCam: () => {
        useBrowserConf().value.camera_status = !useBrowserConf().value.camera_status
        setSelfStreamTracks()
        if (selfStreamIsOn() && !bConfCanStream()) {
            closeSelfStream("STREAM CLOSED")
        }
        if (!selfStreamIsOn()) {
            MediaControl.getMedias();
        }
    },
    switchMic: () => {
        useBrowserConf().value.micro_status = !useBrowserConf().value.micro_status
        setSelfStreamTracks()
        if (selfStreamIsOn() && !bConfCanStream()) {
            closeSelfStream("STREAM CLOSED")
        }

        if (!selfStreamIsOn() && bConfCanStream()) {
            MediaControl.getMedias();
        }
    },
    changeDevice: ()=>{
        if (selfStreamIsOn() ) {
        closeSelfStream("CHANGING DEVICE")
        MediaControl.getMedias();
        }
    },
    getDevices: () => {
        logit("MEDIAS", "GEDEVICES")
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            startSelfStream(stream)
            return navigator.mediaDevices.enumerateDevices().then(buildDevices);
        }
        ).catch(err => { closeSelfStream(err.toString()) })
    },
    getMedias: () => {
        if (selfStreamIsOn() && !bConfCanStream()) {
            closeSelfStream("STREAM CLOSED")
        }

        if (!selfStreamIsOn() && bConfCanStream()) {
            logit("MEDIAS", "GETMEDIAS");

            navigator.mediaDevices
                .getUserMedia(getConstrains())
                .then((stream) => {
                    startSelfStream(stream);
                })
                .catch((err) => {
                    closeSelfStream(err.toString());
                });
        }
    },
    onStreamOff:()=>console.log("Stream OFF"),
    onStreamOn:()=>console.log("Stream ON")
}

export const useSelfStream = () => {
    return useState('selfstream', () => null)
}


const closeSelfStream = (text) => {
    logit("MEDIAS", "CLOSESELFSTREAM " + text)
    if (useSelfStream().value != null) {
        useSelfStream().value.getTracks().forEach((track) => track.stop());
    }
    useSelfStream().value = null
    useBrowserConf().value.stream_status = false
    useBrowserConf().value.stream_id = ""
    useBrowserConf().value.stream_info = text
    MediaControl.onStreamOff()
};

const startSelfStream = (stream) => {
    logit("MEDIAS", "STARTSELFSTREAM " + stream.id + " " + stream.active)
    useSelfStream().value = stream
    setSelfStreamTracks()
    useBrowserConf().value.stream_status = stream.active
    useBrowserConf().value.stream_id = stream.id
    useBrowserConf().value.stream_info = "START STREAM"
    MediaControl.onStreamOn()
};







export const selfStreamIsOn = () => {
    return useSelfStream().value != null
}
export const bConfCanStream = () => {
    return useBrowserConf().value.micro_status || useBrowserConf().value.camera_status

}


//browser conf

export const useBrowserConf = () => {
    return useState('browserconf', () => {
        return {
            show_controls: true,
            camid:null,
            micid:null,
            micro_status: false,
            camera_status: true,
            stream_status: false,
            stream_id: "",
            stream_info: ""
        }

    })
}

const setSelfStreamTracks = () => {
    if (selfStreamIsOn()) {
        useSelfStream().value.getAudioTracks()[0].enabled = useBrowserConf().value.micro_status 
        useSelfStream().value.getVideoTracks()[0].enabled = useBrowserConf().value.camera_status 
    }
}


export const getConstrains = () => {
    let constrains = { video: false, audio: false }
    if (useBrowserConf().value.camid  != null) { constrains.video = { deviceId: useBrowserConf().value.camid } }
    if (useBrowserConf().value.micid  != null) { constrains.audio = { deviceId: useBrowserConf().value.micid } }
    return constrains
}




// Devices


export const useAudioDevices = () => { return useState('audiodevices', () => []) }
export const useVideoDevices = () => { return useState('videodevices', () => []) }

const buildDevices = (devices) => {

    let cpt_mic = 1;
    let cpt_cam = 1;
    let ids = [];
    let uad = [];
    let uvd = []
    for (const deviceInfo of devices) {
        if (
            deviceInfo.kind == "audioinput" &&
            ids.indexOf(deviceInfo.deviceId) == -1
        ) {
            uad.push({
                id: deviceInfo.deviceId,
                label: `Mic ${cpt_mic} (${deviceInfo.label})`,
            });
            cpt_mic = cpt_mic + 1;
            ids.push(deviceInfo.deviceId);
        }
        if (
            deviceInfo.kind == "videoinput" &&
            ids.indexOf(deviceInfo.deviceId) == -1
        ) {
            uvd.push({
                id: deviceInfo.deviceId,
                label: `Cam ${cpt_cam} (${deviceInfo.label})`,
            });
            cpt_cam = cpt_cam + 1;
            ids.push(deviceInfo.deviceId);
        }
    }
    useAudioDevices().value = uad;
    useVideoDevices().value = uvd;
    if(uad.length>0){useBrowserConf().value.micid=uad[0].id}
    if(uvd.length>0){useBrowserConf().value.camid=uvd[0].id}

}