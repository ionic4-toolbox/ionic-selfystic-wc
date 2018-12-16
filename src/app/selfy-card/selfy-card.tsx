import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'app-selfy-card',
    styleUrl: 'selfy-card.scss'
})
export class SelfyCard {

    @Prop() model: any;
    @Event() shared: EventEmitter;
    @Event() liked: EventEmitter;

    share(e: MouseEvent) {
        console.log('share', e, document.querySelector('app-selfy-card-list'));
        this.shared.emit(this.model);
    }

    like(e: MouseEvent) {
        console.log('like', e, document.querySelector('app-selfy-card-list'));
        this.liked.emit(this.model);
    }

    render() {
        return (
            <ion-card>
                <ion-img src={`${this.model.img}`}></ion-img>
                <ion-segment color='transparent'>
                    <ion-segment-button onClick={(e: MouseEvent) => this.share(e)}>Share</ion-segment-button>
                    <ion-segment-button onClick={(e: MouseEvent) => this.like(e)}>Like</ion-segment-button>
                </ion-segment>
            </ion-card>
        );
    }
};
