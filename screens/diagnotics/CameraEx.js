import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import CameraRoll from '@react-native-community/cameraroll'

export default function CameraEx(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type} ref={ref => {
                this.camera = ref;
            }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => {
                            const options = {
                                
                                quality: 1, base64: false, fixOrientation: true,
                                exif: true,
                            };

                            this.camera.takePictureAsync(options).then(photo => {
                                photo.exif.Orientation = 1;
                                console.log(photo["uri"])
                                CameraRoll.saveToCameraRoll(photo["uri"])
                                    .then(()=>console.log('lưu rồi'))
                                    .catch(err => console.error(err))
                                // props.navigation.navigate('Diagnotics', {
                                //     Imagesrc: photo["uri"]
                                // })
                            });

                        }}>
                     <MaterialCommunityIcons name="circle-outline"   // This is the icon which should take and save image
                  style={{ color: 'white', fontSize: 100 }}
                ></MaterialCommunityIcons>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}