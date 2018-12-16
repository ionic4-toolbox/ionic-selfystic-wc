import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'app-selfy-card-default',
    styleUrl: 'selfy-card.scss'
})
export class SelfyCard {

    @Prop() title: string;

    render() {
        return (
            <ion-card>
                <ion-card-title>{this.title}</ion-card-title>
                <ion-segment color='transparent'>
                    <ion-segment-button>Share</ion-segment-button>
                    <ion-segment-button>Like</ion-segment-button>
                </ion-segment>
            </ion-card>
        );
    }
};
