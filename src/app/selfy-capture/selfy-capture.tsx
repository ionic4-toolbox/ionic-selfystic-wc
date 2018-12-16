import { Component } from '@stencil/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
    tag: 'app-selfy-capture',
    styleUrl: 'selfy-capture.scss'
})
export class SelfyCapture {
    
    async capture() {
        // e.preventDefault();
        const options = { quality: 100, allowEditing: true, resultType: CameraResultType.Uri, source: CameraSource.Camera };
        const image = await Camera.getPhoto(options);

        console.log('selfy-capture:capture:image', image);
    }

    render() {
        return [
            <ion-fab vertical='bottom' horizontal='center' slot='fixed' onClick={() => this.capture()}>
                <ion-fab-button color='dark'>
                    <ion-icon name='aperture'></ion-icon>
                </ion-fab-button>
            </ion-fab>
        ];
    }
};
